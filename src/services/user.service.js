import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";
const url = "http://localhost:8080/api"

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getAll = () => {
  return axios.get(url + "/users", { headers: authHeader() });
};

const get = id => {
  return axios.get(url + `/users/${id}`, { headers: authHeader() });
};

const remove = id => {
  return axios.delete(url + `/users/${id}`, { headers: authHeader() });
};

const findByName= username => {
  return axios.get(url + `/users?username=${username}`, { headers: authHeader() });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getPublicContent,  
  getAll,
  get,
  remove,
  findByName
};