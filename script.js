const ultima_opniao = document.querySelector("#ultima_opnião")
const button = document.querySelector("#button_opnião")
const input = document.querySelector("#opnião")

if (button) {
    button.addEventListener("click", () => {
        if (input.value.trim() === "") {
            alert("Por favor, insira uma opnião antes de enviar.")
            ultima_opniao.textContent = "sua opnião importa também!"
            return
        }
        ultima_opniao.textContent = `Sua opnião é: ${input.value}`
        input.value = ""
    })
}