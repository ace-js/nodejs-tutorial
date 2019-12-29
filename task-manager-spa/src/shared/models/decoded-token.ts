import UserModel from './user'

export default interface DecodedTokenModel {
    iat: number
    exp: number
    data: UserModel
}