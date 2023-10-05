import './App.css';
import React from 'react';
import DrawClass from './components/DrawClass';

function App() {

  const CLASS_UML = {
    name: 'Person',
    attributes: ['+name:str','+phoneNumber:str','+emailAddress:str'],
    methods:['+purcharseParkinPass()'],
    borderColor:'#DC2DDE',
    headColor:'#DC2DDE',
    textColor:'#333333'
    }
    
  return (
    <div className="App">
      <DrawClass data={CLASS_UML} />
      <DrawClass data={CLASS_UML} />
      <DrawClass data={CLASS_UML} />
    </div>
  );
}

export default App;
