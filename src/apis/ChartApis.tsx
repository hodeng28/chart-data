import axios from 'axios';

// 배포용 mock data
const BASE_URL =
  'https://gist.githubusercontent.com/hodeng28/f1fbf6d6e342e67282d2f35646ed42ad/raw/52dfd27c08146969ed9ff79ef6eaef263dc17a73/gistfile1.txt';

export const fetchChart1Data = async () => {
  const response = await axios.get(`${BASE_URL}`);

  return response.data.chart1;
};

export const fetchChart2Data = async () => {
  const response = await axios.get(`${BASE_URL}`);

  return response.data.chart2;
};

// export const fetchChart1Data = async () => {
//   const response = await axios.get<Chart1Data>("http://localhost:3001/chart1");

//   return response.data;
// };

// export const fetchChart2Data = async () => {
//   const response = await axios.get<Chart2Data>("http://localhost:3001/chart2");

//   return response.data;
// };
