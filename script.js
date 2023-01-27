// h1 { color: red } .parrafito { ... } #pid { ... }
const h1=document.querySelector('h1')
const input1 = document.getElementById('calculo1')
const input2 = document.getElementById('calculo2')
const button = document.getElementById('btnCalcular')
const p = document.getElementById('result')
const form = document.getElementById('formulario')
console.log({h1,input1,input2,button});



form.addEventListener("submit",sumar)


function sumar(e) {
    let res =parseInt(input1.value) + parseInt(input2.value)
    console.log(res);
    console.log(typeof(res))
    p.innerText= "Result : " + res
    console.log({e});
    e.preventDefault()
} 