function potencia (base, expoente)
{
    let modulo = Math.abs(expoente)
    let x = 0
    let resultado = 1
    while ( x < modulo )
    {
        resultado = (resultado) * (base)
        x++
    }
   
    if (expoente === 0)
    {
        return 1
    }
    else if (expoente > 0)
    {
        return resultado
    }
    else if (expoente < 0)
    {
        return 1 / resultado
    }
}

const x = parseInt(prompt("Digite a base: "))
const y = parseInt(prompt("Digite o expoente: "))
const resultado = potencia(x, y)

alert("("+ x + ") elevado a (" + y + ") é igual a " + resultado)
