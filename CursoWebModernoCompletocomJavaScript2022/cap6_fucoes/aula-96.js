function Pessoa(){
    this.idade = 0

    setInterval( () => {
        this.idade++
        console.log(this.idade)
    } , 10)
}

// new Pessoa(1)
/** Loop Infinito */
    setInterval( () => { 
        var idade = 0
        idade++
        console.log(idade)
    } , 10)
// Fim do loop inito