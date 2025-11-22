import express, { request, response } from 'express';
import { apiRouter } from './routes/apiRoutes.js';

const PORT = 8000;

const app = express();

app.use('/api', apiRouter);

app.use((request, response) => {
  response.status(404).json({message: "Endpoint not found."});
})

app.listen(PORT, () => console.log(`server connected on ${PORT}`));