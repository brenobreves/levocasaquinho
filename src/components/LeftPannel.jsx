import { useState } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import axios from 'axios'

function LeftPannel({weather, setWeather, deg, setDeg, forecast, setForecast}) {
    const [cityName,setCityName] = useState("")
    const [cityData, setCityData] = useState({})
    async function handleKeyDown(e){
        if(e.key === 'Enter'){
            await getCityData()
        }
    }

    async function getCityData(){
        const promise = axios.get(`${import.meta.env.VITE_GEO_API_URL}?q=${cityName}&limit=1&appid=${import.meta.env.VITE_API_KEY}`)
        promise.catch((erro)=>{
            console.log(erro);
        })
        promise.then((response)=>{
            setCityData(response.data[0])
            const getWeather = axios.get(`${import.meta.env.VITE_WEATHER_API_URL}?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${import.meta.env.VITE_API_KEY}`)
            getWeather.catch((erro)=>{
                console.log(erro);
            })
            getWeather.then((response)=>{
                setWeather(response.data)
            })
            const getForecast = axios.get(`${import.meta.env.VITE_FORECAST_API_URL}?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${import.meta.env.VITE_API_KEY}`)
            getForecast.catch((erro)=>{
                console.log(erro);
            })
            getForecast.then ((response)=>{
                setForecast(response.data)
            })
        })
    }
  return ( 
    <SCLeftPannel>
        <Logo/>
        <SCInputWrapper>
            <img src='../../src/assets/search.svg' onClick={getCityData}/>
            <SCSearchInput placeholder='Procure por uma cidade' type='text' value={cityName} onChange={(e) => setCityName(e.target.value)} onKeyDown={handleKeyDown}/>
        </SCInputWrapper>       
    </SCLeftPannel>
  )
}

const SCInputWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:left;
    width: 445px;
    padding-left:18px;
    margin-bottom:70px;
    height: 80px;
    flex-shrink: 0; 
    border-radius: 24px;
    background: #EDEDEF; 
    box-shadow: 0px 24px 48px 0px rgba(49, 79, 124, 0.08); 
    outline:none;
    border: 0px solid;
`
const SCSearchInput = styled.input`
    display:flex;
    align-items:center;
    justify-content:center;
    background: #EDEDEF;
    outline:none;
    border: 0px solid;
    font-family: Montserrat, sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    
`
const SCLeftPannel = styled.div`
    display:flex;
    height:100%;
    width: 35%;
    flex-direction:column;
    align-items:center;
`

export default LeftPannel