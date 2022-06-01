import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import { history } from './helpers/history';

import Home from './components/Home';
import AddressBookTable from './components/AddressBookTable';
import AddressBookCard from './components/AddressBookCard';
import NotFound from './components/NotFound';

const App = (props) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/address-book-table" component={AddressBookTable} />
        <Route exact path="/address-book-card" component={AddressBookCard} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
