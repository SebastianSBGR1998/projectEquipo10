import Login from './components/Login/Login';
import Logo from './components/Logo/Logo';
import Nav from './components/Nav/Nav';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <main>
        <Logo/>
        <Login/>
      </main>
        {/*<Footer/>*/}
      
    </div>
  );
}

export default App;
