
const USUARIO = "avon";
const SENHA = "avon@2024";


function inserirChat(senha){

    const d = new Date();
    let seconds = d.getSeconds().valueOf();
    const typebotInitScript = document.createElement("script");
    typebotInitScript.type = "module";


    if (seconds  % 2 == 0) {
        //par
        typebotInitScript.innerHTML = `import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.2/dist/web.js'
    
        Typebot.initStandard({ 
            typebot: "aavon-chat-csm-aaa", 
            prefilledVariables: {
                SENHA: '${senha}'
            },
        });
        `;
    }else{
        //impar
        typebotInitScript.innerHTML = `import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.2/dist/web.js'
    
        Typebot.initStandard({ 
            typebot: "avon-chat-csm-bbb", 
            prefilledVariables: {
                SENHA: '${senha}'
            },
        });
        `;
    }

    document.body.append(typebotInitScript);
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


function login() {

    let bloco_login = document.getElementById("id_bloco_login");
    let bloco_fundo = document.getElementById("fundo");
    let input_usuario = document.getElementById("usuario");
    let input_senha = document.getElementById("senha");

    if ((SENHA == input_senha.value.toString()) && (USUARIO == input_usuario.value.toString())){
        bloco_login.style = "display: none;";
        bloco_fundo.style = "display: none;";
        inserirChat(SENHA);
        const myTimeout = setTimeout(removerlogo, 500);

    }else {
       let acesso = document.getElementById("acesso");
       acesso.style = " display: block;";
    }
    

}


let botao_logar = document.getElementById("btn_logar");
botao_logar.addEventListener("click",login);
