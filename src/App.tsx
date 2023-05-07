import React from 'react'
import { MainPage } from './pages/MainPage'
import { GlobalStyle } from './themes/globalStyle'

type Props = {}

const App = (props: Props) => {
  return (
    <div>
        <GlobalStyle />
        <MainPage />
    </div>
  )
}

export default App