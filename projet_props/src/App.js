import React from 'react';
import './App.css';
import Data from './data.js';
import ProductTable from './composants/ProductTable/ProductTable.js';
function App() {
  return (
    <div className="App">
      <h1>Products</h1>
      {Data.map(product => (
        <ProductTable key={product.name} name={product.name} Category={product.category} Price={product.Price}/>
        
      ))}
    </div>
    
  )
 
}

export default App;
