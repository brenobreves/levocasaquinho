import { useState } from 'react'
import styled from 'styled-components'
import Logo from './Logo'

function LeftPannel() {
    const [cityName,setCityName] = useState("")
    
    function handleKeyDown(e){
        if(e.key === 'Enter'){
        }
    }
  return ( 
    <SCLeftPannel>
        <Logo/>
        <SCInputWrapper>
            <SCInputImg src='../../src/assets/search.svg'/>
            <SCSearchInput placeholder='Procure por uma cidade' type='text' value={cityName} onChange={(e) => setCityName(e.target.value)} onKeyDown={handleKeyDown}/>
        </SCInputWrapper>       
    </SCLeftPannel>
  )
}

const SCInputImg = styled.img`
`

const SCInputWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:left;
    width: 445px;
    padding-left:18px;
    padding-bottom:70px;
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