import styled  from 'styled-components'
import videos from "../../assets/videosdrib.mp4"
import { FaSearch } from "react-icons/fa";
const Hero = () => {
  return (
    <div>
              <Container>
               
        <Video src={videos} muted loop autoPlay playsInline />
        <Cover />
        <ContentHolder>
        <Div>Ade</Div>
           <Top>
            <Box1>Discover</Box1>
            <Box1>Animation</Box1>
            <Box1>illustration</Box1>
            <Box1>Mobile</Box1>
            <Box1>Print</Box1>
            <Box1>Product Design</Box1>
            <Box1>TypoGraphy</Box1>
            <Box1>Web Design</Box1>
           </Top>
          <BoldText>Explore the world’s leading design portfolios</BoldText>
          <SmallText>
            Millions of designers and agencies around the world showcase their
            portfolio work on Dribbble - the home to the world’s best design and
            creative professionals.
          </SmallText>
          <InputIconHolder>
            <Icon />
            <Input placeholder="Search..." />
          </InputIconHolder>
          <Category>
            <Text>Trending Searches:</Text>
            <Box>landing</Box>
            <Box>design</Box>
            <Box>ios</Box>
            <Box>appdesign</Box>
            <Box>ios</Box>
            <Box>appdesign</Box>
          </Category>
        </ContentHolder>
      </Container>
    </div>
  )
}

export default Hero

const  Div = styled.div`
    border:1px solid black;
    padding:20px 10px;
    border-radius:50px;
    background-color:purple;
    position:absolute;
    margin-left:1200px;
    margin-top:450px;
    position:fixed;
`

const Box1 = styled.div`
padding: 15px 25px;
  border: 1px solid silver;
  border-radius: 25px;
  cursor: pointer;
  font-weight:700;

  margin:0 5px;;
  transition: all 350ms;

  &:hover {
    border: 1px solid white;
    background-color:white;
    color:black;
  }
`

const Top = styled.div`
display:flex;


`

const Box = styled.div`
  padding: 10px 25px;
  border: 1px solid silver;
  border-radius: 25px;
  margin: 0 5px;
  cursor: pointer;
  transition: all 350ms;

  &:hover {
    border: 1px solid white;
  }
`;

const Text = styled.div``;

const Category = styled.div`
  width: 60%;
  margin: 20px 0;
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

const Icon = styled(FaSearch)`
  color: #908b8b;
  font-size: 20px;
  margin-right: 10px;
`;

const Input = styled.input`
  flex: 1;
  height: 100%;
  border: 0;
  outline: 0;
  font-size: 17px;
  color: grey;

  &::placeholder {
    font-size: 17px;
  }
`;

const InputIconHolder = styled.div`
  background-color: #fff;
  width: 40%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 40px;
`;

const BoldText = styled.div`
  font-weight: 900;
  font-size: 40px;
  width: 40%;
  margin-top:40px;
`;

const SmallText = styled.div`
  font-weight: 600;
  font-size: 18px;
  width: 45%;
  margin: 30px 0;
`;

const ContentHolder = styled.div`
  position: absolute;
  color: white;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const Cover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Container = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
`;
