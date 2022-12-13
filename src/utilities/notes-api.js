import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function create(noteData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', noteData);
}

export async function index() {
  return await sendRequest(BASE_URL);
}
