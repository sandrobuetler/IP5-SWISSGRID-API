const express = require(`express`);
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`API is running on http://localhost:${PORT}`)
);

app.post('/aplan', (req, res) => {
    
    const { timeframe } = req.body;
    
    if(!timeframe) {
        res.status(418).send({message: 'Aplan Export fehlgeschlagen (kein Datumsbereich)!'})
    }
    setTimeout(() => {
    res.send({
        response: `Aplan Export erfolgreich`,
    }); }, 10000
    )
});

app.post('/siloveda', (req, res) => {
    
    const { timeframe } = req.body;
    const { type } = req.body;
    
    if(!timeframe) {
        res.status(418).send({message: 'Siloveda Export fehlgeschlagen (kein Datumsbereich)!'})
    }
    if(!type) {
        res.status(418).send({message: 'Siloveda Export fehlgeschlagen (kein Typ ausgewählt)!'})
    }
    setTimeout(() => {
    res.send({
        response: `Siloveda Export erfolgreich`,
    }); }, 10000
    )
});

app.post('/ops', (req, res) => {

    const { interval } = req.body;

    if(!interval) {
        res.status(418).send({message: 'OPS Berechnung fehlgeschlagen (MISSING INTERVAL)!'})
    }

    if(interval == "1"){
        setTimeout(() => {
            res.send({
                response: `Berechnung gestartet`,
            }); }, 3000
            )
    }
 
    if(interval == "2"){
    setTimeout(() => {
        res.send({
            response: `Berechnung erfolgreich`,
        }); }, 20000
        )
    }
});