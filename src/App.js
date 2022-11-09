import React from 'react';
import Sidebar from './Sidebar';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">

 {/* Header */}
<Header/>


 {/* App Body */}
 <div className='app__body'>
     {/* sidebar */}
  <Sidebar/>

     {/* feed */}
     {/* widgets */}
 </div>
   
    </div>
  );
}

export default App;
