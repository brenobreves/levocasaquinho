import styled from 'styled-components'

function TodayInfo({weather, deg}) {
  return ( 
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
  )
}

const SCRecomendation = styled.div`
    color: #AFADAD;
    font-family: Poppins, sans-serif;
    font-size: 21.6px;
    font-style: italic;
    font-weight: 400;
    line-height: 43.2px;
    margin-top: 45px;
    margin-left: 45px;
`

const SCInfoData = styled.div`
    width:auto;
    height:auto;
    color: #FFF;
    font-family: Poppins, sans-serif;
    font-size: 43.6px;
    font-style: normal;
    font-weight: 700;
    line-height: 32.4px;
    padding-top: 11.7px;
`

const SCInfoHL = styled.div`
    width:auto;
    height:auto;
    color: #FFF;
    font-family: Poppins, sans-serif;
    font-size: 19.8px;
    font-style: normal;
    font-weight: 700;
    line-height: 21.6px;
`

const SCInfoBlock = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    padding:45px 0px 45px 40.5px;
    border-radius:28.8px;
    background: linear-gradient(117deg, #4D4494 22.83%, #4F43AE 90.03%); 
    box-shadow: 0px 21.6px 43.2px 0px rgba(49, 79, 124, 0.08); 
    width: 450px;
    height: 76.5px;  
`

const SCDoubleInfoWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:flex-start;
    margin-left: 45px;
    margin-top: 45px;
    gap:90px;
`


export default TodayInfo