let imagenes = ['imgCarrousel/img1.jpg','imgCarrousel/img2.jpg','imgCarrousel/img3.jpg','imgCarrousel/img4.jpeg','imgCarrousel/img5.jpeg'],
cont = 0; 


function carrousel (inicio){
    inicio.addEventListener('click', e =>{
        let atras = inicio.querySelector('.atrasBotones'),
            adelante = inicio.querySelector('.adelanteBotones'),
            img = inicio.querySelector('.imgCarru'),
            tgt = e.target;


           if (tgt == atras) {
            if(cont > 0){
                img.src = imagenes[cont - 1]
                cont--;
            
           } else {
            img.src = imagenes[imagenes.length - 1]
            cont = imagenes.length - 1;
           } 
        }else if(tgt == adelante){
            if(cont < imagenes.length - 1){
                img.src = imagenes[cont + 1]
                cont++;
            
           } else {
            img.src = imagenes[0]
            cont = 0;
           } 
        }

    })
}

document.addEventListener("DOMContentLoaded",()=>{
    let inicio = document.querySelector('.inicio')
    carrousel(inicio)
})