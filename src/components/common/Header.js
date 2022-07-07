import styled from 'styled-components';
import { c } from '../common/styledVariables';
import Search from './Search';
import Theme from './Theme';

const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid ${c.clr_additional};

  h3 {
    margin: 0 20px 0 0;
    font-size: 18px;
    text-transform: uppercase;
  }
`

export const Header = ({search = true}) => {

  return (
    <AppHeader>
      {search
        ? <Search/>
        : <h3>Countries</h3> 
      }
      <Theme />
    </AppHeader>
  )
}

export default Header;