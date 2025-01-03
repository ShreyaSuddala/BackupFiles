import'./App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home1 from './components/Home1';
import About1 from './About1';
import Ordersummary from './order-summary';
import Header1 from './components/Header1';
import DynamicList from './rrr';
import MyForm from './FormHandling';
import FormHandling from './FormHandling';
import FormHandling2 from './FormHandling2';
import FormHandling3 from './FormHandling3';
import Apifetch from './Apifetch';

function App() {
  return (
    <BrowserRouter>
    <Header1/>
       <Routes>
          <Route exact path='/' element={<Home1/>}/>
          <Route path='/About1' element={<About1/>}/>
          <Route path='/order-summary' element={<Ordersummary/>}/>
            
      </Routes>
      </BrowserRouter>
    // <div className='App'>

      /* <FormHandling2/> */
      /* <FormHandling3/> */
      /* <FormHandling/> */
      /* <Apifetch/> */
    /* </div> */
    
  
    
  )
}

export default App;
