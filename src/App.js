import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Questions } from './containers/Questions/Questions';
import { ResultWindow } from './containers/ResultWindow/ResultWindow';
import { StartWindow } from './containers/StartWindow/StartWindow';

function App() {
  return (
    <Routes>
      <Route index element={<StartWindow />}/>
      <Route path='/questions' element={<Questions />} />
      <Route path='/results' element={<ResultWindow />} />
    </Routes>
  );
}

export default App;
