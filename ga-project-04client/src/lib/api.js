import axios from "axios";
import { AUTH } from "./auth";

const ENDPOINTS = {
  allPartners: `${process.env.REACT_APP_BASE_URL}/api/partners/`,
  login: `${process.env.REACT_APP_BASE_URL}/api/auth/login/`,
  register: `${process.env.REACT_APP_BASE_URL}/api/auth/register/`,
};

const getHeaders = () => ({
  headers: { authorization: `Bearer ${AUTH.getToken()}` },
});

const GET = (endpoint) => axios.get(endpoint);
const POST = (endpoint, body, headers) =>
  headers ? axios.post(endpoint, body, headers) : axios.post(endpoint, body);
export const API = { GET, POST, ENDPOINTS, getHeaders };
