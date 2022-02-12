url=window.prompt("url:");site=`<iframe src="` + url + `" height="1000" width="650"></iframe>`;elm=document.createElement("div");elm.innerHTML=site;document.body.appendChild(elm);
