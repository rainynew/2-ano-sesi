function clickbotao(){
    console.log('aqui');
    let inputName= document.getElementById('inputNome')
    if ( inputName.value.length < 1 ){
        alert("coloca o nome caramba")
        return
    }
}   

function outraFuncao(){
    alert("AQUI")
}