import googl from "googleapis";
import type { Auth } from "googleapis";
import { googleDocsToMarkdown } from "./docs-markdown.tsx";
import marked from "marked";

const { google } = googl;
marked.setOptions({
  xhtml: true,
});

// If modifying these scopes, delete token.json.
const SCOPES = ["https://www.googleapis.com/auth/documents.readonly"];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = "token.json";

const extractJson = (r: Response) =>
  r.ok ? r.json() : Promise.reject(r.statusText);

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 */
async function authorize(credentials: Record<string, unknown>) {
  const { client_secret, client_id, redirect_uris } =
    credentials.installed as any;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  // Check if we have previously stored a token.
  try {
    const token = await fetch(TOKEN_PATH).then(extractJson);
    oAuth2Client.setCredentials(token);
    return oAuth2Client;
  } catch {
    return getNewToken(oAuth2Client);
  }
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 */
async function getNewToken(oAuth2Client: Auth.OAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  console.log("Authorize this app by visiting this url:", authUrl);
  return Promise.reject(new Error("not implemented"));
}

interface GDocsProps {
  documentId: string;
  tagName: string;
}
export async function GDocs({ documentId, tagName }: GDocsProps) {
  // Load client secrets from a local file.
  const content = await fetch("credentials.json").then(extractJson);
  // Authorize a client with credentials, then call the Google Docs API.
  const auth = await authorize(content);

  const docs = google.docs({ version: "v1", auth });
  const res = await docs.documents.get({
    documentId,
  });
  const wrapper = document.createElement(tagName);
  wrapper.innerHTML = marked(googleDocsToMarkdown(res.data));
  return wrapper as any as JSX.Element;
}

export default GDocs as (props?: GDocsProps) => JSX.Element;
