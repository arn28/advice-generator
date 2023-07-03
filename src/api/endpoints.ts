import axios from 'axios'

const ENDPOINTS = {
  ADVICE: 'https://api.adviceslip.com/advice',
}
export const getAdvice = async () => {
  const response = await axios.get(ENDPOINTS.ADVICE)
  return response
}
