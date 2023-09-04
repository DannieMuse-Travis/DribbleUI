import  styled  from "styled-components"
import  Pix from "../../assets/Screenshot (34).png"
import { FaBookmark } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const CardScreen = () => {
  return (
    <div>
        <Container>
            <Wrapper>
              <Top>
                <Box>
                Popular
                    <Icon/>
                </Box>
                <Box1>
                    Filters
                    <Icon1/>
                </Box1>
              </Top>
              <ContextCard>
                <Card>
                  < Image src={Pix} />
                  <Label>
                    <Title> Feel cofee brand</Title>
                    <Home>
                    <Icon2 />
                    <Icon3/>
                    </Home>
                  </Label>
                  <TitleCard></TitleCard>
                </Card>
              </ContextCard>
            </Wrapper>
        </Container>
    </div>
  )
}

export default CardScreen


const Home = styled.div`
display:flex;
align-items:center;`

const   Title = styled.div`
margin-left:10px;
  text-transform: capitalize;`

const  Icon3 = styled(AiOutlineHeart)`
margin-right:10px;`

const  Icon2 = styled(FaBookmark )`
margin:10px;

`

const Label = styled.div`
 width: 100%;
  height: 43px;
  padding: 10px 0;
  background: rgba(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(203, 203, 203, 1) 35%,
    rgba(187, 192, 193, 1) 100%
  );
  opacity: 0;
  position: absolute;
  bottom: 0;
  color: white;
  transition: all 350ms;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const  Image = styled.img`
height:200px;
width:300px;
border-radius:10px;
position:relative;



`

const  TitleCard = styled.div``

const Card = styled.div`
height:250px;
margin-left:20px;
width:300px;
display:flex;
border:10px;
background-color:yellow;
margin-top:20px;
border-radius:10px;
position:relative;

&:hover{
    cursor: pointer;
    ${Label} {
      opacity: 1;
    }
    
}
`

const ContextCard = styled.div`
height:500px;
border: 1px solid silver;
display:flex;
margin-top:30px;
justify-content:space-between;
border-radius:20px;
`

const  Icon1 = styled.div``

const Icon = styled.div``

const Box1 = styled.div`
margin-right:10px;
padding:8px 25px;
border:1px solid silver;
border-radius:15px;

`

const  Box = styled.div`
margin-left:10px;
padding:8px 30px;
border:1px solid silver;
border-radius:15px;

`

const Top = styled.div`
height:50px;
border: 1px solid silver;
margin-top:30px;
display:flex;
justify-content:space-between;
align-items:center;
background-color:white;
`

const Wrapper = styled.div`
width:95%;
background-color:red;
justify-content:center;
`

const Container = styled.div`
width:100%;
height:620px;
display:flex;
background-color:green;
justify-content:center;
`