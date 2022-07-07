import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { c } from '../common/styledVariables';
import { setAllCountries, setCountriesList} from '../../store/countriesSlice';
import { loadCountries } from '../../store/countriesAsyncThunk';
import { sorting } from '../../utils/utils';
import CountryCard from './CountryCard';
import Button from '../ui/Button';
import Loader from '../ui/Loader';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

const StyledCountriesWrap = styled.div`
  display: grid;
  align-items: stretch;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
  padding: 22px 0 0 0;

  @media ${c.media_tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  @media ${c.media_desctop} {
    grid-template-columns: repeat(4, 1fr);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
const ButtonsWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 0 0;

  button + button {
    margin: 0 0 0 10px;
  }

  @media ${c.media_tablet} {
    justify-content: flex-start;
  }
`

export const CountriesWrap = () => {
  const [btnActive, setBtnActive] = useState({
    country: true,
    capital: false,
  })

  const dispatch = useDispatch();
  const status = useSelector(state => state.countries.status);
  const allCountries = useSelector(state => state.countries.allCountries);
  const countriesList = useSelector(state => state.countries.countriesList);
  const currentPage = useSelector(state => state.countries.currentPage);
  const perPage = useSelector(state => state.countries.perPage);

  useEffect(() => {
    dispatch(loadCountries());
  }, []);

  const countriesOnOnePage = useMemo(() => {
    const lastNum = currentPage * perPage;
    const firstNum = lastNum - perPage;
    const countriesInPage = countriesList.slice(firstNum, lastNum);
    return countriesInPage;
  }, [countriesList, currentPage, perPage]);


  const sortingCountries = (value) => {
    const sortedAllArr = sorting(allCountries, value);
    const sortedListArr = sorting(countriesList, value);
    dispatch(setAllCountries(sortedAllArr));
    dispatch(setCountriesList(sortedListArr));

    value === 'capital'
      ? setBtnActive({country: false, capital: true,})
      : setBtnActive({country: true, capital: false,})
  } 

  return (
    <div>
      {status === 'resolved' &&
        <>
          <Pagination/>
          <ButtonsWrap>
            <Button
              onClick={() => sortingCountries('name')}
              active={btnActive.country}
              text='Country'
            />
            <Button
              onClick={() => sortingCountries('capital')}
              active={btnActive.capital}
              text='Capital'
            />
          </ButtonsWrap>
        </>
      }

      <StyledCountriesWrap>
        {status === 'loading' && <Loader/>}
        {status === 'resolved' &&
          countriesOnOnePage?.map(i =>
            <Link to={`/${i.name}`} key={i.name}>
              <CountryCard
                flag={i.name === 'Andorra' ? i.flags.png : i.flags.svg}
                name={i.name}
                capital={i.capital}
                region={i.region}  
              />
            </Link>
          )
        }
        {status === 'rejected' && <div>Error, try again later</div>}
      </StyledCountriesWrap>
    </div>
  )
}

export default CountriesWrap;