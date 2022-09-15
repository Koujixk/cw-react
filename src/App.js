import { Route, Routes } from 'react-router-dom';
import './App.css';
import { StartWindow } from './containers/StartWindow/StartWindow';

function App() {
  return (
    <Routes>
      <Route index element={<StartWindow />}/>
    </Routes>
  );
}

export default App;
