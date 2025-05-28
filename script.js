class Sortear {
    constructor() {
        this.listaDeNomes = []
        this.form = document.getElementById("form")
        this.btnSortear = document.getElementById("sortear")
        this.adicionarNomes()
        this.sortearNomes()
    }

    adicionarNomes() {
        try {
            this.form.addEventListener("submit", (event) => {
                event.preventDefault()
                const nome = document.getElementById("nome").value

                if (!nome) {
                    CustomAlert.show("Valor inválido", "error")
                    return
                }

                if (this.listaDeNomes.includes(nome)) {
                    CustomAlert.show("Nome já adicionado!", "warning");
                    return;
                }

                this.listaDeNomes.push(nome)

                CustomAlert.show(`Nome adicionado a lista. ${nome}`, "success")

            })
        } catch (error) {
            console.log("Erro ao executar a adição de nomes", error)
        }
    }

    sortearNomes() {
        try {
            this.btnSortear.addEventListener("click", () => {
                if (this.listaDeNomes.length == 0) {
                    CustomAlert.show("Lista de nomes vazia!", "error")
                    return
                }

                const nomesEmbaralhados = this.listaDeNomes.sort(() => Math.random() - 0.5)
                const sorteado = nomesEmbaralhados[0]
                this.listaDeNomes.splice(0, 1)

                CustomAlert.show(`Nome sorteado: ${sorteado}`, "success")
            })
        } catch (error) {
            console.error("Erro ao sortear nome", error)
        }
    }
}

const sortear = new Sortear()