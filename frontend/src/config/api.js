// API Configuration
export const API_BASE_URL = "https://api.baoiam.com";

// API Endpoints
export const API_ENDPOINTS = {
  // Auth endpoints
  LOGIN: `${API_BASE_URL}/api/login/`,
  SIGNUP: `${API_BASE_URL}/api/signup/`,
  VERIFY_LOGIN: `${API_BASE_URL}/api/verify_login/`,
  VERIFY_SIGNUP: `${API_BASE_URL}/api/verify_signup/`,
  GOOGLE_LOGIN: `${API_BASE_URL}/api/google-login/`,
  
  // Contact endpoints
  CONTACT_SUBMIT: `${API_BASE_URL}/api/contact/submit/`,
  
  // GCEP endpoints
  GCEP_CONTACT_SUBMIT: `${API_BASE_URL}/gcep/contact/submit/`,
}; 