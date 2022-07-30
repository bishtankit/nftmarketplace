import './App.css';
import Body from "./components/Body.jsx";
import Header from "./components/Header.jsx";
import "./css/style.css";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";





const supportedChainIds = [4];

const connectors = {
  injected: {}
  }


function App() {
  
  return(
<ThirdwebWeb3Provider
supportedChainIds={supportedChainIds}
  connectors={connectors}>
      <Header />
    <Body />
</ThirdwebWeb3Provider>
  );
}

export default App;
