
import styled from 'styled-components'

const Button = () => {
  return (
    <div>
      <Container>
        <Text>Sign in</Text>
      </Container>
      </div>
  )
}

export default Button

const Text = styled.div`
margin:5px;
font-weight:600;`

const  Container = styled.div`
padding:10px 18px;
background-color:black;
color:white;
border-radius:30px;
transition:all 350ms;

&:hover{
  cursor: pointer;
  background-color:silver;
  transform:scale(0.3)
}

`