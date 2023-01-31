function mudar_cor(){
    //const lista_cor=['Red','Green','Yellow','Blue','Orange'];
    const lista=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let cor_hexa='#';
    for (i=0;i<6;i++)
    {
        const indice_aleatorio= Math.floor(Math.random() * lista.length);
        const cor_aleatoria=lista[indice_aleatorio];
        cor_hexa=cor_hexa+cor_aleatoria
    };
    document.getElementById("body").style.backgroundColor=cor_hexa
    document.getElementById('cor').innerHTML=cor_hexa
    }
