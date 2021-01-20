var nome = document.getElementById('nome')
var email = document.getElementById('email')
var texto = document.getElementById('texto')

document.getElementById('enviar').onclick = function(){
       if(nome.value == ''){
          alert('Digite seu nome por favor')
       }else if(email.value == ''){
           alert('digite seu email por favor')
       }else if(texto.value == ''){
           alert('digite alguma mensagem')
       }
       else{}
}