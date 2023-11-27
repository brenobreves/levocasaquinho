import { useState } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import axios from 'axios'
import dayjs from 'dayjs'
import Switch from "react-switch";

function LeftPannel({weather, setWeather, deg, setDeg, setForecastC, setForecastF}) {
    const [cityName,setCityName] = useState("")
    const [iconUrl, setIconUrl] = useState("")
    const date = dayjs().format('DD/MM/YYYY')
    const day = dayjs().day()
    const hour = dayjs().hour()
    const minute = dayjs().minute()
    const semana = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"]
    const tempColor = {
        "01n":"#EC6E4C",
        "02n":"grey",
        "03n":"grey",
        "04n":"grey",
        "09n":"lightblue",
        "10n":"blue",
        "11n":"purple",
        "13n":"lightgrey",
        "50n":"lightgrey",
        "01d":"#EC6E4C",
        "02d":"grey",
        "03d":"grey",
        "04d":"grey",
        "09d":"lightblue",
        "10d":"blue",
        "11d":"purple",
        "13d":"lightgrey",
        "50d":"lightgrey",
    };

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
            const getWeather = axios.get(`${import.meta.env.VITE_WEATHER_API_URL}?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${import.meta.env.VITE_API_KEY}&lang=pt`)
            getWeather.catch((erro)=>{
                console.log(erro);
            })
            getWeather.then((response)=>{
                setWeather(response.data)
                const icon = `${response.data.weather[0].icon}`
                setIconUrl(`https://openweathermap.org/img/wn/${icon}@2x.png`)
                console.log(response.data)
            })
            const getForecast = axios.get(`${import.meta.env.VITE_FORECAST_API_URL}?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${import.meta.env.VITE_API_KEY}`)
            getForecast.catch((erro)=>{
                console.log(erro);
            })
            getForecast.then ((response)=>{
                const tempsArrC =  response.data.list.map((x)=>{
                    const date = new Date(x.dt_txt)
                    const dayofweek = date.getDay()
                    const dayOfMonth = date.getDate();
                    const month = date.getMonth() + 1;
                    const formattedDay = (dayOfMonth < 10 ? '0' : '') + dayOfMonth;
                    const formattedMonth = (month < 10 ? '0' : '') + month;
                    const dayMonthString = `${formattedDay}/${formattedMonth}`;
                    const obj = {
                        temp: x.main.temp - 273.15,
                        time: `${dayMonthString} (${semana[dayofweek].slice(0,3)})`,
                    }
                    return obj
                })
                const tempsArrF =  response.data.list.map((x)=>{
                    const date = new Date(x.dt_txt)
                    const dayofweek = date.getDay()
                    const dayOfMonth = date.getDate();
                    const month = date.getMonth() + 1;
                    const formattedDay = (dayOfMonth < 10 ? '0' : '') + dayOfMonth;
                    const formattedMonth = (month < 10 ? '0' : '') + month;
                    const dayMonthString = `${formattedDay}/${formattedMonth}`;
                    const obj = {
                        temp: (x.main.temp - 273.15)*9 / 5 + 32,
                        time: `${dayMonthString} (${semana[dayofweek].slice(0,3)})`,
                    }
                    return obj
                })
                setForecastC(tempsArrC)
                setForecastF(tempsArrF)
            })
        })
    }
  return ( 
    <SCLeftPannel>
        <Logo/>
        <SCInputWrapper>
            <img src='/search.svg' onClick={getCityData}/>
            <SCSearchInput placeholder='Procure por uma cidade' type='text' value={cityName} onChange={(e) => setCityName(e.target.value)} onKeyDown={handleKeyDown}/>
        </SCInputWrapper>   
        {!weather ? "" :
         <>
            <SCWeatherInfo>
                <SCWeatherIcon src={iconUrl}/>
                <SCWeatherTemp customcolor={tempColor[weather.weather[0].icon]}>
                    {deg === "C" ? Math.floor(weather.main.temp - 273.15) : Math.floor((weather.main.temp - 273.15)*1.8+32)}
                </SCWeatherTemp>
                <SCDeg customcolor={tempColor[weather.weather[0].icon]}>°{deg}</SCDeg>
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
    font-size: 21.6px;
    font-style: normal;
    font-weight: 400;
    line-height: 43.2px;
    position:absolute;
    bottom:18px;
`

const SCSwitchWrapper = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    width:33%;
    gap:27px;
`

const SCSwitchSpan = styled.span`
    color: #222;
    font-family: Poppins;
    font-size: 21.6px;
    font-style: normal;
    font-weight: 400;
    line-height: 43.2px;
`

const SCDatenday = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color: #222;
    font-family: Poppins, sans-serif;
    font-size: 21.6px;
    font-style: normal;
    font-weight: 400;
    line-height: 43.2px;
    margin-bottom:30.6px;
` 

const SCDivisor = styled.div`
    width: 355.5px;
    height: 4.5px; 
    background-color: #EDEDED; 
    margin-bottom:41.4px;
`

const SCWeatherDetail = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:43.2px;
    color: #222;
    font-family: Poppins, sans-serif;
    font-size: 28.8px;
    font-style: normal;
    font-weight: 400;
    line-height: 43.2px;
    margin-bottom:30.6px;
`

const SCDeg = styled.div`
    display:flex;
    justify-content:top;
    align-items:flex-start;
    color:${(props) => props.customcolor};
    font-family: Poppins, sans-serif;
    font-size: 108px;
    font-style: normal;
    font-weight: 300;
    line-height: 43.2px;
    padding-bottom:36px;
`

const SCWeatherTemp = styled.p`
    color:${(props) => props.customcolor};
    font-family: Poppins,sans-serif;
    font-size: 130px;
    font-style: normal;
    font-weight: 300;
    line-height: 43.2px;
`

const SCWeatherIcon = styled.img`
    width:135px;
    height:135px;
`

const SCWeatherInfo = styled.div`
    box-sizing:border-box;
    display: flex;
    justify-content:center;
    align-items:center;
    height:135px;
    margin-bottom:27px;
`

const SCInputWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:left;
    width: 401px;
    padding-left:16.2px;
    margin-bottom:63px;
    height: 72px;
    flex-shrink: 0; 
    border-radius: 21.6px;
    background: #EDEDEF; 
    box-shadow: 0px 21.6px 43.2px 0px rgba(49, 79, 124, 0.08); 
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
    font-size: 19.8px;
    font-style: normal;
    font-weight: 500;
    line-height: 21.6px;
    
`
const SCLeftPannel = styled.div`
    display:flex;
    height:100%;
    width: 35%;
    flex-direction:column;
    align-items:center;
`

export default LeftPannel