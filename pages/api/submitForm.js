import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, APIKey');
    const accessKey = '192be1a3-2dcc-4854-a9e3-f20bc26ec0b0';

    if (req.method === 'POST') {
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'APIKey': accessKey,
                },
                body: JSON.stringify(req.body),
            });

            const data = await response.json();

            // Send auto-reply email
            await sendAutoReply(req.body.email);

            res.status(200).json(data);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}

async function sendAutoReply(email) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
        secure: true,
        requireTLS: true,
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for your submission!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; text-align: center;">Thank You for Your Submission to Yung Havy!</h1>
          <p style="color: #666; font-size: 16px; text-align: center;">I will get back to you soon</p>
          <p style="color: #666; font-size: 15px; text-align: center; margin-top: 20px;">Best Regards,</p>
          <p style="color: #666; font-size: 14px; text-align: center; font-family: 'Brushstrike', cursive;">Yung Havy</p>

        </div>
      `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Auto-reply email sent successfully.');
    } catch (error) {
        console.error('Error sending auto-reply email:', error);
    }
}
