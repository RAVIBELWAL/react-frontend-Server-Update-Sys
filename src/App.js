import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import SoftwareComp from './components/SoftwareComp';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateSoftwareComponent from './components/CreateSoftwareComponent';
import Login from './components/login';

function App() {
  return (
    <div>

      <Router>
            <Header/>
            <br></br>
            <div className='container'>
              <Switch> 
                <Route path='/' exact component={SoftwareComp}></Route>   
                <Route path='/software' component={SoftwareComp}></Route>
                <Route path='/addNewSoft' component={CreateSoftwareComponent}></Route>
                <Route path='/login' component={Login}></Route>
              </Switch>
            </div>
            <Footer/>
      </Router>

    </div>
  );
}

export default App;
