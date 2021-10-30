function tabuada() {
    let numero = document.getElementById('txtn')
    let tabuada = document.getElementById('seltab')
    if (numero.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(numero.value)
        let contador = 1
        tabuada.innerHTML = ''
        while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${contador} = ${n*contador}`
            item.value = `tabuada${contador}`
            tabuada.appendChild(item)
            contador++
        }
    }
}

