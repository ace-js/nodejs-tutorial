import axios from 'axios'


const fetchClient = () => {
  const defaultOptions = {
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let instance = axios.create(defaultOptions)

  // Intercepts and set the AUTH token for any request
  instance.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('token')
    config.headers['x-auth-token'] = token || ''
    return config
  })

  return instance
}

export default fetchClient()