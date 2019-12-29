import React from 'react'
import Navbar from './containers/Navbar'
import MainWrapper from './components/MainWrapper'

interface Props {
  children: React.ReactNode
}

const Index: React.FC<Props> = ({ children }) => (
  <div>
    <Navbar />
    <MainWrapper>
      {children}
    </MainWrapper>
  </div>
)

export default Index
