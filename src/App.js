import logo from './logo.svg';
import './App.css';
import SideBar from './Components/SideBar';
import { Routes, Route } from "react-router-dom";
import Main from './Pages/Main';
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState('SPORTS');

  const handleCategoryChange = (newCategory) => {
    console.log("selected cat ",newCategory);
    setCategory(newCategory);
  };



  return (
    // <div className="App">
    <>
    <Routes>
      <Route path="/" element={<SideBar onCategoryChange={handleCategoryChange} />} >
      <Route index element={<Main category={category}/>}/>
      <Route path="/Global" element={<Main category={category}/>}/>
      </Route>
    </Routes>
    </>
    
  );
}

export default App;
