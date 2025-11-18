# midl-internship

Full-stack monorepo that powers two tracks of the internship assignment:

- `googleAuth/` – email/password + Google OAuth login system built with Express, MongoDB (optional) and a Vite/React dashboard.
- `RXSCAN/` – medical transcription and reporting prototype featuring a Vite/React client and a Node/Express realtime API with Socket.IO.

Both tracks can run independently. This document explains the structure, environment variables, and commands needed to develop or deploy each service.

---

## Repository Structure

| Path | Description |
| --- | --- |
| `googleAuth/backend/` | Express API that handles auth, JWT issuance, MongoDB persistence (optional) and Google OAuth callbacks. |
| `googleAuth/frontend/` | Vite/React client for signup/login flows plus Google sign-in UI. |
| `RXSCAN/client/` | Vite/React marketing + product demo for the RXScan platform. |
| `RXSCAN/server/` | Express + Socket.IO API that simulates uploads, AI transcription, report templates and FHIR responses. |

---

## Prerequisites

- **Node.js** ≥ 18.x (LTS recommended)
- **npm** ≥ 9.x
- Optional: MongoDB Atlas cluster if you want persistence instead of in-memory storage for the auth backend.

> Each package manages its own dependencies. Make sure to run `npm install` inside every folder you plan to run.

---

## Environment Variables

Create the following files before starting the servers. Values below are placeholders—replace them with your own keys, URIs and secrets.

### `googleAuth/backend/.env`

```
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<db>?retryWrites=true&w=majority
GOOGLE_CLIENT_ID=xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret
API_URL=http://localhost:5000
JWT_SECRET=super-secret-jwt-key
```

- `MONGODB_URI` can be omitted for quick testing; the API falls back to in-memory storage.
- `API_URL` must match the backend’s public URL so OAuth callbacks redirect correctly.

### `googleAuth/frontend`

The React client currently reads from `src/config/env.js`. Update the values inside that file (or switch to Vite env vars if you prefer) so they match your Google credentials and backend URL:

```js
export const config = {
  GOOGLE_CLIENT_ID: "xxxxxxxx.apps.googleusercontent.com",
  API_URL: "http://localhost:5000",
  RXSCAN_URL: "http://localhost:5173"
};
```

### `RXSCAN/server/.env`

```
PORT=6000
```

Add more variables here if you extend the API (storage buckets, external AI services, etc.).

---

## Installation & Running

Clone the repo and install dependencies for each package you need:

```bash
git clone https://github.com/sajeelailyas/midl-internship.git
cd midl-internship

# Install dependencies per package
cd googleAuth/backend && npm install
cd ../frontend && npm install
cd ../../RXSCAN/client && npm install
cd ../server && npm install
```

### Start the Google Auth stack

| Service | Command | Notes |
| --- | --- | --- |
| Backend | `npm run dev` (inside `googleAuth/backend`) | Uses Nodemon. Exposes REST endpoints such as `/api/auth/signup`, `/api/auth/login`, `/api/auth/google`, `/api/auth/verify` and `/api/health`. |
| Frontend | `npm run dev` (inside `googleAuth/frontend`) | Vite dev server defaults to `http://localhost:5173`. Ensure the backend `API_URL` matches. |

### Start the RXSCAN stack

| Service | Command | Notes |
| --- | --- | --- |
| Client | `npm run dev` (inside `RXSCAN/client`) | Vite SPA showcasing the RXScan UX. Update `vite.config.js` if you need a different port. |
| Server | `npm run dev` (inside `RXSCAN/server`) | Simulates audio uploads, AI transcription, report templates, and FHIR endpoints. Socket.IO broadcasts `transcriptionUpdate` and `reportGenerated` events. |

> Run each command in its own terminal window/tab. Once all services are up, the React apps will automatically proxy/consume their respective APIs.

---

## Useful Endpoints

### Google Auth Backend

- `GET /api/health` – sanity check for the API.
- `POST /api/auth/signup` – traditional email/password registration.
- `POST /api/auth/login` – login returning JWT.
- `POST /api/auth/google` – Google ID token exchange for JWT.
- `GET /api/auth/verify` – verifies JWT and returns the user profile.
- `GET /oauth-callback` – redirect handler used during Google OAuth.

### RXSCAN API

- `GET /api/health` – server status.
- `POST /api/transcribe/audio` – upload audio (multipart/form-data, `audio` field).
- `GET /api/transcribe/:id` – fetch simulated transcription.
- `GET /api/templates` – list radiology templates.
- `POST /api/templates/:id/generate` – mock AI-generated report.
- `GET /api/fhir/patient/:id` – sample FHIR patient payload.
- Socket.IO events: `transcriptionUpdate`, `reportGenerated`, `transcriptionStarted`.

---

## Building for Production

Each Vite client supports the usual commands:

```bash
# Inside googleAuth/frontend or RXSCAN/client
npm run build        # Generates production assets in dist/
npm run preview      # Serves the build locally
```

Backend services expose `npm run start` scripts that run `node server.js` for production deployments.

---

## Contributing / Next Steps

- Wire RXSCAN API to actual AI or speech-to-text services.
- Replace the hardcoded frontend config with secure environment variables.
- Add automated testing, linting CI, or Dockerfiles if needed for deployment.

Feel free to extend or refactor as required for your internship submission. PRs and suggestions are welcome!


