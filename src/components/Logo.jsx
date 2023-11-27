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
    font-size: 62px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
    padding-top:46px;
    padding-left:56px;
    padding-bottom:64px;
    width:550px;
    justify-content:center;
    align-items:center;
    gap:14px;
`
const SCLogoP = styled.p`
    color: #222;
    font-family: Poppins,sans-serif;
    font-size: 62px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
`
const SCLogoImg = styled.img`
    width:120px;
    height:120px;
`

export default Logo