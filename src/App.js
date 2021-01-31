import './App.scss';
import Header from "./Components/HeaderComponent/header.component";
import HomePage from "./Pages/HomePage/homePage.component";
import ProjectsPage from "./Pages/ProjectsPage/projectsPage.component";
import {Switch,Route,Redirect} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/about' component={HomePage}/>
            <Route path='/projects' component={ProjectsPage}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
