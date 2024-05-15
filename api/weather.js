import axios from "axios";
import { apiKey } from "../constants";
import { isDevice } from "expo-device";
let http = isDevice ? "https" : "http";

const forecastEndpoint = (params) =>
  `${http}://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.city}&days=${params.days}&aqi=no`;
const locationsEndpoint = (params) =>
  `${http}://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.city}`;

const apiCall = async (endpoint) => {
  const options = { method: "GET", url: endpoint };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("Error: " + error);
    return null;
  }
};

export const weatherImage = (image) => {
  let path = image?.split("/");
  if (path?.length > 1) {
    console.log(path[path?.length - 1], isDevice);
    let url = http + "://cdn.weatherapi.com/weather/128x128/day/";
    return url + path[path?.length - 1];
  }
  return "";
};

export const fetchWeatherForecast = (params) => {
  console.log(params);
  return apiCall(forecastEndpoint(params));
};
export const fetchLocations = (params) => {
  return apiCall(locationsEndpoint(params));
};
