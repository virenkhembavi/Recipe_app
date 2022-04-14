import './App.css';
import Categories from './component/Categories';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom'
import Search from './component/Search';
import styled from 'styled-components';
import { Link } from "react-router-dom"


function App() {
  return (
    <div >
      <BrowserRouter>
        <Nav>
          <Logo to={"/"} >
            <h2>LOGO</h2>
          </Logo>
        </Nav>
        <Search />
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration:  none;
  font-size: 1.5rem;
  font-weight:400;
`;

const Nav = styled.div`
  padding: 4rem, 0rem;
  margin-top: 20px;
  display:flex;
  justify-content: flex-start;
  align-items:center;
  svg{
    font-size: 2rem;
  }

`;

export default App;
