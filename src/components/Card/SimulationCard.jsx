function SimulationCard({action,status}) {
  return (
          <div className="card px-4 bg-[#0B1020] w-[90%] mx-auto rounded-lg border border-[#514c4c]">
<h3 className="text-[#adb0b4]">Selected Agent:</h3>
<div className="text-white text-sm mt-2"> {action}</div>
<div className="flex mt-4 items-center gap-2">
  Status:
  <div className={`w-3 ml-28 h-3 rounded-full ${status === "Verified" ? "bg-green-500" : status === "Pending" ? "bg-yellow-500" : "bg-red-500"}`}></div>
  <span className={`text-sm ${status === "Verified" ? "text-green-500" : status === "Pending" ? "text-yellow-500" : "text-red-500"}`}>{status}</span>
</div>
    </div>
    
  )
}

export default SimulationCard