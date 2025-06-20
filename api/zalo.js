export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { verification } = req.query;
    return res.status(200).send(verification);
  }

  if (req.method === 'POST') {
    await fetch('https://hook.eu2.make.com/d413rdpxjd7clqb7p2nashqdx4ukci56', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    return res.status(200).send('Forwarded to Make.com');
  }
}
