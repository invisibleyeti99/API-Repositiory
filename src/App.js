import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AnimationContext from './context/AnimationContext';
import Layout from './Layout/layout';
import Homepage from './Pages/Homepage/Homepage';
import Meditation from './Pages/Meditation/Meditation';
import Yoga from './Pages/Yoga/Yoga';
import Chakras from './Pages/Chakras/Chakras';

function App() {
  return (
     <Router>
<Layout>
<div className='bg-slate-50 min-h-screen'>
       <Routes>
       <Route path='/API-Repositiory/' Component={Homepage} exact/>
       <Route path='/Meditation' Component={Meditation} />
       <Route path='/Chakras' Component={Chakras} />
       <Route path='/Yoga' Component={Yoga} />
       </Routes>  
       </div>  
   </Layout>

  
   </Router>
   
  );
}

export default App;
