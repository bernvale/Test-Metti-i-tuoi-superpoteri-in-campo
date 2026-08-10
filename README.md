# 🏆 Scopri il super potere che puoi mettere in campo

Web app mobile-first, senza login, senza database, senza raccolta dati personali. 12 domande → un super potere (tra 10 profili ispirati a campioni sportivi) → un super potere da far fiorire → 3 aree professionali consigliate, calcolate con un secondo sistema di scoring invisibile e calibrato matematicamente.

Tutta la logica di calcolo gira **localmente nel browser**: nessun dato lascia mai il telefono di chi fa il test.

## File

```
index.html    → struttura della pagina
style.css     → stile "sport × player card × videogame"
script.js     → domande, doppio scoring, calibrazione, rendering
qrcode.js     → libreria open source (MIT, Kazuhiko Arase) per generare il QR code
ei-logo.png   → logo Eurointerim, mostrato in alto a destra su ogni card
```

## Accesso al gioco

Il gioco è raggiungibile in due modi, che convivono senza bisogno di alcuna configurazione:

- **Link diretto**: una volta pubblicato, l'indirizzo del sito (es. `https://tuo-username.github.io/nome-repo/`) è un normale link condivisibile via email, WhatsApp, SMS o qualsiasi altro canale.
- **QR code**: nella schermata iniziale del gioco è presente un QR code generato automaticamente dal browser stesso, che punta sempre all'indirizzo esatto su cui il sito sta girando in quel momento — anche se in futuro lo pubblichi altrove, il QR si aggiorna da solo senza bisogno di rigenerarlo.

## Come pubblicarlo su GitHub Pages

1. Crea un nuovo repository pubblico su GitHub.
2. Carica **tutti e cinque i file** (`index.html`, `style.css`, `script.js`, `qrcode.js`, `ei-logo.png`) nella cartella principale (root) del repository — non dentro una sottocartella.
3. Vai su `Settings` → `Pages` → in "Source" scegli **Deploy from a branch**, branch `main`, cartella `/ (root)` → Save.
4. Dopo 1-2 minuti troverai il link pubblico in cima a quella stessa pagina, del tipo:
   ```
   https://tuo-username.github.io/nome-repo/
   ```
5. Condividi quel link (o un QR code che punta lì) — funziona da qualsiasi smartphone senza installare nulla.

## Come funziona il calcolo (in breve)

Ogni risposta alle 12 domande alimenta **due sistemi di punteggio**:

1. **10 super poteri** (Fantasia, Tenacia, Versatilità, Strategia, Concentrazione, Comunicazione, Impatto, Coraggio, Intuito, Disciplina) — ognuno associato a un campione o una campionessa. Vince quello con il punteggio più alto; in caso di parità si applicano le regole di spareggio descritte nella specifica (più risposte "primarie", poi la risposta alla domanda 12, poi estrazione casuale).

2. **8 dimensioni professionali nascoste** (Persone, Analisi, Creatività, Organizzazione, Tecnica, Decisione, Regole, Esplorazione) → normalizzate → proiettate su **15 aree aziendali** tramite pesi dedicati → calibrate con una formula statistica (z-score + correzione).

**Selezione delle 3 aree finali (aggiornata per coerenza tematica):** a differenza della prima versione — dove le aree erano scelte in modo completamente indipendente dal super potere — ora le 3 aree proposte vengono scelte così:
- ogni super potere ha un **pool di 5 aree affini** per tema (es. Versatilità → IT & Digital, Project Management, Customer Service, Design & Product, Commerciale)
- le **prime 2 aree** vengono sempre scelte da quel pool, prendendo le due con il punteggio calibrato più alto in base alle risposte effettive
- la **terza area** può ancora venire dal pool del super potere primario, oppure — solo se il punteggio calcolato dalle risposte lo indica chiaramente — dal pool del "super potere da far fiorire" (il talento secondario), aggiungendo una sfumatura coerente ma personalizzata

Questo garantisce che il risultato sia sempre tematicamente coerente con il super potere principale, pur restando personalizzato in base alle risposte effettive di ciascuno.

## Personalizzare i contenuti

Tutti i testi (domande, risposte, player card, descrizioni delle aree) sono in `script.js`, organizzati in blocchi chiaramente commentati all'inizio del file (`QUESTIONS`, `POWERS`, `GROWTH_TEXT`, `AREAS`, `AREA_AFFINITY`). Le formule di calcolo (`CALIBRATION`, pesi delle aree) sono più sotto e vanno toccate solo se si vuole ricalibrare il sistema. Per cambiare quali aree sono affini a un super potere, modifica l'oggetto `AREA_AFFINITY`.

## Privacy

Nessun nome, email, età o dato personale viene richiesto. Nessun cookie di profilazione. Nessun invio a server esterni: tutto il calcolo avviene nel browser dell'utente.
