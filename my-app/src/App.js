import { Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div 
        className="row align-items-center text-light"
      >
        <div className="col-md-12">
          <Link to="/dropdownSimple" style={{color: 'purple'}}>
            Navigate to Dropdown Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
