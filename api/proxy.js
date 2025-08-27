import axios from 'axios'

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  try {
    // Get the path from the request
    const { path } = req.query

    // Construct the full URL to the external API
    const apiUrl = `https://api.mercadoe.space/${path}`

    // Make the request to the external API
    const response = await axios.get(apiUrl)

    // Return the response data
    res.status(200).json(response.data)
  } catch (error) {
    console.error('Proxy error:', error)
    res.status(error.response?.status || 500).json({
      error: 'Failed to fetch data from API',
      details: error.message,
    })
  }
}
