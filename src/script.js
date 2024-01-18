
function calcular(){
    let txtAltura = document.getElementById("altura")
    let txtPeso = document.getElementById("peso")
    let resultado = document.getElementById('resultado')
    let areaTxt = document.getElementById('igual')

    let altura = parseFloat(txtAltura.value)
    let peso = parseFloat(txtPeso.value)


    imc = peso/(altura*altura)

    if(isNaN(imc)){
        alert("Por favor, informe um peso e uma altura para começar")
    }else if(imc <18.5 ){
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} voce está abaixo do peso`
        areaTxt.style.backgroundColor = 'crimson'
    } else if(imc >= 18.5 &&imc <25 ){
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} você está no peso ideal`
        areaTxt.style.backgroundColor ='forestgreen'
    }
    else if (imc >= 25 && imc <29.9){
        resultado.innerHTML= `Seu IMC é de ${imc.toFixed(2)} você está levemente acima do peso`
        areaTxt.style.backgroundColor='gold'
    }else if(imc >= 30 && imc < 34.9){
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} voce está obeso`
        areaTxt.style.backgroundColor = 'crimson'
    } else if (imc >= 35 && imc <39.9){
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} você está com obesidade severa`
        areaTxt.style.backgroundColor='crimson'
    }else{
        resultado.inert =  resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} você está com obesidade morbida`
        areaTxt.style.backgroundColor='red'
    }
}
