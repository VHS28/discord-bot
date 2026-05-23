# Projekt-Overlay: Discord-Bot mit Status- und Regelportal

## Ziel

Das Projekt baut einen Discord-Bot mit zugehoeriger Status- und Adminseite. Der Bot erfasst Beitritte und Austritte aus einem Discord-Testserver. Die Statusseite zeigt Willkommensnachricht, Regeln, Beitrittsfenster und die letzten Join-/Leave-Events. Der Adminbereich macht Willkommensnachricht, Regeln und Beitrittsfenster verwaltbar.

## Zielgruppe

- Betreiber eines kleinen Discord-Servers
- Admins, die Regeln und Willkommensinformationen zentral pflegen wollen
- Mitglieder oder Besucher, die den aktuellen Status einsehen sollen

## Projekt-Archetyp

App-Prototyp mit externer Integration.

## Reifegrad

Das Projekt ist nicht Phase 0B, weil es Discord-Integration, Bot-Betrieb, Admin-Schreibzugriffe und potenziell personenbezogene Community-Daten beruehrt. Produktiver Betrieb braucht ein separates Review und ein Betriebskonzept.

## Geplanter Tech Stack

- Node.js 22 LTS
- TypeScript
- discord.js
- Fastify
- SQLite
- Drizzle ORM
- statisches HTML/CSS/JS fuer das MVP-Frontend
- spaeter optional Docker fuer Deployment

## Erlaubte Daten im MVP

- synthetische Testdaten
- Daten aus einem Discord-Testserver
- anonymisierte oder minimierte Join-/Leave-Events
- nicht geheime Konfiguration in `.env.example`

## Ausgeschlossene Daten

- echte Kundendaten
- produktive Discord-Tokens
- Passwoerter oder Secrets
- `.env`-Dateien
- private Schluessel
- oeffentliche Anzeige von Discord-IDs

## Sicherheitsgrenzen

- Bot-Token nur lokal oder als Deployment-Secret verwenden.
- Keine Secrets ins Repository.
- Admin-Endpunkte nur authentifiziert bereitstellen.
- Discord-IDs oeffentlich nicht anzeigen.
- Automatische Moderationsaktionen wie Kicks oder Bans sind im MVP ausgeschlossen.
- Bot-Rechte minimal halten.
- MVP nur mit Testserver betreiben.

## Nicht-Ziele

- produktiver Dauerbetrieb ohne Review
- Mehrmandantenfaehigkeit
- Rollenmanagement
- automatische Sanktionen
- komplexes Cloud-Deployment
- vollstaendige Benutzerverwaltung im Adminbereich

## Geplante Pruefungen

```bash
npm install
npm run lint
npm test
npm run dev
```

Zusaetzliche manuelle Pruefungen spaeter:

- Bot verbindet sich mit Testserver.
- Join-Event wird erkannt.
- Leave-Event wird erkannt.
- `GET /health` antwortet.
- `GET /api/public/status` liefert oeffentliche Daten ohne Secrets.

## Uebergabeartefakte

- README mit Setup und Grenzen
- Architekturentscheidung unter `docs/decisions/`
- Discord-Setup-Anleitung unter `docs/setup/`
- spaeter PRs mit Pruefstatus und offenen Punkten
