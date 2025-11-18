# MIDL-Internship

Two mini projects live inside this repo:

1. **googleAuth** – email/password auth + Google OAuth, Express backend, React dashboard.
2. **RXSCAN** – mock medical transcription platform with a React landing page and a Socket.IO API.

You can run them separately or together. Below is the “just tell me what to do” guide.

---

## Folders at a Glance

- `googleAuth/backend` – Express routes for signup/login, JWT, Google callback, optional MongoDB.
- `googleAuth/frontend` – Vite/React UI for the auth flow.
- `RXSCAN/client` – Vite/React marketing site + demo components.
- `RXSCAN/server` – Express + Socket.IO server that fakes uploads, AI transcripts, FHIR data.

---

## Requirements

- Node 18+ (any current LTS works)
- npm 9+
- MongoDB URI **only if** you want real persistence; without it the auth API keeps data in-memory.

---

## Clone & Install

```bash
git clone https://github.com/sajeelailyas/midl-internship.git
cd midl-internship

# install per package
cd googleAuth/backend && npm install
cd ../frontend && npm install
cd ../../RXSCAN/client && npm install
cd ../server && npm install
```

---

## Environment Files

Create the files once and update the values for your setup.

`googleAuth/backend/.env`
```
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster/<db>
GOOGLE_CLIENT_ID=xxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=xxxxxx
API_URL=http://localhost:5000
JWT_SECRET=super-secret
```
`googleAuth/frontend/.env`
```
VITE_GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
REACT_APP_API_URL=http://localhost:5000
```

`googleAuth/frontend/src/config/env.js`
```js
export const config = {
  GOOGLE_CLIENT_ID: "xxxxx.apps.googleusercontent.com",
  API_URL: "http://localhost:5000",
  RXSCAN_URL: "http://localhost:5173"
};
```

`RXSCAN/server/.env`
```
PORT=6000
```

---

## How to Run (dev mode)

| Project | Location | Command | Default URL |
| --- | --- | --- | --- |
| Auth API | `googleAuth/backend` | `npm run dev` | `http://localhost:5000` |
| Auth UI | `googleAuth/frontend` | `npm run dev` | `http://localhost:5173` |
| RXSCAN UI | `RXSCAN/client` | `npm run dev` | `http://localhost:5174` (Vite will show exact port) |
| RXSCAN API | `RXSCAN/server` | `npm run dev` | `http://localhost:6000` |

> Run each command in its own terminal tab. Once the APIs start, the frontends automatically talk to them.

---

## Useful Routes

### googleAuth backend
- `GET /api/health`
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/google`
- `GET /api/auth/verify`

### RXSCAN server
- `POST /api/transcribe/audio`
- `GET /api/templates`
- `POST /api/templates/:id/generate`
- `GET /api/fhir/patient/:id`
- Socket events: `transcriptionUpdate`, `reportGenerated`

---

## Production Builds

```bash
# inside either frontend
npm run build
npm run preview

# inside any backend
npm run start   # runs node server.js
```

That’s it. Clone, set envs, run the scripts.


