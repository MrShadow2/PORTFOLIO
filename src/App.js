
import styled from 'styled-components';
import './App.css';
// import Main from './Main';
import Container from './Container';
import Navbar from './Navbar';
import Footer from './Footer';
import {Route, Switch} from 'react-router-dom';
import Work from './Work';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Main from './Main';
// import Work from './Work';
// import app1 from './app1'



const container = styled.div``;

function App() {
  // const [isLoading,setIsLoading]=useState(false)
  // const {work} = useParams()
  // console.log(work);
  // console.log(params);
  return (
    <div className="App">
      <Main />

    
    </div>
  );
}
export default App;
