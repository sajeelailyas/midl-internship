const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'RXScan Medical Transcription API' });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'RXScan API'
  });
});

// Transcription endpoints
app.post('/api/transcribe/audio', upload.single('audio'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No audio file provided' });
    }

    // Simulate transcription processing
    const transcription = {
      id: Date.now().toString(),
      filename: req.file.filename,
      originalName: req.file.originalname,
      status: 'processing',
      text: '',
      confidence: 0,
      timestamp: new Date().toISOString()
    };

    // Simulate real-time transcription
    setTimeout(() => {
      transcription.status = 'completed';
      transcription.text = 'Patient presents with chest pain and shortness of breath. Physical examination reveals...';
      transcription.confidence = 0.95;
      
      // Emit to connected clients
      io.emit('transcriptionUpdate', transcription);
    }, 2000);

    res.json(transcription);
  } catch (error) {
    console.error('Transcription error:', error);
    res.status(500).json({ error: 'Transcription failed' });
  }
});

// Get transcription status
app.get('/api/transcribe/:id', (req, res) => {
  const { id } = req.params;
  
  // Simulate getting transcription status
  const transcription = {
    id,
    status: 'completed',
    text: 'Patient presents with chest pain and shortness of breath. Physical examination reveals...',
    confidence: 0.95,
    timestamp: new Date().toISOString()
  };

  res.json(transcription);
});

// Radiology template endpoints
app.get('/api/templates', (req, res) => {
  const templates = [
    {
      id: 'chest-xray',
      name: 'Chest X-Ray',
      fields: [
        { name: 'patientId', label: 'Patient ID', type: 'text', required: true },
        { name: 'studyDate', label: 'Study Date', type: 'date', required: true },
        { name: 'indication', label: 'Clinical Indication', type: 'text', required: true },
        { name: 'technique', label: 'Technique', type: 'text', required: true },
        { name: 'findings', label: 'Findings', type: 'textarea', required: true },
        { name: 'impression', label: 'Impression', type: 'textarea', required: true }
      ]
    },
    {
      id: 'mri-brain',
      name: 'MRI Brain',
      fields: [
        { name: 'patientId', label: 'Patient ID', type: 'text', required: true },
        { name: 'studyDate', label: 'Study Date', type: 'date', required: true },
        { name: 'indication', label: 'Clinical Indication', type: 'text', required: true },
        { name: 'technique', label: 'Technique', type: 'text', required: true },
        { name: 'findings', label: 'Findings', type: 'textarea', required: true },
        { name: 'impression', label: 'Impression', type: 'textarea', required: true }
      ]
    }
  ];

  res.json(templates);
});

// Generate report from template
app.post('/api/templates/:id/generate', (req, res) => {
  const { id } = req.params;
  const { transcription } = req.body;

  // Simulate AI-powered report generation
  const report = {
    id: Date.now().toString(),
    templateId: id,
    status: 'generating',
    content: {},
    timestamp: new Date().toISOString()
  };

  // Simulate processing time
  setTimeout(() => {
    report.status = 'completed';
    report.content = {
      patientId: 'P123456',
      studyDate: new Date().toISOString().split('T')[0],
      indication: 'Chest pain and shortness of breath',
      technique: 'PA and lateral chest radiographs',
      findings: 'The lungs are clear bilaterally. Heart size is normal. No acute bony abnormalities.',
      impression: 'Normal chest radiograph. No acute cardiopulmonary process.'
    };

    // Emit to connected clients
    io.emit('reportGenerated', report);
  }, 3000);

  res.json(report);
});

// FHIR integration endpoints
app.get('/api/fhir/patient/:id', (req, res) => {
  const { id } = req.params;
  
  // Simulate FHIR patient data
  const patient = {
    id,
    name: 'John Doe',
    birthDate: '1980-01-01',
    gender: 'male',
    address: {
      line: ['123 Main St'],
      city: 'New York',
      state: 'NY',
      postalCode: '10001'
    },
    conditions: [
      {
        code: 'I25.9',
        display: 'Chronic ischemic heart disease, unspecified'
      }
    ],
    medications: [
      {
        name: 'Aspirin',
        dosage: '81mg daily'
      }
    ]
  };

  res.json(patient);
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.on('joinSession', (sessionId) => {
    socket.join(sessionId);
    console.log(`Client ${socket.id} joined session ${sessionId}`);
  });

  socket.on('startTranscription', (data) => {
    console.log('Starting transcription for session:', data.sessionId);
    // Emit transcription updates
    socket.emit('transcriptionStarted', { sessionId: data.sessionId });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
server.listen(PORT, () => {
  console.log(`RXScan API server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});



