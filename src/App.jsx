import { Suspense } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import StatusCount from './Components/StatusCount'
import Toggle from './Components/Toggle'
import LoadingProblem from './Components/LoadingProblem'

const ProblemFetch =fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues').then(res =>res.json())

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
      <section>
        <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
             <LoadingProblem ProblemFetch={ProblemFetch}></LoadingProblem>

        </Suspense>
      </section>
    </main>
    </>
  )
}

export default App
