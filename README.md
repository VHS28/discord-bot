# Discord Bot mit Status- und Regelportal

Dieses Repository enthaelt einen Discord-Bot mit zugehoeriger Status- und Adminseite.

## Ziel

Der Bot soll Beitritte und Austritte aus einem Discord-Testserver erfassen. Die Statusseite soll Willkommensnachricht, Regeln, Beitrittsfenster sowie die letzten Beitritte und Austritte anzeigen. Ein Adminbereich soll diese Inhalte verwaltbar machen.

## Geplanter MVP-Scope

- Discord-Bot-Grundlage
- Tracking von Beitritten und Austritten
- SQLite-Datenhaltung
- oeffentliche Status-API
- oeffentliche Statusseite
- einfacher Adminbereich
- deutsche Dokumentation
- keine Zugangsdaten im Repository

## Nicht im Scope des MVP

- produktiver Discord-Server ohne separates Review
- automatische Kicks/Bans
- Rollenmanagement
- Mehrmandantenfaehigkeit
- oeffentliche Anzeige von Discord-IDs
- echte Kundendaten
- komplexes Cloud-Deployment

## Sicherheitsgrenzen

- Zugangsdaten nur lokal oder als Deployment-Secret verwenden.
- `.env` darf nicht committet werden.
- `.env.example` enthaelt nur Platzhalter.
- MVP zunaechst nur mit Testserver betreiben.
- Adminbereich nur authentifiziert bereitstellen.
- Bot-Rechte minimal halten.
- Keine automatischen Moderationsaktionen im MVP.
- Die oeffentliche Statusseite zeigt keine Discord-IDs oder ID-Hashes an.

## Geplanter Tech Stack

- Node.js 22 LTS
- TypeScript
- discord.js
- Fastify
- SQLite
- Drizzle ORM
- statisches HTML/CSS/JS fuer das MVP-Frontend

## Lokale Entwicklung

```bash
npm install
npm run build
npm run lint
npm test
npm run dev
```

## Konfiguration

Lege lokal eine `.env`-Datei auf Basis von `.env.example` an. Die `.env`-Datei darf nicht committet werden.

Wichtige Variablen:

- `DISCORD_BOT_TOKEN`
- `DISCORD_CLIENT_ID`
- `DISCORD_GUILD_ID`
- `DATABASE_URL`, optional, Standard: `file:./data/discord-status.sqlite`
- `HOST`, optional, Standard: `127.0.0.1`
- `PORT`, optional, Standard: `3000`

## Oeffentliche Statusseite

Die Statusseite wird statisch ueber Fastify ausgeliefert und nutzt die Public API.

Lokal starten:

```bash
npm run dev
```

Danach lokal oeffnen:

- Statusseite: `http://127.0.0.1:3000/`
- Public Member Events API: `http://127.0.0.1:3000/api/public/member-events`
- Public Status API: `http://127.0.0.1:3000/api/public/status`
- Healthcheck: `http://127.0.0.1:3000/health`

Die Seite zeigt die letzten Join-/Leave-Events aus der Public API. Sie enthaelt Ladezustand, leeren Zustand und Fehlerzustand. Angezeigt werden nur Event-Typ, Anzeigename-Snapshot und Zeitpunkt; Discord-IDs und Hashes werden nicht im Frontend angezeigt.

## Manueller UI-Test fuer die Statusseite

Zuletzt manuell geprueft:

- Statusseite lokal geoeffnet.
- Join-Event durch Server-Beitritt erzeugt und auf der Statusseite angezeigt.
- Leave-Event durch Server-Verlassen erzeugt und auf der Statusseite angezeigt.

Nicht geprueft:

- API-Fehlerzustand wurde nicht separat simuliert.

## Aktueller Umsetzungsstand

Enthalten:

- Bot-Minimalstart
- Join-/Leave-Tracking
- SQLite-Persistenz fuer Member-Events
- Public Status API
- oeffentliche Statusseite

Noch nicht enthalten:

- Adminseite
- Regeln speichern oder bearbeiten
- Willkommensnachricht speichern oder bearbeiten
- Beitrittsfenster-Konfiguration
- produktiver Betrieb

## Projektsteuerung

Die Initialisierung basiert auf Issue #1. Der Bot-Minimalstart basiert auf Issue #2. Die oeffentliche Statusseite basiert auf Issue #10.
