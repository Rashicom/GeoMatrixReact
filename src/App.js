
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Loginpage from "./pages/Userloginpage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./pages/Homepage";
import Datalabpage from "./pages/Datalabpage";
import Userlogin from "./pages/Userloginpage";
import Signuppage from "./pages/Signuppage";


function App() {
 
  return (
    <div>
      
      <Router>

        <Loginpage />

      </Router>
      
    
    </div>
  );
}

export default App;
