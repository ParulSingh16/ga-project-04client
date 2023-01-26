import axios from "axios";
import { AUTH } from "./auth";

const ENDPOINTS = {
  login: `${process.env.REACT_APP_BASE_URL}/api/auth/login/`,
  register: `${process.env.REACT_APP_BASE_URL}/api/auth/register/`,
  allProviders: `${process.env.REACT_APP_BASE_URL}/api/partners/`,
  allPolicies: `${process.env.REACT_APP_BASE_URL}/api/policies/`,
  purchasedPolicies: `${process.env.REACT_APP_BASE_URL}/api/purchased-policies/`,
  getProviderForPolicyByName: (policyName) =>
    `${process.env.REACT_APP_BASE_URL}/api/policies/${policyName}`,
};

const getHeaders = () => ({
  headers: { authorization: `Bearer ${AUTH.getToken()}` },
});

const GET = (endpoint) => axios.get(endpoint);
const POST = (endpoint, body, headers) =>
  headers ? axios.post(endpoint, body, headers) : axios.post(endpoint, body);
export const API = { GET, POST, ENDPOINTS, getHeaders };
