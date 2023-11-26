import { useState } from 'react'
import styled from 'styled-components'

function WeatherInfos({weather, deg, forecast, today}) {
  return ( 
       <>
       {today ? 
        <>
            <SCDoubleInfoWrapper>
                <SCInfoBlock>
                    <SCInfoHL>
                        Mínima
                    </SCInfoHL>
                    <SCInfoData>
                        {deg === "C" ? 
                        Math.floor(weather.main.temp_min - 273.15) 
                        :
                        Math.floor((weather.main.temp_min - 273.15)*1.8+32)
                        }
                        ° {deg}
                    </SCInfoData>
                </SCInfoBlock>

                <SCInfoBlock>
                    <SCInfoHL>
                        Máxima
                    </SCInfoHL>
                    <SCInfoData>
                        {deg === "C" ? 
                        Math.floor(weather.main.temp_max - 273.15) 
                        :
                        Math.floor((weather.main.temp_max - 273.15)*1.8+32)
                        }
                        ° {deg}
                    </SCInfoData>
                </SCInfoBlock>
            </SCDoubleInfoWrapper>

            <SCDoubleInfoWrapper>
                <SCInfoBlock>
                    <SCInfoHL>
                        Umidade
                    </SCInfoHL>
                    <SCInfoData>
                        {weather.main.humidity}%
                    </SCInfoData>
                </SCInfoBlock>

                <SCInfoBlock>
                    <SCInfoHL>
                        Velocidade do Vento
                    </SCInfoHL>
                    <SCInfoData>
                        {weather.wind.speed.toFixed(0)} m/s
                    </SCInfoData>
                </SCInfoBlock>
            </SCDoubleInfoWrapper>
            <SCRecomendation>
                {weather.main.temp < 290.15 || weather.main.temp_min < 290.15 ?
                    "Sim, você deve levar um casaquinho!"
                :
                    "Não, você não deve levar um casaquinho!"
                }
            </SCRecomendation>
        </>
        :
        <>
            
        </>
        }
       </>
  )
}

const SCRecomendation = styled.div`
    color: #AFADAD;
    font-family: Poppins, sans-serif;
    font-size: 24px;
    font-style: italic;
    font-weight: 400;
    line-height: 48px;
    margin-top: 50px;
    margin-left: 50px;
`

const SCInfoData = styled.div`
    width:auto;
    height:auto;
    color: #FFF;
    font-family: Poppins, sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    padding-top: 13px;
`

const SCInfoHL = styled.div`
    width:auto;
    height:auto;
    color: #FFF;
    font-family: Poppins, sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
`

const SCInfoBlock = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    padding:50px 0px 50px 45px;
    border-radius:32px;
    background: linear-gradient(117deg, #4D4494 22.83%, #4F43AE 90.03%); 
    box-shadow: 0px 24px 48px 0px rgba(49, 79, 124, 0.08); 
    width: 500px;
    height: 85px;  
`

const SCDoubleInfoWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:flex-start;
    margin-left: 50px;
    margin-top: 50px;
    gap:100px;
`


export default WeatherInfos