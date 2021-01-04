import {Switch, Route, BrowserRouter} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';

import CategoryPage from './components/category-page/category-page.component';
import Navbar from './components/navbar/navbar.component';

import Section_Data from './components/categories-menu/data';

function App() {
  const options = Section_Data.map((item) => ({title: item.title, linkUrl: item.linkUrl}) );
  console.log(options);
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
