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
        res.status(200).json(data);
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
      }
    } else {
      res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
  }
  //unig igel uaxy sfla