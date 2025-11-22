import express, { request } from 'express';
import { startups } from './data/data.js';

const celebrity = {
  type: "action hero",
  name: "JSON Statham"
}

const PORT = 8000;

const app = express();

app.get('/api', (request, response) => {
  let filteredData = startups;

  if (request.query.industry) {
    filteredData = filteredData.filter(filteredData => filteredData.industry.toLowerCase() === request.query.industry.toLowerCase());
  };

  if (request.query.country) {
    filteredData = filteredData.filter(filteredData => filteredData.country.toLowerCase() === request.query.country.toLowerCase());
  };

  if (request.query.continent) {
    filteredData = filteredData.filter(filteredData => filteredData.continent.toLowerCase() === request.query.continent.toLowerCase());
  };

  if (request.query.is_seeking_funding) {
    filteredData = filteredData.filter(filteredData => filteredData.is_seeking_funding === JSON.parse(request.query.is_seeking_funding.toLowerCase()));
  };

  if (request.query.has_mvp) {
    filteredData = filteredData.filter(filteredData => filteredData.has_mvp === JSON.parse(request.query.has_mvp.toLowerCase()));
  };
  
  response.json(filteredData);
});


app.get('/api/:field/:term', (request, response) => {
  let filteredData = startups;

  const { field, term }= request.params

  const allowedFields = ['country', 'continent', 'industry']


  if(!allowedFields.includes(field)){
    response.status(400).json({message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" });
  }

  filteredData = filteredData.filter(startup => startup[field].toLowerCase() === term.toLowerCase());

  response.json(filteredData);
  
});


app.listen(PORT, () => console.log(`server connected on ${PORT}`));