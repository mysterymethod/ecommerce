// Backend for out application, not going to render on the frontend. In nextjs we dont have node or express server.
//
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
