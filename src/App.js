import Login from './components/Login/Login';
import Logo from './components/Logo/Logo';
import Nav from './components/Nav/Nav';
import Principal from './templates/Principal';
import Projects from './components/Projects/Projects';

import './App.css';

function App() {
  return (
    <div className="App">
      {/*<Nav/>
      <main>
        <Logo/>
        <Login/>
      </main>*/}
        {/*<Footer/>*/}

      <Principal>
        <Projects/>
      </Principal>
      
    </div>
  );
}

export default App;
