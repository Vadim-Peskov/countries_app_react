import styled, { css } from 'styled-components';
import { c } from "../common/styledVariables";

const AppButton = styled.button`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 140px;
  padding: 16px 20px;
  font-family: inherit;
  font-size: 14px;
  color: #ffffff;
  background-color: ${c.clr_accent};
  outline: none;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;

  ${props => props.active && css`
    background-color: ${c.clr_accent_hover};
  `}

  &:hover {
    background-color: ${c.clr_accent_hover};
  }
`

export const Button = ({text = 'Button', active, ...props}) => {
  return (
    <AppButton active={active} {...props}>
      <span className='text'>{text}</span>
    </AppButton>
  )
}

export default Button;