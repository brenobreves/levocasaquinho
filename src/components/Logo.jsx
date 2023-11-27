import styled from 'styled-components'
function Logo() {
  return ( 
        <SCLogo>
            <SCLogoImg src="/hoodie.svg"/>
            <SCLogoP>Levo um casaquinho?</SCLogoP> 
        </SCLogo>
  )
}
const SCLogo = styled.div`
    display:flex;
    color: #222;
    font-family: Poppins,sans-serif;
    font-size: 55.8px;
    font-style: normal;
    font-weight: 600;
    line-height: 43.2px;
    padding-top:41.4px;
    padding-left:50.4px;
    padding-bottom:57.6px;
    width:495px;
    justify-content:center;
    align-items:center;
    gap:12.6px;
`
const SCLogoP = styled.p`
    color: #222;
    font-family: Poppins,sans-serif;
    font-size: 55.8px;
    font-style: normal;
    font-weight: 600;
    line-height: 43.2px;
`
const SCLogoImg = styled.img`
    width:108px;
    height:108px;
`

export default Logo