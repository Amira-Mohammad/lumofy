import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './Components/Login/Login';
import CreateCourse from './Components/CreateCourse';
import ViewCourse from './Components/ViewCourse';
import EditCourse from './Components/EditCourse';
import CourseList from './Components/CourseList';


function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Courselist" component={CourseList} />
          <Route path="/createcourse" component={CreateCourse} />
          <Route path="/viewcourse" component={ViewCourse} />
          {/*<Route path="/" component={EditCourse} />  
           */}
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
