import { useState } from 'react'
import styled from 'styled-components'

function RightPannel({weather, deg, forecast}) {

  return ( 
    <SCRightPannel>
        {!weather || !forecast ?
        <>
            <SCWellcomeMsg>
                Bem vindo!
            </SCWellcomeMsg>
            <SCWellcomeDesc>
                Para onde vamos?
            </SCWellcomeDesc>
        </>
        :"Com dados"}
    </SCRightPannel>
  )
}

const SCWellcomeDesc = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:flex-start;
    padding:10px 0px 0px 110px;
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
    padding:50px 0px 0px 100px;
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


export default RightPannel