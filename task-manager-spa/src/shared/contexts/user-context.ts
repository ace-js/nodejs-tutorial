import React from 'react'
import UserModel from '../models/user'

const { Provider, Consumer } = React.createContext<UserModel | null>(null)

export const UserContextProvider = Provider

export const UserContextConsurmer = Consumer