import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';

import CategoryPage from './components/category-page/category-page.component';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path = '/' component = {HomePage}/>
        <Route exact path = '/:title' component = {CategoryPage}/>
      </Switch>
    </div>
  );
}

export default App;
