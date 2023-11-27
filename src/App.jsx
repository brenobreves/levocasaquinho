import styled from 'styled-components'
import LeftPannel from './components/LeftPannel'
import RightPannel from './components/RightPannel'
import { useState } from 'react'
function App() {
  const [weather, setWeather] = useState()
  const [deg, setDeg] = useState("C")
  const [forecastC, setForecastC] = useState([])
  const [forecastF, setForecastF] = useState([])
  return ( 
    <PageContainer>
      <LeftPannel weather={weather} setWeather={setWeather} deg={deg} setDeg={setDeg} setForecastC={setForecastC} setForecastF={setForecastF}/>
      <RightPannel weather={weather} deg={deg} forecastC={forecastC} forecastF={forecastF}/>
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
