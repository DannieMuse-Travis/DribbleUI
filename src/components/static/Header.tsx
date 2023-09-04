import styled from 'styled-components'
import Button from './Button'

const Header = () => {
  return (
    <div>
         <Container>
        <Wrapper>
          <Navs>
            <Logo>MyLogo</Logo>
            <Nav>Find Talents</Nav>
            <Nav>For Designer</Nav>
            <Nav>Inspiration</Nav>
            <Nav>Learn  Design</Nav>
            <Nav>Go pro</Nav>
          </Navs>
        
          <Buttons>
            <ButtText>Log in</ButtText>
        <Dot/>
        <Button/>
          </Buttons>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Header

const  Logo = styled.div`
font-weight:600;
font-size:20px;
font-style:italic;
margin-right:60px;
`

const Nav = styled.div`

margin:0px 5px;
  font-weight:600;
 transition:all 350ms;
 

  &:hover{
    cursor: pointer;
    transform:scale(1.2);
    color:red;
  }
`

const Navs = styled.div`
display:flex;`

const ButtText = styled.div``

const Dot = styled.div`
width:5px;
height:6px;
background-color:black;
margin:0px 10px;
margin-top:5px;
`

const Buttons = styled.div`
display:flex;
align-items:center;
height:100%;
`

const  Wrapper = styled.div`
height:100%;
width:96%;
background-color:white;
display:flex;
justify-content:space-between;
align-items:center;
`

const  Container= styled.div`
width:100%;
height:70px;
background-color:white;
display: flex;
justify-content: center;
`