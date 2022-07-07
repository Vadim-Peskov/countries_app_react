import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from "../common/Container";
import Header from "../common/Header";
import Button from "../ui/Button";

const ErrorText = styled.p`
  margin: 0;
  padding: 40px 0 50px 0;

  & + a {
    text-decoration: none;
  }
`

export const Error404 = () => {
  return (
    <>
      <Container>
        <Header/>
        <ErrorText>Page not found</ErrorText>
        <Link to='/'>
          <Button text='Home' />
        </Link>
        
      </Container>
    </>  
  )
}

export default Error404;