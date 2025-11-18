# RXScan Client - Vite React Setup

This is the frontend client for RXScan Medical Transcription Platform, built with React and Vite.

## Features

- **Pure JavaScript**: All components are written in JavaScript (.jsx) - no TypeScript
- **Vite Build Tool**: Fast development and build with Vite
- **Standard CSS**: Custom CSS styling - no Tailwind CSS
- **React 18**: Latest React features with hooks
- **Responsive Design**: Mobile-first responsive design

## Development

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
This will start the Vite development server on http://localhost:5173

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure

```
client/
├── public/
│   ├── index.html          # Main HTML template
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/         # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Nav.jsx
│   │   ├── Footer.jsx
│   │   ├── Workspace.jsx
│   │   └── ...
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── vite.config.js         # Vite configuration
└── package.json
```

## Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **JavaScript**: Pure JS - no TypeScript
- **CSS3**: Custom styling - no Tailwind
- **Axios**: HTTP client
- **React Router**: Client-side routing


