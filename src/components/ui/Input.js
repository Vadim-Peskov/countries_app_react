import styled from 'styled-components';
import { c } from '../common/styledVariables';

const StyledInput = styled.div`
  position: relative;

  input {
    width: 230px;
    padding: 10px 32px 10px 12px;
    font-size: 15px;
    color: inherit;
    border: 1px solid ${c.clr_additional};
    border-radius: 3px;
    background-color: transparent;
    transition: border 0.2s ease;
    
    &::placeholder {
      color: ${c.clr_additional};
    }

    &:focus {
      outline: none;
    }
  }

  svg {
    position: absolute;
    top: 12px;
    right: 10px;
    color: ${c.clr_additional};
    pointer-events: none;
    transition: color 0.15s ease;
  }

  &>input:focus~svg{
    color: ${c.clr_accent};
    transition: color 0.15s ease;
  }
`

export const Input = ({type='text', placeholder, ico, ...props}) => {
  return (
    <StyledInput>
      <input type={type} placeholder={placeholder} {...props}/>
      {ico}
    </StyledInput>
  )
}

export default Input;