import  GlobalStyle  from './styles/global'
import {Routes} from './routes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Routes/>
      <ToastContainer/>
      
    </>
  );
}

export default App;
