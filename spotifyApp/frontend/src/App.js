import './App.css';
import Search from './components/Search';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
   <Router>
     <Switch>
       <Route exact path="/" component={Search}/>
     </Switch>
   </Router>
    </div>
  );
}

export default App;
