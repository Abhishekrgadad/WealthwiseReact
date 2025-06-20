import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

const TELECRM_AUTH_TOKEN = process.env.VITE_AUTH_TOKEN!;
const TELECRM_ENTERPRISE_ID = process.env.VITE_ENTERPRISE_ID!;
const TELECRM_API_URL = `https://api.telecrm.in/enterprise/${TELECRM_ENTERPRISE_ID}/autoupdatelead`;
console.log("TELECRM_API_URL:", TELECRM_API_URL);
console.log("TELECRM_AUTH_TOKEN:", TELECRM_AUTH_TOKEN);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  
  try {
    const payload = req.body;

    const response = await axios.post(TELECRM_API_URL, payload, {
      headers: {
        Authorization: `Bearer ${TELECRM_AUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    return res.status(200).json({ message: 'Lead submitted successfully', data: response.data });
  } catch (error: any) {
    console.error("Error submitting to TeleCRM:", error?.response?.data || error);
    return res.status(500).json({ message: 'Failed to submit lead', error: error?.response?.data || error });
  }
}
