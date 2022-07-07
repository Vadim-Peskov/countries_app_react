import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GlobalStyle } from './components/common/styledVariables';
import Layout from './components/common/Layout';
import Home from './components/pages/Home';
import CountryPage from './components/pages/CountryPage';
import Error404 from './components/pages/Error404';



function App() {
  const theme = useSelector(state => state.countries.theme);

  return (
    <>
      <GlobalStyle/>
      <Router>
        <Layout theme={theme}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:country' element={<CountryPage/>}/>
            <Route path='*' element={<Error404/>}/>
          </Routes>
        </Layout>
      </Router>
    </>   
  );
}

export default App;