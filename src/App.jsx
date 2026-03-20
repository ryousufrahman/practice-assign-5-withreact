import './App.css'
import Navbar from './Components/Navbar'
import StatusCount from './Components/StatusCount'
import Toggle from './Components/Toggle'

function App() {
 return (
    <>
    <header>
     <Navbar></Navbar>
    </header>
    <main className='max-w-[1200px] mx-auto'>
      <section>
         <Toggle></Toggle>
      </section>
      <section>
        <StatusCount></StatusCount>
      </section>
    </main>
    </>
  )
}

export default App
