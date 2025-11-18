# RXScan Medical Transcription Platform

A comprehensive medical transcription and radiology reporting platform built with React and Node.js.

## Features

- **Real-time Transcription**: Clinical-grade speech recognition with sub-second latency
- **Radiology Templates**: Intelligent autofill for radiology reports with structured field population
- **FHIR Integration**: Secure EHR connectivity with comprehensive audit logging
- **Modern UI**: Clean, responsive interface built with React and CSS
- **Real-time Updates**: WebSocket integration for live transcription updates

## Tech Stack

### Frontend
- React 18
- JavaScript (JSX) - Pure JavaScript, no TypeScript
- Vite (Build Tool)
- CSS3 (No Tailwind - Pure CSS)
- Socket.io Client

### Backend
- Node.js
- Express.js
- Socket.io
- Multer (File Upload)
- CORS

## Project Structure

```
RXSCAN/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Hero.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── CTA.jsx
│   │   │   ├── Nav.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx         # Main App component
│   │   └── index.jsx       # Entry point
│   └── package.json
├── server/                 # Node.js backend
│   ├── server.js          # Main server file
│   ├── uploads/           # File upload directory
│   └── package.json
└── package.json           # Root package.json
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm

### Quick Start

1. **Install all dependencies:**
   ```bash
   npm run install-all
   ```

2. **Start both frontend and backend:**
   ```bash
   npm run dev
   ```

   This will start:
   - React frontend on http://localhost:3000
   - Node.js backend on http://localhost:5000

### Manual Setup

#### Frontend Setup
```bash
cd client
npm install
npm run dev
```

#### Backend Setup
```bash
cd server
npm install
npm run dev
```

## API Endpoints

### Health Check
- `GET /api/health` - Server health status

### Transcription
- `POST /api/transcribe/audio` - Upload audio for transcription
- `GET /api/transcribe/:id` - Get transcription status

### Templates
- `GET /api/templates` - Get available radiology templates
- `POST /api/templates/:id/generate` - Generate report from template

### FHIR Integration
- `GET /api/fhir/patient/:id` - Get patient data from FHIR

## WebSocket Events

### Client to Server
- `joinSession` - Join a transcription session
- `startTranscription` - Start transcription process

### Server to Client
- `transcriptionUpdate` - Real-time transcription updates
- `reportGenerated` - Report generation complete
- `transcriptionStarted` - Transcription session started

## Development

### Frontend Development
The React app uses pure CSS (no Tailwind) for styling. All components are in JSX format.

### Backend Development
The Express server includes:
- File upload handling with Multer
- Real-time communication with Socket.io
- CORS enabled for frontend integration
- Error handling middleware

## Production Build

```bash
# Build frontend
npm run build

# Start production server
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.