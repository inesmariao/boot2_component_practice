
import './App.css'
import { MyComponent } from './components/MyComponent'
import { SecondComponent } from './components/SecondComponent';

function App() {

  const name = 'Inés María O.';

  return (
    <>
      <div>
        <h3>Práctica de Componentes</h3>
        {/* Cargar el primer componente */}
        <MyComponent
          name={name}
          lastName="Oliveros"
        />
        <h4>Segundo Componente</h4>
        <SecondComponent />
      </div>
    </>
  )
}

export default App
