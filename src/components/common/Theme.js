import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../store/countriesSlice";
import Checkbox from '../ui/Checkbox';

export const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.countries.theme);

  const changeTheme = (e, theme) => {
    e.preventDefault();

    theme = localStorage.getItem('appTheme') || theme;
    
    if (theme === 'light') {
      localStorage.setItem('appTheme', 'dark')
      dispatch(setTheme('dark'))
    }
    if (theme === 'dark') {
      localStorage.setItem('appTheme', 'light')
      dispatch(setTheme('light'))
    }
  }

  return (
    <>
      <Checkbox
        onClick={e => {changeTheme(e, theme)}}
        theme={theme}
      />
    </>
  )
}

export default Theme;