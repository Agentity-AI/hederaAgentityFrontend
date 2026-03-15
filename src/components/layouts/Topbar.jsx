import { Mail, User } from "lucide-react";
import React from "react";

function Topbar() {
    const[profileStyle, setProfileStyle] = React.useState("");
     const[notificationStyle, setNotificationStyle] = React.useState("");

    function addProfileStyle(){
        setProfileStyle("bg-[#fff] text-[#000] rounded-full shadow-lg");
    }
    function addNotificationStyle(){
        setNotificationStyle("bg-[#fff] text-[#000] rounded-full shadow-lg");
    }
  return (
    <div className="flex items-center justify-between w-full border-[#514c4c]">
      {/* Left side (optional breadcrumb / page title placeholder) */}
      <div className="text-sm text-base-content/60 hidden md:block">
        {/* You can put breadcrumbs here if you want */}
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-4">
        {/* Network badge */}
        <div className="rounded-full flex gap-2 px-3 py-2 text-[#0cf33a] border-[#0cf33a] border-1 bg-[#19291c] ">
          <div className="relative flex items-center justify-center">
  {/* animated ring */}
  <div className="absolute inline-flex h-4 w-4 rounded-full bg-[#0cf33a] opacity-75 animate-ping"></div>

  {/* solid center dot */}
  <div className="text-xs font-mono w-4 h-4 rounded-full bg-[#0cf33a]"></div>
</div>

          <span className="text-xs font-mono">Avalanche</span>
         
        </div>

        {/* Notification icon */}
        <button onMouseOver={addNotificationStyle} 
        className={`btn btn-ghost btn-circle ${notificationStyle? notificationStyle : 'bg-transparent text-base-content/60'}`}
        onMouseLeave={() => setNotificationStyle("")} >
          <span className="text-lg">
            <Mail className={`m-3 btn btn-ghost btn-circle ${notificationStyle? notificationStyle : 'bg-transparent text-base-content/60'}`}/>
          </span>
        </button>

        {/* Wallet / profile */}
        <button className="btn btn-ghost border border-base-300 rounded-full px-3 h-9 min-h-0">
          <span className="text-xs font-mono">0x7a9f...3b2c</span>
        </button>
        <button  onMouseOver={addProfileStyle} 
        className={`btn btn-ghost btn-circle ${profileStyle? profileStyle : 'bg-transparent text-base-content/60'}`}
        onMouseLeave={() => setProfileStyle("")} 
        >
            <User className={`m-3 btn btn-ghost btn-circle ${profileStyle? profileStyle : 'bg-transparent text-base-content/60'}`} size={20} />
        </button>
      </div>
    </div>
  );
}

export default Topbar;
