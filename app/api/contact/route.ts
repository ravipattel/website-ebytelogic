export const runtime = 'edge';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  telephone: string;
  message: string;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const body: ContactRequest = await req.json();

    const { name, email, subject, telephone, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'Website Contact <onboarding@resend.dev>',
      to: 'ravi@ebytelogic.com', 
      subject: `New contact form message: ${subject || 'No subject'}`,
      html: `
        <h2>📩 New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${telephone || 'N/A'}</p>
        <p><b>Subject:</b> ${subject || 'N/A'}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
        <hr />
        <small>Sent from your website contact form.</small>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    console.error('Email send error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
