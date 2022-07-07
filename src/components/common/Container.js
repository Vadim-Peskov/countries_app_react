import styled from 'styled-components';

  const AppContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  `

export const Container = ({children}) => {
  return <AppContainer>{children}</AppContainer>
}
export default Container;