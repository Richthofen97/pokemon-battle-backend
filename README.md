# 🎯 Ziel des Projekts

Dieses Projekt ist ein Pokémon Battle System Backend.

Es stellt eine API bereit für:
- Spieler-Authentifizierung (extern über JWT)
- Speicherung von Kampfergebnissen
- Leaderboard / Rangliste
- Verarbeitung von Battle-Ergebnissen

Die Pokémon-Daten kommen aus der PokeAPI und werden vom Frontend genutzt.

---

# 🧩 Pokémon Battle Backend

Backend für ein Pokémon-Kampfspiel mit Express, TypeScript, MongoDB und JWT-Schutz.

---

# 🚀 Tech Stack

- Node.js
- Express
- TypeScript
- MongoDB + Mongoose
- JWT Authentication
- Zod Validation

---

# ⚙️ Installation

npm install

---

# 🔐 Environment Variables

Erstelle eine `.env` Datei im Root-Verzeichnis:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

---

# ▶️ Start Development Server

npm run dev

---

# 📡 Base URL

http://localhost:3000

---

# 📊 Leaderboard API

## GET /leaderboard

Gibt die Top 10 Spieler nach Score zurück.

GET /leaderboard

Response:

{
  "success": true,
  "data": [
    {
      "_id": "...",
      "userId": "...",
      "score": 120,
      "wins": 2,
      "losses": 1,
      "date": "2026-01-01T00:00:00.000Z"
    }
  ]
}

---

## POST /leaderboard (protected)

Speichert einen neuen Score-Eintrag.

Authorization: Bearer <JWT_TOKEN>

Body:

{
  "score": 100,
  "wins": 1,
  "losses": 0
}

---

# ⚔️ Battle API

## POST /battle/result (protected)

Speichert das Ergebnis eines Kampfes und aktualisiert den Score.

Authorization: Bearer <JWT_TOKEN>

Body:

{
  "scoreChange": 50,
  "wins": 1,
  "losses": 0
}

---

# 🔐 Auth Hinweis

- Authentifizierung erfolgt über externen Service
- Dieses Backend validiert nur JWT Tokens
- Token muss im Header übergeben werden

---

# 🧠 Datenmodell

Score:

{
  userId: ObjectId,
  score: number,
  wins: number,
  losses: number,
  date: Date
}

---

# 🧱 Projektstruktur

src/
 ├── controllers/
 ├── routes/
 ├── models/
 ├── middleware/
 ├── utils/
 ├── config/
 └── server.ts

---

# 🧪 Features

- JWT geschützte Routen
- Leaderboard System
- Battle Result Verarbeitung
- MongoDB Integration
- Zod Validierung
- Error Handling Middleware
