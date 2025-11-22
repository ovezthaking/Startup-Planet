import { startups } from "../data/data.js";

export const getAllData = (request, response) => {
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
}