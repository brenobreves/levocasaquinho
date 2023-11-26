import { useState } from 'react'
import styled from 'styled-components'
import WellcomeMsg from './WellcomeMsg'

function RightPannel({weather, deg, forecast}) {
    const [today, setToday] = useState(true)
  return ( 
    <SCRightPannel>
        {!weather || !forecast ?
        <WellcomeMsg/>
        :
        <>
            
        </>
        }
    </SCRightPannel>
  )
}



const SCRightPannel = styled.div`
  height:100%;
  width: 65%;
  background-color:#EFEFEF;
`
export default RightPannel