import Input from '../ui/Input';
import { CgSearch as SearchIco } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { setCountriesList, setCurrentPage } from '../../store/countriesSlice';


export const Search = () => {
  const dispatch = useDispatch()
  const allCountries = useSelector(state => state.countries.allCountries);
  const countriesSearch = value => {
    let searchingCountries = allCountries.filter(i =>
      i.name.toLowerCase().includes(value) || i.capital?.toLowerCase().includes(value))
    dispatch(setCountriesList(searchingCountries))
    dispatch(setCurrentPage(1))
  }

  return (
    <Input
      onChange={e => {countriesSearch(e.target.value.toLowerCase())}}
      placeholder='County name or capital...'
      ico={<SearchIco/>}
    />
  )
}

export default Search;