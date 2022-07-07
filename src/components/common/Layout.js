import styled, {css} from 'styled-components';
import { c } from '../common/styledVariables';

const AppLayout = styled.div`
  min-height: 100vh;

  ${props => props.theme && css`
    color: ${c[props.theme].clr_text};
    background: ${c[props.theme].clr_background};
  `}
`

export const Layout = ({children, theme}) => {
    
  return (
    <>
      <AppLayout theme={theme}>
        {children}
      </AppLayout>
    </>
  )
}

export default Layout;