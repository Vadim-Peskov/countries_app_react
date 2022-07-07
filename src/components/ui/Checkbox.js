import styled from 'styled-components';
import { c } from '../common/styledVariables';

const StyledCheckbox = styled.div`
  
  label {
    position: relative;
    display: flex;
    width: 42px;
    height: 24px;
    border: 1px solid ${c.clr_additional};
    border-radius: 50px;
    cursor: pointer;

    input {
      display: none;
    }

    span {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 18px;
      height: 18px;
      background-color: ${c.clr_additional};
      border-radius: 50px;
      transition: transform 0.25s ease, background-color 0.2s ease;
      transform: ${props => props.theme === 'dark' && 'translateX(100%)'};
    }

    &:hover span {
      background-color: ${c.clr_accent};
    }
  }
`

export const Checkbox = ({theme, ...props}) => {
 
  return (
    <StyledCheckbox theme={theme} {...props}>
      <label id="themeCheckbox">
        <input id="themeCheckbox" type="checkbox" />
        <span></span>
      </label>
    </StyledCheckbox>
  )
}

export default Checkbox;