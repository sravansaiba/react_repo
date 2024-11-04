import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import GlobalState from './components/food-recepie-app/context/index.jsx';
// import { BrowserRouter } from 'react-router-dom'
import Context from './context-api/Context.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    {/* <GlobalState> */}
    <Context>
      <App />
    </Context>
    {/* </GlobalState> */}
  </StrictMode>
 
);
