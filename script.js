function Calcular(){
    var nota1 = Number(document.getElementById('nota1').value) 
    var nota2 = Number(document.getElementById('nota2').value)
    var media = (nota1 + nota2)/ 2
    var resultado = document.getElementById('res')

    if(media >=7 ){
        resultado.innerHTML = (`Parabéns , aprovado com média ${media}`)
    }else{
    resultado.innerHTML=(`Reprovado!!!`)

    }
}
