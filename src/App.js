import './App.css';
import Header from './Components/Header/Header';
import Propsvstate from './Components/PropsVSstate/Propsvstate';
import Reactworks from './Components/React-works/Reactworks';
import Shop from './Components/Shop/Shop';
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
