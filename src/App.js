
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Loginpage from "./pages/Loginpage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./pages/Homepage";
import Datalabpage from "./pages/Datalabpage";
import Signuppage from "./pages/Signuppage";


function App() {
 
  return (
    <div>
      
      <Router>

          <Routes>

            <Route path='/' element={<Homepage />} />
            <Route path='/login/*' element={<Loginpage />} />
            <Route path='/datalab/*' element={<Datalabpage />} />
            <Route  path='/signup/*' element={<Signuppage />} />

          </Routes>
          

      </Router>
      
    
    </div>
  );
}

export default App;
