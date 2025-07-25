
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NoMatch from './pages/NoMatch';

import LocationPlace from './pages/Location';
//main Unit paths are to Location component or 404 page: NoMatch component

export const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<LocationPlace />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </>
  );
}



export default App;
