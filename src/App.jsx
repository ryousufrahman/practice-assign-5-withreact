import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import StatusCount from './Components/StatusCount'
import Toggle from './Components/Toggle'
import LoadingProblem from './Components/LoadingProblem'

const problemFetch = fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues').then(res =>res.json())



function App() {
   const [active, setActive] = useState(1);
 return (
    <>
    <header>
     <Navbar></Navbar>
    </header>
    <main className='max-w-[1200px] mx-auto'>
      <section>
         <Toggle active={active} setActive ={setActive}></Toggle>
      </section>
      <section>
        <StatusCount></StatusCount>
      </section>
      <section className='mt-5 mb-3 '>
        <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
             <LoadingProblem problemFetch={problemFetch} active={active} setActive={setActive}></LoadingProblem>

        </Suspense>
      </section>
    </main>
    </>
  )
}

export default App
