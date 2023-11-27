import { useState } from 'react'
import styled from 'styled-components'
import TodayInfo from './TodayInfo'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function WeatherInfos({weather, deg, forecastC, forecastF, today}) {
    
    const TooltipContent = (props) => {
        if(!props.active || !props.payload){
            return
        }
        const data = props.payload[0].payload
        return(
            <SCChartTolltip>
                <p>{data.time}</p>
                <SCTolltipTempSpan>{data.temp.toFixed(1)} °C</SCTolltipTempSpan>
            </SCChartTolltip>
        )
    }
  
    return ( 
       <>
       {today ? 
        <TodayInfo weather={weather} deg={deg}/>
        :
        <SCChartWrapper>
            <LineChart data={deg === "C" ? forecastC : forecastF} width={1000} height={400} >
                <XAxis dataKey={"time"}/>
                <YAxis dataKey={"temp"} domain={deg === "C" ? [0,40] : [0,100]} tickFormatter={(value) => `${value}${deg === "C" ? "°C" : "°F"}`} type='number'/>
                <CartesianGrid stroke='#e7e7e7' strokeDasharray="1000 1000"/>
                <Line dataKey={"temp"} stroke='purple' strokeWidth={3}/>
                <Tooltip content={TooltipContent}/>
            </LineChart>
        </SCChartWrapper>
        }
       </>
  )
}

const SCTolltipTempSpan = styled.span`
    color:#2415a7b8;
`

const SCChartWrapper = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    background-color:white;
    margin-left: 50px;
    margin-top:75px;
    height:450px;
    width:1050px;
    padding-right:50px;
`

const SCChartTolltip = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:flex-start;
    background-color: #EFEFEF;
    border-radius:10px;
    padding:5px;
    height:100px;
    padding:0px 10px 0px 10px;
    font-family: Poppins, sans-serif;
`

export default WeatherInfos