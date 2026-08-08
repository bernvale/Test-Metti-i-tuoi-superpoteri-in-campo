# 🏆 Scopri il super potere che puoi mettere in campo

Web app mobile-first, senza login, senza database, senza raccolta dati personali. 12 domande → un super potere (tra 10 profili ispirati a campioni sportivi) → un super potere da far fiorire → 3 aree professionali consigliate, calcolate con un secondo sistema di scoring invisibile e calibrato matematicamente.

Tutta la logica di calcolo gira **localmente nel browser**: nessun dato lascia mai il telefono di chi fa il test.

## File

```
index.html   → struttura della pagina
style.css    → stile "sport × player card × videogame"
script.js    → domande, doppio scoring, calibrazione, rendering
```

## Come pubblicarlo su GitHub Pages

1. Crea un nuovo repository pubblico su GitHub.
2. Carica **tutti e tre i file** (`index.html`, `style.css`, `script.js`) nella cartella principale (root) del repository — non dentro una sottocartella.
3. Vai su `Settings` → `Pages` → in "Source" scegli **Deploy from a branch**, branch `main`, cartella `/ (root)` → Save.
4. Dopo 1-2 minuti troverai il link pubblico in cima a quella stessa pagina, del tipo:
   ```
   https://tuo-username.github.io/nome-repo/
   ```
5. Condividi quel link (o un QR code che punta lì) — funziona da qualsiasi smartphone senza installare nulla.

## Come funziona il calcolo (in breve)

Ogni risposta alle 12 domande alimenta **due sistemi di punteggio indipendenti e invisibili**:

1. **10 super poteri** (Fantasia, Tenacia, Versatilità, Strategia, Concentrazione, Comunicazione, Impatto, Coraggio, Intuito, Disciplina) — ognuno associato a un campione o una campionessa. Vince quello con il punteggio più alto; in caso di parità si applicano le regole di spareggio descritte nella specifica (più risposte "primarie", poi la risposta alla domanda 12, poi estrazione casuale).

2. **8 dimensioni professionali nascoste** (Persone, Analisi, Creatività, Organizzazione, Tecnica, Decisione, Regole, Esplorazione) → normalizzate → proiettate su **15 aree aziendali** tramite pesi dedicati → calibrate con una formula statistica (z-score + correzione) tarata per restituire una distribuzione equilibrata tra le 15 aree → selezionate le 3 aree finali, privilegiando varietà tra "famiglie" professionali diverse quando i punteggi sono molto vicini.

Il secondo sistema è del tutto indipendente dal primo: due persone con lo stesso super potere possono ricevere aree professionali diverse.

**Verifica effettuata:** ho testato la logica con 20.000 simulazioni casuale delle 12 risposte. La distribuzione dei super poteri risulta equilibrata (~8,5%-11,7% ciascuno su 10 profili, atteso ~10%) e la distribuzione della prima area professionale risulta anch'essa equilibrata (~6,1%-7,0% su 15 aree, atteso ~6,7%), in linea con quanto previsto dalla specifica.

## Personalizzare i contenuti

Tutti i testi (domande, risposte, player card, descrizioni delle aree) sono in `script.js`, organizzati in blocchi chiaramente commentati all'inizio del file (`QUESTIONS`, `POWERS`, `GROWTH_TEXT`, `AREAS`). Le formule di calcolo (`CALIBRATION`, pesi delle aree) sono più sotto e vanno toccate solo se si vuole ricalibrare il sistema.

## Privacy

Nessun nome, email, età o dato personale viene richiesto. Nessun cookie di profilazione. Nessun invio a server esterni: tutto il calcolo avviene nel browser dell'utente.
