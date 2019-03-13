import React from 'react';
import './config/reactotron';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';
import { Wrapper, Container, Content } from './styles/componentes';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Wrapper>
      <Container>
        <Header />
        <Content>
          <Routes />
        </Content>
      </Container>
      <Footer />
    </Wrapper>
  </Provider>
);
export default App;
