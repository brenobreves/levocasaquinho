import { useState } from 'react'
import styled from 'styled-components'
import WellcomeMsg from './WellcomeMsg'
import WeatherInfos from './WeatherInfos'

function RightPannel({weather, deg, forecastC, forecastF}) {
    const [today, setToday] = useState(true)
  return ( 
    <SCRightPannel>
        {!weather || !forecastC || !forecastF ?
        <WellcomeMsg/>
        :
        <>
            <SCNavBar>
                <SCNavP selected={today} onClick={() => setToday(true)}>Hoje</SCNavP>
                <SCNavP selected={!today} onClick={()=> setToday(false)}>Próximos Dias</SCNavP>
            </SCNavBar>
            <SCCityName>{weather.name}</SCCityName>
            <SCLatLonWrapper>
                <SCLatLon>{`Lat: ${weather.coord.lat.toFixed(2)}`}</SCLatLon>
                <SCLatLon>{`Lon: ${weather.coord.lon.toFixed(2)}`}</SCLatLon>
            </SCLatLonWrapper>
            <WeatherInfos weather={weather} deg={deg} forecastC={forecastC} forecastF={forecastF} today={today}/>           
        </>
        }
        <SCDisclaimer>
            <p>Dados fornecidos pela   </p>
            <SCPageLink href='https://openweathermap.org/'>Open Weather API</SCPageLink>
        </SCDisclaimer>
    </SCRightPannel>
  )
}

const SCPageLink = styled.a`
    color: #96A7F2;
    font-family: Poppins;
    font-size: 21.6px;
    font-style: normal;
    font-weight: 400;
    line-height: 43.2px; 
    text-decoration: none;
` 

const SCDisclaimer = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    position:absolute;
    bottom:18px;
    color: #222;
    font-family: Poppins, sans-serif;
    font-size: 21.6px;
    font-style: normal;
    font-weight: 400;
    line-height: 43.2px;
    padding-left: 45px;
    gap: 4.5px;
`

const SCLatLonWrapper = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    padding:0px 0px 0px 54px;
    gap:18px;
`

const SCLatLon = styled.span`
    color: #222;
    font-family: Poppins, sans-serif;
    font-size: 21.6px;
    font-style: normal;
    font-weight: 400;
    line-height: 43.2px;
`

const SCCityName = styled.div`
    box-sizing:border-box;
    display: flex;
    justify-content: flex-start;
    align-items:flex-start;
    padding:0px 0px 9px 45px;
    color: #222;
    font-family: Poppins, sans-serif;
    font-size: 6vw;
    font-style: normal;
    font-weight: 400;
    line-height: 135px;
`

const SCNavP = styled.p`
    color:${(props) => props.selected ? "#222" : "#C8C8C8"};
`

const SCNavBar = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    color: #222;
    font-family: Poppins, sans-serif;
    font-size: 43.6px;
    font-style: normal;
    font-weight: 400;
    line-height: 43.2px; 
    padding:54px 0px 0px 45px;
    gap:64.8px;
    margin-bottom:45px;
`

const SCRightPannel = styled.div`
    display:flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content:flex-start;
    height:100%;
    width: 65%;
    background-color:#EFEFEF;
`
export default RightPannel