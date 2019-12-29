import jwtDecode from 'jwt-decode'
import UserModel from '../../models/user'
import DecodedTokenModel from '../../models/decoded-token'

const getUser = (): UserModel | null => {
  if (_sessionIsActive()) {
    const decoded = _decodeToken()
    return decoded ? {
      ...decoded.data
    } : null
  }

  window.localStorage.removeItem('token')
  return null
}

const _sessionIsActive = (): boolean => {
  const decoded = _decodeToken()
  if (decoded) {
    const expiredDate = new Date(decoded.exp * 1000)
    const currentDate = new Date()
    return expiredDate.getTime() > currentDate.getTime()
  }

  return false
}

const _decodeToken = (): DecodedTokenModel | null => {
  try {
    let decoded = null
    const token = window.localStorage.getItem('token')

    if (typeof token === 'string') {
      decoded = jwtDecode<DecodedTokenModel>(token)

    }

    return decoded
  } catch (error) {
    return null
  }

}

export default {
  getUser
}
