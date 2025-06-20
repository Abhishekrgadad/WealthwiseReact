import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const TELECRM_AUTH_TOKEN = process.env.AUTH_TOKEN;
  const TELECRM_ENTERPRISE_ID = process.env.ENTERPRISE_ID;

  if (!TELECRM_AUTH_TOKEN || !TELECRM_ENTERPRISE_ID) {
    return res.status(500).json({ error: 'Missing env variables' });
  }

  const TELECRM_API_URL = `https://api.telecrm.in/enterprise/${TELECRM_ENTERPRISE_ID}/autoupdatelead`;

  try {
    const payload = req.body;

    const response = await axios.post(TELECRM_API_URL, payload, {
      headers: {
        Authorization: TELECRM_AUTH_TOKEN,
        'Content-Type': 'application/json',
      },
    });

    return res.status(200).json({ message: 'Success', data: response.data });
  } catch (error: any) {
    console.error('TeleCRM API Error:', error.response?.data || error.message);
    return res.status(500).json({
      message: 'Submission failed',
      error: error.response?.data || error.message,
    });
  }
}
