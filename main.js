const typebotInitScript = document.createElement("script");
typebotInitScript.type = "module";
typebotInitScript.innerHTML = `import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.1/dist/web.js'
  
Typebot.initStandard({ typebot: "avon-chat-csm-1" });
`;
document.body.append(typebotInitScript);
