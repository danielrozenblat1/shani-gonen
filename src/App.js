import logo from './logo.svg';
import './App.css';
import ServicesComponent from './components/services/Services';
import NavBarNew from './components/CourseNav/NavBarNew';
import NumerologyScreen from './screens/SecondScreen';
import ForthScreen from './screens/ForthScreen';
import AboutMe from './components/me/Me';
import FirstScreen from './screens/FirstScreen';
import ByMe from './components/ByMe/ByMe';

function App() {
  return <>
  <NavBarNew/>
<FirstScreen/>
  <NumerologyScreen/>
  <ForthScreen/>
  <AboutMe/>
  <ServicesComponent/>
<ByMe/>
  </>
}

export default App;
