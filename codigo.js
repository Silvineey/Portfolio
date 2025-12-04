const simbolo=document.getElementById("simbolo")
function mudartema(){
    const caixa=document.querySelector(".caixatema")
    const bolinha=document.querySelector(".bolinha")
    document.body.classList.toggle("modoescuro")
    bolinha.classList.toggle("ativa")
    caixa.classList.toggle("ativa")
}

const form=document.getElementById("formulario").addEventListener("click",(e)=>{
    const alvo=e.target
    if(alvo.type==="radio"){
        const id=alvo.id
        const h1=document.querySelector(".caixa h1")
        const design=document.getElementById("design")
        const dev=document.getElementById("dev")

        if(id==="eric"){
            h1.innerHTML="Web Design"
            simbolo.src="img/pincelpreto.png"
            dev.classList.add("oculto")
            setTimeout(() => {
                design.classList.remove("oculto")
            }, 500);
            if (document.body.classList.contains("modoescudo")){
                simbolo.src="img/pincelbranco.png"
            }
            else{
                simbolo.src="img/pincelpreto.png"
            }
        }
        else if(id==="sydney"){
            h1.innerHTML="Desenvolvedor Web"
            simbolo.src="img/devpreto.png"
            design.classList.add("oculto")
            setTimeout(() => {
                dev.classList.remove("oculto")
            }, 500);
        }
    }
})