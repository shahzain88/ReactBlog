import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import MyWorks from './MyWorks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  return (

    //BrowserRouter will make server like connection with browser.. 
    <Router>
      <div className="App">
        {/* Navbar will show up on all web sites. because it is out side the Switch... */}
        <Navbar />
        <div className="content">
          {/* Switch will onliy show only one Route at a time . it will switch betwwen them .  */}
          <Switch>
            {/* Route will take path this will be added to domane */}
            <Route exact path="/">
              <Home />
            </Route>

            <Route path='/my-works'>
              <MyWorks />
            </Route>

            <Route path="/create">
              <Create />
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
        </div>

      </div >
    </Router>
  );
}

export default App;
