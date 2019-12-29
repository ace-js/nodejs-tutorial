import React from 'react'
import Login from './modules/auth/pages/Login'
import Layout from './modules/layout/Index'
import { UserContextProvider } from './shared/contexts/user-context'
import auth from './shared/utils/auth'

const App: React.FC = () => {
  const user = auth.getUser()
  return (
    <div>
      <UserContextProvider value={user}>
        <Layout>
          <Login />
        </Layout>
      </UserContextProvider>
    </div>
  )
}

export default App
