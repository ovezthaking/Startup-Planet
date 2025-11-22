import { startups } from "../data/data.js";

export const getDataByPathParams = (request, response) => {
  let filteredData = startups;

  const { field, term }= request.params

  const allowedFields = ['country', 'continent', 'industry']


  if(!allowedFields.includes(field)){
    return response.status(400).json({message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" });
  }

  filteredData = filteredData.filter(startup => startup[field].toLowerCase() === term.toLowerCase());

  response.json(filteredData);
  
}