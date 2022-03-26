import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Header/Shop/Shop';
import Propsvstate from './Components/PropsVSstate/Propsvstate';
import Reactworks from './Components/React-works/Reactworks';
import Usestate from './Components/UseState/Usestate';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Reactworks></Reactworks>
      <Propsvstate></Propsvstate>
      <Usestate></Usestate>
    </div>
  );
}

export default App;
