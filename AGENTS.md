# AGENTS.md

## Sprache

- Dokumentation standardmaessig auf Deutsch schreiben.
- Technische Begriffe duerfen auf Englisch bleiben, wenn sie praeziser sind.

## Arbeitsweise

- Direkt, kritisch und pragmatisch arbeiten.
- Schwache Annahmen markieren.
- Empfehlungen nach Kosten, Nutzen, Risiko und Wartungsaufwand bewerten.
- Aenderungen klein, nachvollziehbar und reviewbar halten.
- Keine erfundenen Testergebnisse dokumentieren.
- Nicht gepruefte Punkte klar als nicht geprueft markieren.

## Git und GitHub

- Geplante Aenderungen sollen ueber Issue, Branch und Pull Request laufen.
- Pull Requests sollen Ziel, Scope, Pruefstatus und offene Punkte enthalten.
- Keine direkten Merges ohne Review durch den Repository-Owner oder Maintainer.
- Keine Branches oder Dateien loeschen ohne explizite Bestaetigung.

## Sicherheit

- Keine Secrets, Tokens, Passwoerter, privaten Schluessel oder Zugangsdaten committen.
- Keine `.env`-Dateien committen.
- `.env.example` darf nur Platzhalter enthalten.
- Keine echten Kundendaten im MVP verwenden.
- Discord-IDs nicht oeffentlich anzeigen.
- Adminfunktionen nur authentifiziert bereitstellen.
- Automatische Moderationsaktionen wie Kicks oder Bans sind im MVP ausgeschlossen.

## Projektgrenzen

- MVP zunaechst nur mit Discord-Testserver betreiben.
- Produktiver Betrieb braucht separates Review und Betriebskonzept.
- Bot-Rechte minimal halten.
