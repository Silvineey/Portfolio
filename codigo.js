const simbolo = document.getElementById("simbolo")
function mudartema() {
    const caixa = document.querySelector(".caixatema")
    const bolinha = document.querySelector(".bolinha")
    document.body.classList.toggle("modoescuro")
    bolinha.classList.toggle("ativa")
    caixa.classList.toggle("ativa")
    if (document.body.classList.contains("modoescuro")) {
        if (document.getElementById("eric").checked) {
            simbolo.src = "img/designbranco.png"
        } else {
            simbolo.src = "img/devbranco.png"
        }
    } else {
        if (document.getElementById("eric").checked) {
            simbolo.src = "img/designpreto.png"
        } else {
            simbolo.src = "img/devpreto.png"
        }
    }

}

const form = document.getElementById("formulario").addEventListener("click", (e) => {
    const alvo = e.target
    if (alvo.type === "radio") {
        const id = alvo.id
        const h1 = document.querySelector(".caixa h1")
        const design = document.getElementById("design")
        const dev = document.getElementById("dev")

        if (id === "eric" && document.body.classList.contains("modoescuro")) {
            simbolo.src = "img/designbranco.png"
            h1.innerHTML = "Web Design"
            dev.classList.add("oculto")
            setTimeout(() => {
                design.classList.remove("oculto")
            }, 500);
        }
        else if (id === "eric" && !document.body.classList.contains("modoescuro")) {
            simbolo.src = "img/designpreto.png"
            h1.innerHTML = "Web Design"
            dev.classList.add("oculto")
            setTimeout(() => {
                design.classList.remove("oculto")
            }, 500);
        }
        else if (id === "sydney" && document.body.classList.contains("modoescuro")) {
            simbolo.src = "img/devbranco.png"
            h1.innerHTML = "Desenvolvedor Web"
            design.classList.add("oculto")
            setTimeout(() => {
                dev.classList.remove("oculto")
            }, 500);
        }
        else if (id === "sydney" && !document.body.classList.contains("modoescuro")) {
            simbolo.src = "img/devpreto.png"
            h1.innerHTML = "Desenvolvedor Web"
            design.classList.add("oculto")
            setTimeout(() => {
                dev.classList.remove("oculto")
            }, 500);
        }
    }
})