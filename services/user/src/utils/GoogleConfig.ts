import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const GOOGLE_CLIENT_ID = process.env.Google_Client_id;
const GOOGLE_CLIENT_SECRET = process.env.Google_client_secret;

// Must match exactly what's in Google Cloud Console
const REDIRECT_URI = "http://localhost:5000/api/auth/google/callback";

export const oauth2client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  REDIRECT_URI
);
