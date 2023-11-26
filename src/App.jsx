import styled from 'styled-components'
import LeftPannel from './components/LeftPannel'
import RightPannel from './components/RightPannel'
function App() {

  return ( 
    <PageContainer>
      <LeftPannel/>
      <RightPannel/>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  display:flex;
  width: 100vw;
  height: 100vh;
  background-color:#FFF;
`




export default App
