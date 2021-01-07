import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';

import CategoryPage from './components/category-page/category-page.component';
import Prices from './pages/prices/prices.component';
import BookPage from './pages/bookpage/bookpage.component';
import ContactsPage from './pages/contactspage/contactspage.component';
import OmMegPage from './pages/ommegpage/ommegpage.component';
import SignInAndSignOutPage from './pages/signinandsignout/signinandsignout.component';

import Section_Data from './components/categories-menu/data';

function App() {
  const options = Section_Data.map((item) => ({title: item.title, linkUrl: item.linkUrl}) );
  console.log(options);
  return (
    <div>
        <Switch>
          <Route exact path = '/' component = {HomePage}/>
          <Route exact path = '/prices' component = {Prices}/>
          <Route exact path = '/book' component = {BookPage}/>
          <Route exact path = '/ommeg' component = {OmMegPage}/>
          <Route exact path = '/signin' component = {SignInAndSignOutPage}/>
          <Route exact path = '/contacts' component = {ContactsPage}/>
          <Route exact path = '/:title' component = {CategoryPage}/>
        </Switch>
    </div>
  );
}

export default App;
