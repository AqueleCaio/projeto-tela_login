const input_email = document.getElementById('iemail');
const input_senha = document.getElementById('isenha');

input_email.addEventListener('mouseout', function(e){
    input_email.placeholder = ` Email`
})

input_email.addEventListener('click', function(e){
    input_email.placeholder = ``
})

input_senha.addEventListener('mouseout', function(e){
    input_senha.placeholder = ` Senha (8-20)`
})

input_senha.addEventListener('click', function(e){
    input_senha.placeholder = ``
})