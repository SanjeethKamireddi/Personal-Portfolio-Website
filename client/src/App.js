import { ToastContainer } from 'react-toastify';
import './App.css';
import { PortfolioContainer } from './PortfolioContainer/PortfolioContainer';
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <PortfolioContainer/>
    </div>
  );
}

export default App;
