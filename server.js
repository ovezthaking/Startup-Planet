import express from 'express';
import { startups } from './data/data';

const celebrity = {
  type: "action hero",
  name: "JSON Statham"
}

const PORT = 8000;

const app = express();

app.get('/api', (request, response) => {
    response.json(startups);
});

app.listen(PORT, () => console.log(`server connected on ${PORT}`));