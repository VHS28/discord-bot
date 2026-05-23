# Discord-Bot Setup

## Zweck

Diese Anleitung beschreibt die geplante Einrichtung des Discord-Bots fuer den MVP. Der Bot soll zunaechst nur mit einem Testserver genutzt werden.

## Voraussetzungen

- Zugriff auf das GitHub-Repository
- Node.js 22 LTS lokal installiert
- Discord-Testserver
- Berechtigung, eine Discord Application und einen Bot zu erstellen

## Discord Application erstellen

1. Discord Developer Portal oeffnen.
2. Neue Application erstellen.
3. Bot fuer die Application anlegen.
4. Bot-Token nur lokal in `.env` speichern.
5. Token niemals ins Repository, in Issues, Pull Requests oder Screenshots kopieren.

## Benoetigte Intents

Fuer das Join-/Leave-Tracking wird der Guild Members Intent benoetigt.

Im MVP werden nur die noetigen Events genutzt:

- Beitritt eines Mitglieds
- Austritt eines Mitglieds

## Lokale `.env`

Aus `.env.example` lokal eine `.env` erstellen:

```bash
cp .env.example .env
```

Danach Platzhalterwerte lokal ersetzen. Die `.env` bleibt lokal und wird nicht committet.

## Geplante lokale Befehle

```bash
npm install
npm run lint
npm test
npm run dev
```

Diese Befehle sind erst nach der technischen Grundinitialisierung vollstaendig ausfuehrbar.

## Sicherheitsregeln

- Nur Testserver im MVP verwenden.
- Bot-Rechte minimal halten.
- Keine Admin-Rechte fuer den Bot vergeben, solange nicht explizit erforderlich.
- Keine automatischen Kicks oder Bans im MVP.
- Discord-IDs nicht oeffentlich anzeigen.
