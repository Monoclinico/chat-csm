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

document.body.append(typebotInitScript);
