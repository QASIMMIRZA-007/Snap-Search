import {React,useState} from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ImageData from './components/ImageData';
import Navbar from './components/Navbar';
import Home from './components/Home';



function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
    
      
      {/* <Router>
      <Navbar setSearchQuery={setSearchQuery} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/images">
          <ImageData searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </Route>
        
       
      </Switch>
    </Router> */}



<ImageData  searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

    </>
  )
}

export default App
