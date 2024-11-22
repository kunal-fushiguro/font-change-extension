chrome.runtime.onMessage.addListener((n,o,t)=>{if(n.type==="changeFont"){const{fontFamily:e}=n;document.body.style.fontFamily=e,t({status:"Font changed!"})}});
