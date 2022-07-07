import styled from 'styled-components';
import { c } from '../common/styledVariables';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadCountry } from '../../store/countriesAsyncThunk';
import Container from '../common/Container';
import Header from '../common/Header';
import Loader from '../ui/Loader';
import Button from '../ui/Button';

const StyledCountryPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0 0 0;

  .img-container {
    position: relative;
    display: flex;
    align-self: flex-start;
    flex: 0 1 100%;
    margin: 0 0 34px 0;
    padding: 0 0 58% 0;

    @media ${c.media_tablet} {
      flex: 0 1 40%;
      margin: 0;
      padding: 0 0 26% 0;
    }

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .text-wrap {
    display: flex;
    flex-direction: column;
    flex: 0 1 100%;

    @media ${c.media_tablet} {
      flex: 0 1 60%;
      padding: 0 0 0 28px;
    }

    h3 {
      margin: 0 0 18px 0;
      font-size: 18px;
      text-transform: uppercase;
    }

    p {
      margin: 0 0 10px 0;

      span:first-of-type {
        font-weight: 500;
      }
    }
  }

  a {
    margin: 30px 0 0 0;
    text-decoration: none;
  }

  .error {
    flex-basis: 100%;
  }
`

export const CountryPage = () => {
  const dispatch = useDispatch();
  const {country} = useParams();
  const singleCountry = useSelector(state => state.countries.singleCountry);
  const pageStatus = useSelector(state => state.countries.pageStatus);

  useEffect(() => {
    dispatch(loadCountry(country));
  }, []);

  return (
    <Container>
      <Header search={false}/>
      <StyledCountryPage>
        {pageStatus === 'loading' && <Loader/>}
        {pageStatus === 'resolved' &&
          <>
            <div className='img-container'>
              <img
                src={singleCountry.name === 'Andorra'
                  ? singleCountry.flags.png
                  : singleCountry.flags.svg
                }
                alt={singleCountry.name}
              />
            </div>
            <div className='text-wrap'>
              <h3>{singleCountry.name}</h3>
              <p><span>Capital: </span>{singleCountry.capital}</p>
              <p><span>Region: </span>{singleCountry.region}</p>
              <p><span>Subegion: </span>{singleCountry.subregion}</p>
              <p><span>Languages: </span>
                {
                  singleCountry.languages.map(i => <span key={singleCountry.name + i.name}>{i.name} </span>)
                }
              </p>
              <p><span>Population: </span>{singleCountry.population}</p>
            </div>
          </>
        }
        {pageStatus === 'rejected' && <div className='error'>Error, try again later</div>}
        {(pageStatus === 'resolved' || pageStatus === 'rejected') &&
          <Link to="/"><Button text='Back'/></Link>
        }
      </StyledCountryPage>
    </Container>
  )
}

export default CountryPage;