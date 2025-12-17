const simbolo = document.getElementById("simbolo")
const form = document.getElementById("formulario").addEventListener("click", (e) => {
    const alvo = e.target
    if (alvo.type === "radio") {
        const id = alvo.id
        const design = document.getElementById("design")
        const dev = document.getElementById("dev")
        const projetosdev=document.getElementById("projetosdev")
        const projetosdesign=document.getElementById("projetosdesign")
        const header=document.querySelector("header p")
        const altura=document.getElementById("backgroundmain")

        if (id === "eric") {
            dev.classList.add("oculto")
            projetosdev.classList.add("oculto")
            setTimeout(() => {
                design.style.display="flex"
                projetosdesign.style.display="block"
                header.innerHTML="Eric Guedes"
                altura.style.height="950px"
            }, 200);
            setTimeout(() => {
                design.classList.remove("oculto")
                projetosdesign.classList.remove("oculto")
                simbolo.src = "img/designlogo.png"
            }, 300);
            setTimeout(() => {
            dev.style.display="none"
            projetosdev.style.display="none"
            }, 400);
        }
        else if(id === "sydney" ) {
            simbolo.src = "img/devlogo.png"
            design.classList.add("oculto")
            projetosdesign.classList.add("oculto")
                setTimeout(() => {
                dev.style.display="flex"
                projetosdev.style.display="block"
                header.innerHTML="Silvio Sidney"
                altura.style.height=""
            }, 200);
            setTimeout(() => {
                dev.classList.remove("oculto")
                projetosdev.classList.remove("oculto")
                simbolo.src = "img/devlogo.png"
            }, 300);
            setTimeout(() => {
                design.style.display="none"
                projetosdesign.style.display="none"
            }, 400);
        }}});