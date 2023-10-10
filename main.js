const d = new Date();
let seconds = d.getSeconds().valueOf();
const typebotInitScript = document.createElement("script");
typebotInitScript.type = "module";


if (seconds  % 2 == 0) {
    //par
    typebotInitScript.innerHTML = `import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.1/dist/web.js'
  
Typebot.initStandard({ typebot: "avon-chat-csm-1" });`;
}else{
    //impar
    typebotInitScript.innerHTML = `import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.1/dist/web.js'
  
    Typebot.initStandard({ typebot: "avon-chat-csm-2" });`;
}


function removerlogo() {

    let blocoS = document.getElementsByTagName("typebot-standard")[0];

	let blocoS1 = blocoS.shadowRoot.getElementById("lite-badge");
	
    if (blocoS1 == null){
        const myTimeout2= setTimeout(removerlogo, 500);
    }else{
        blocoS1.style = "display: none !important;";
    }
    
}


document.body.append(typebotInitScript);
const myTimeout = setTimeout(removerlogo, 500);
