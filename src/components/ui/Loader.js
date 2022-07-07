import styled from "styled-components";
import {c} from '../common/styledVariables';
import {BiLoaderAlt as LoaderIco} from 'react-icons/bi';

const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    width: 22px;
    height: 22px;
    animation: rotate 1s linear infinite;

    ${c.animation_rotate};
  }

  p {
    margin: 0 0 0 8px;
  }
`


export const Loader = () => {
  return (
    <StyledLoader>
      <LoaderIco />
      <p>Loading...</p>
    </StyledLoader>
  )
}

export default Loader;