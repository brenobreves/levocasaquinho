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
    padding:10px 0px 0px 60px;
    color: #222;
    font-family: Poppins, sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 60px; 
`

const SCWellcomeMsg = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:flex-start;
    padding:50px 0px 0px 50px;
    color: #222;
    font-family: Poppins, sans-serif;
    font-size: 150px;
    font-style: normal;
    font-weight: 400;
    line-height: 160px; 
`

const SCRightPannel = styled.div`
  height:100%;
  width: 65%;
  background-color:#EFEFEF;
`


export default WellcomeMsg