import styled from 'styled-components'
import LeftPannel from './components/LeftPannel'
import RightPannel from './components/RightPannel'
import { useState } from 'react'
function App() {
  const [weather, setWeather] = useState()
  const [deg, setDeg] = useState("C")
  const [forecast, setForecast] = useState()
  return ( 
    <PageContainer>
      <LeftPannel weather={weather} setWeather={setWeather} deg={deg} setDeg={setDeg} forecast={forecast} setForecast={setForecast}/>
      <RightPannel/>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  display:flex;
  width: 100vw;
  height: 100vh;
  background-color:#FFF;
`




export default App
