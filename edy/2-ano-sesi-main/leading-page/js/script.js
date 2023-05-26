function mudarSection(){
    let secoes= document.getElementsByTagName('section')
    console.log(secoes);
    //for (let index=0;)
    for (let index = 0; index < secoes.length; index++) {
        const element = secoes[index];
        console.log(index);
        console.log(element);
        element.className=''
        if(Number(index+1)== secoes.length){
            secoes[index].remove()
        }
        
    }
}