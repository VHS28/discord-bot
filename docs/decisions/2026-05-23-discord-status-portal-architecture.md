# Entscheidung: Discord-Bot mit Status- und Regelportal

## Status

Angenommen fuer MVP-Start.

## Kontext

Das Projekt soll Beitritte und Austritte aus einem Discord-Testserver erfassen und eine Status-/Adminseite bereitstellen. Willkommensnachricht, Regeln und Beitrittsfenster sollen administrierbar sein.

Eine reine statische Website reicht nicht aus, weil Join-/Leave-Events einen laufenden Discord-Bot benoetigen und Adminfunktionen sichere Schreibzugriffe brauchen.

## Entscheidung

Das MVP wird als kleiner Node.js-Service umgesetzt. Der Service kombiniert Discord-Bot, HTTP API und statisches Frontend. Als lokale Datenhaltung wird SQLite vorgesehen. TypeScript wird genutzt, um Datenmodelle und Schnittstellen frueh typisiert zu halten.

## Begruendung

Diese Architektur haelt den Start klein und vermeidet fruehe Plattformkomplexitaet. Ein einzelner Service ist lokal einfach testbar, braucht keine separate Datenbank-Infrastruktur und kann spaeter per Docker betrieben werden. SQLite reicht fuer einen kleinen Discord-Server und kann spaeter bei Bedarf ersetzt werden.

## Sicherheitsgrenzen

- Keine Secrets im Repository.
- Keine `.env`-Dateien committen.
- Keine produktiven Discord-Tokens in Dokumentation oder Tests.
- MVP nur mit Testserver betreiben.
- Admin-Endpunkte authentifizieren.
- Discord-IDs nicht oeffentlich anzeigen.
- Automatische Moderationsaktionen sind im MVP ausgeschlossen.

## Konsequenzen

- Es entsteht ein kleiner Betriebsdienst, nicht nur eine statische Website.
- Deployment und Secret-Verwaltung muessen vor produktiver Nutzung separat geklaert werden.
- GitHub Pages allein ist fuer das Gesamtziel nicht ausreichend.
- Docker bleibt eine sinnvolle spaetere Deployment-Option.

## Offene Punkte

- Exaktes Deployment-Ziel
- Backup-Strategie fuer SQLite
- Admin-Authentifizierung im Detail
- Umfang der oeffentlichen Event-Anzeige
