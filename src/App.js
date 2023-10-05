import './App.css'
import React from 'react'
import DrawClass from './components/DrawClass'
import MenuBar from './components/MenuBar'

function App () {
  const configMenu = {
    configColor: {
      background: '#f4f5fa', // Color de Fondo General de la botonera
      itemBackground: '#d0d0d0', // Color de Fondo de los subMenús
      itemColor: '#666', // Color del texto de cada item del menú
      itemActive: '#a8a8a8' // Color cuando hace click y se abre un submenú
    },

    id: 150,

    menuItems: [
      { name: 'Another Action', isFolder: false, id: 148, idPadre: 150 },
      { name: 'sub menu', isFolder: true, id: 2, idPadre: 150 },
      { name: 'Action', isFolder: false, id: 3, idPadre: 2 },

      { name: 'Another action', isFolder: false, id: 4, idPadre: 2 },
      { name: 'sub menu', isFolder: true, id: 5, idPadre: 2 },
      { name: 'Another action', isFolder: false, id: 55, idPadre: 5 },
      { name: 'something else here', isFolder: true, id: 56, idPadre: 5 },
      { name: 'something else here', isFolder: true, id: 57, idPadre: 56 },
      { name: 'something else here', isFolder: false, id: 58, idPadre: 57 }
    ]
  } // end

  const CLASS_UML = {
    name: 'Person',
    attributes: ['+name:str', '+phoneNumber:str', '+emailAddress:str'],
    methods: ['+purcharseParkinPass()'],
    borderColor: '#DC2DDE',
    headColor: '#DC2DDE',
    textColor: '#333333'
  }

  const CLASS_UML2 = {
    name: 'Person',
    attributes: ['+name:str', '+phoneNumber:str'],
    methods: ['+purcharseParkinPass()'],
    borderColor: '#17FFA1',
    headColor: '#17FFA1',
    textColor: '#333333'
  }

  const CLASS_UML3 = {
    name: 'Person',
    attributes: [],
    methods: ['+purcharseParkinPass()', '+purcharseParkinPass()', '+purcharseParkinPass()', '+purcharseParkinPass()'],
    borderColor: '#FFFFAA',
    headColor: '#FFFFAA',
    textColor: '#333333'
  }

  return (
    <div className="App">
      <MenuBar config={configMenu} />
      <div>
        <DrawClass data={CLASS_UML} />
        <DrawClass data={CLASS_UML2} />
        <DrawClass data={CLASS_UML3} />
      </div>
    </div>
  )
}

export default App
