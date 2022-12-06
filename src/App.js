import './App.css';
import SearchPage from './component/SearchPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home';
function App() {
  return (
    <BrowserRouter>
      {/* <Home />
      <SearchPage/> */}
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/result" exact component={SearchPage} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
