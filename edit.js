function add(first, second){
    return first+second;
} 
function sub(first, second){
    return first-second;
} 
function mul(first, second){
    return first*second;
} 
function div(first, second){
    return first/second;
} 
function is_even(number){
    if (number%2==0){
        return true;
    }
    else{
        return false;
    }
}
let ativado = false;
function altera(){
    document.body.classList.toggle('blackmode');
    let botao = document.querySelector("#modo");
   
    if(!ativado){
        botao.innerText = "Ativar modo claro";
        ativado = true;
    }
    else{
        botao.innerText = "Ativar modo escuro";
        ativado = false;
    }
}
