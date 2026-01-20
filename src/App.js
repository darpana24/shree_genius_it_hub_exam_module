import logo from './logo.svg';
import './App.css';
import './components/admin_side/js/greet'
import Greet from './components/admin_side/js/greet';
import Omkar from './components/admin_side/js/omkar'
function App() {
  return (
    <div className="App">
     <Greet />
     <Omkar/>
    </div>
  );
}

export default App;
