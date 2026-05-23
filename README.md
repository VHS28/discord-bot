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
- keine Secrets im Repository

## Nicht im Scope des MVP

- produktiver Discord-Server ohne separates Review
- automatische Kicks/Bans
- Rollenmanagement
- Mehrmandantenfaehigkeit
- oeffentliche Anzeige von Discord-IDs
- echte Kundendaten
- komplexes Cloud-Deployment

## Sicherheitsgrenzen

- Discord Bot Token nur lokal oder als Deployment-Secret verwenden.
- `.env` darf nicht committet werden.
- `.env.example` enthaelt nur Platzhalter.
- MVP zunaechst nur mit Testserver betreiben.
- Adminbereich nur authentifiziert bereitstellen.
- Bot-Rechte minimal halten.
- Keine automatischen Moderationsaktionen im MVP.

## Geplanter Tech Stack

- Node.js 22 LTS
- TypeScript
- discord.js
- Fastify
- SQLite
- Drizzle ORM
- statisches HTML/CSS/JS fuer das MVP-Frontend

## Lokale Entwicklung

Geplante Befehle:

```bash
npm install
npm run lint
npm test
npm run dev
```

Diese Befehle sind erst nach der technischen Grundinitialisierung ausfuehrbar.

## Projektsteuerung

Die Initialisierung basiert auf Issue #1.
