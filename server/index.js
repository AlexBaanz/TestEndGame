import express from 'express';
import { readFile } from 'fs/promises';
import cors from 'cors'
const json = JSON.parse(await readFile(new URL('./data.json', import.meta.url)));
const app = express();
app.use(cors())
app.get('/',(req, res) => {
 res.send('Good');
});

app.get('/api/end-game',(req, res) => {
    res.send(json);
});

app.listen(4444, (err) => {
    if(err){
        return console.log(err);
    }
    console.log("Server OK!");
});