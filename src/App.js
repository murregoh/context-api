import { Switch, Route } from "react-router-dom";
import styled from 'styled-components';

// Components
import Home from './components/tabs/Home';
import About from './components/tabs/About';
import Blogs from './components/tabs/Blogs';
import Header from './components/header/Header';
import Article from './components/article/Article';
import Error404 from './components/error404/Error404';
import { useContext } from "react";
import { Context } from './contexts/context';

const App = () => {

  const { theme } = useContext(Context);

  return (
    <MainContainer>

      <Header />

      <Main theme={theme}>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/blogs" component={Blogs} exact />
          <Route path="/blogs/:id" component={Article} exact />
          <Route path="/about" component={About} exact />
          <Route path="*" component={Error404} exact />
        </Switch>

      </Main>

    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
  background-color: rgb(196, 205, 208);
  margin-top: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Main = styled.main`
  font-size: ${props => props.theme ? props.theme.font + 'px' : '10px'};
  text-align: ${props => props.theme ? props.theme.align : 'center'};
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export default App;
