import AppLayout from "../layouts/AppLayouts"

function SmartContract() {
  return (
    <AppLayout>
        <div id="dashboard" className="mb-6 p-4 rounded-lg">
        <h1 className="text-3xl font-bold mb-1">Smart Contract Audits</h1>
        <p className="text-sm text-base-content/60 text-white">
         Automated security analysis for smart contracts
        </p>
      </div>
    </AppLayout>
    
  )
}

export default SmartContract