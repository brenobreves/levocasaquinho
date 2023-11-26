import { useState } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import axios from 'axios'
import dayjs from 'dayjs'
import Switch from "react-switch";

function LeftPannel({weather, setWeather, deg, setDeg, setForecast}) {
    const [cityName,setCityName] = useState("")
    const [cityData, setCityData] = useState({})
    const [iconUrl, setIconUrl] = useState("")
    const date = dayjs().format('DD/MM/YYYY')
    const day = dayjs().day()
    const hour = dayjs().hour()
    const minute = dayjs().minute()
    const semana = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"]


    function handleSwitchF(){
        if(deg === "C"){
            setDeg("F")
            return
        }
        setDeg("C")
    }
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
            const getWeather = axios.get(`${import.meta.env.VITE_WEATHER_API_URL}?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${import.meta.env.VITE_API_KEY}&lang=pt`)
            getWeather.catch((erro)=>{
                console.log(erro);
            })
            getWeather.then((response)=>{
                setWeather(response.data)
                setIconUrl(`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
                console.log(response.data)
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
        {!weather ? "" :
         <>
            <SCWeatherInfo>
                <SCWeatherIcon src={iconUrl}/>
                <SCWeatherTemp>
                    {deg === "C" ? Math.floor(weather.main.temp - 273.15) : Math.floor((weather.main.temp - 273.15)*1.8+32)}
                </SCWeatherTemp>
                <SCDeg>°{deg}</SCDeg>
            </SCWeatherInfo>
            <SCWeatherDetail>
                {weather.weather[0].description[0].toUpperCase()+weather.weather[0].description.slice(1)}
            </SCWeatherDetail>
            <SCDivisor/>
            <SCDatenday>
                <p>{date}</p>
                <p>{semana[day]}, {hour}:{minute}</p>
            </SCDatenday>
            <SCSwitchWrapper>
                <Switch onChange={handleSwitchF} checked={deg === "F"}/>
                <SCSwitchSpan>°F</SCSwitchSpan>
            </SCSwitchWrapper>
         </>
         }   
         <SCDisclaimer>Todos os direitos reservados. 2023</SCDisclaimer>    
    </SCLeftPannel>
  )
}

const SCDisclaimer = styled.p`
    color: #222;
    font-family: Poppins,sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
    position:absolute;
    bottom:20px;
`

const SCSwitchWrapper = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    width:33%;
    gap:30px;
`

const SCSwitchSpan = styled.span`
    color: #222;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
`

const SCDatenday = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color: #222;
    font-family: Poppins, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
    margin-bottom:34px;
` 

const SCDivisor = styled.div`
    width: 395px;
    height: 5px; 
    background-color: #EDEDED; 
    margin-bottom:46px;
`

const SCWeatherDetail = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:48px;
    color: #222;
    font-family: Poppins, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
    margin-bottom:34px;
`

const SCDeg = styled.div`
    display:flex;
    justify-content:top;
    align-items:flex-start;
    color: #EC6E4C;
    font-family: Poppins, sans-serif;
    font-size: 120px;
    font-style: normal;
    font-weight: 300;
    line-height: 48px;
    padding-bottom:40px;
`

const SCWeatherTemp = styled.p`
    color: #EC6E4C;
    font-family: Poppins,sans-serif;
    font-size: 144px;
    font-style: normal;
    font-weight: 300;
    line-height: 48px;
`

const SCWeatherIcon = styled.img`
    width:150px;
    height:150px;
`

const SCWeatherInfo = styled.div`
    box-sizing:border-box;
    display: flex;
    justify-content:center;
    align-items:center;
    height:150px;
    margin-bottom:30px;
`

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