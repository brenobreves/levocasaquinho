import { useState } from 'react'
import styled from 'styled-components'

function WellcomeMsg() {
  return ( 
        <>
            <SCWellcomeMsg>
                Bem vindo!
            </SCWellcomeMsg>
            <SCWellcomeDesc>
                Para onde vamos?
            </SCWellcomeDesc>
        </>
  )
}

const SCWellcomeDesc = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:flex-start;
    padding:9px 0px 0px 54px;
    color: #222;
    font-family: Poppins, sans-serif;
    font-size: 27px;
    font-style: normal;
    font-weight: 400;
    line-height: 54px; 
`

const SCWellcomeMsg = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:flex-start;
    padding:45px 0px 0px 45px;
    color: #222;
    font-family: Poppins, sans-serif;
    font-size: 135px;
    font-style: normal;
    font-weight: 400;
    line-height: 144px; 
`

const SCRightPannel = styled.div`
  height:100%;
  width: 65%;
  background-color:#EFEFEF;
`


export default WellcomeMsg