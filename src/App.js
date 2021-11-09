import { Route,Switch} from 'react-router-dom';

import Home from './Home';
import About from './pages/About';
import Service from './pages/Service';
import Error from './pages/Error';
import Contactus from './pages/Contactus';



function App() {
  return (
   <>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' component={Contactus}></Route>
      <Route exact path='/service' component={Service}></Route>
      <Route exact component={Error}></Route>
     
    </Switch>
    
   </>
  );
}

export default App;
