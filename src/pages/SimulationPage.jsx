import { useState } from 'react'
import AppLayout from '../layouts/AppLayouts'
import { Loader, Play, TestTube } from 'lucide-react'
import SimulationCard from '../components/Card/SimulationCard';
import NoActive from '../components/SimulationState/NoActive';
import Active from '../components/SimulationState/Active';

function SimulationPage() {
    const [action, setAction] = useState(""); // stores selected option

  function handleChange(e) {
    const selected = e.target.value;
    setAction(selected);
    console.log("Selected:", selected);
  }

  return (
   <AppLayout>
    <div className="mb-6 p-4 rounded-lg">
        <h1 className="text-3xl font-bold mb-1">Simulation Sandbox</h1>
        <p className="text-sm text-base-content/60 text-white">
         Test AI agents in containerized scenarios
        </p>
      </div>
       <div className="grid gap-4 grid-cols-3 ">
        {/* Simulation Controls */}
        <div className="card bg-base-200 border border-[#514c4c] col-span-1">
          <div className="card-body flex GAP-2">
            <TestTube className="w-5 h-5 mr-2 my-2 text-[#0d59a5]" />
            <h2 className="card-title my-2">Configure Simulation</h2>
             </div>
             <form className="card-body">
             <div className="card-body ">
                <select 
                className="bg-[#1c1b24] py-2 select :focus-border-none mt-4 w-[30] max-w-xs mb-4 :"
                onChange={handleChange}
                value={action}>
                  <option>Government Delegate(Govenment Agent)</option>
                  <option>Defi Yield Optimizer(Defi Agent)</option>
                  <option>NFT Market Analyzer(NFT Agent)</option>
                  <option>Alpha Trading Bot (Trading Bot)</option>
                  </select>
             </div>
              <div className="card-body ">
                <select className="bg-[#1c1b24] select py-2 :focus-border-none mt-8 w-[96%] max-w-xs mb-4 :">
                  <option>Token Swap</option>
                  <option>NFT Mint</option>
                  <option>Liquidity Pool</option>
                  <option>Contact Deployment</option>
                  <option>Multi-Sig Transaction</option>
                  <option>Cross Chain Bridge</option>
                  </select>
             </div>
                <div>
                    <SimulationCard action={action} status="Verified"/>
                
                    </div>
                    <div>
                        <button className="btn btn-primary flex justify-center align-center bg-[#1087e7] w-full  mt-4 py-1 px-2 hover:bg-[#0d78c9]"><Play className="w-6 h-6 mr-2" /> <span>Run Simulation</span></button>
                    </div>
            </form>
        </div>
        {/* Simulation View */}
        <div className="card bg-base-200 border border-[#514c4c] col-span-2 rounded-lg">
          <div className="card-body">
           <Active/>
           
          
        </div>
                
        </div>
      </div>

   </AppLayout>
  )
}

export default SimulationPage