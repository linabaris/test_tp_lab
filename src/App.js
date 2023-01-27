import { Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import Card from './pages/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/card/:id' element={<Card/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
