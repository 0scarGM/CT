let guitarra=document.getElementById("ins1")
let bajo=document.getElementById("ins2")
let acordeon=document.getElementById("ins3")
let bateria=document.getElementById("ins4")
let tololoche=document.getElementById("ins5")
let trombon=document.getElementById("ins6")
let guitarra2=document.getElementById("inst1")
let bajo2=document.getElementById("inst2")
let acordeon2=document.getElementById("inst3")
let bateria2=document.getElementById("inst4")
let tololoche2=document.getElementById("inst5")
let trombon2=document.getElementById("inst6")
let h41=document.getElementById("h41")
let h42=document.getElementById("h42")
let h43=document.getElementById("h43")
let h44=document.getElementById("h44")
let h45=document.getElementById("h45")
let h46=document.getElementById("h46")

let descripcion=document.getElementById("descripcion")
let funcion=document.getElementById("funcion")
let uso=document.getElementById("uso")
let imagen=document.getElementById("imagen")
let ins1=1,ins2=0,ins3=0,ins4=0,ins5=0,ins6=0
carga()
function carga(){
    if(ins1==1){
        guitarra.classList.add("bC")
        guitarra2.classList.add("bdC")
        h41.style.opacity="1"
        descripcion.innerHTML=`<h2>Descripción</h2>La guitarra acústica y eléctrica desempeñan roles importantes en el corrido tumbado. La guitarra acústica a menudo proporciona la base rítmica con acordes característicos, mientras que la guitarra eléctrica añade texturas más modernas y solos en algunos casos.`
        funcion.innerHTML=`<h2>Función</h2>La guitarra acústica establece el ritmo y el groove característico del corrido tumbado, mientras que la eléctrica añade elementos de distorsión y efectos para un sonido más contemporáneo.`
        uso.innerHTML=`<h2>Ejemplo de uso</h2>Artistas como Natanael Cano y Junior H utilizan guitarras acústicas y eléctricas para crear los paisajes sonoros característicos del género.`
        imagen.classList.add("guitarra")
    }
    else{
        guitarra.classList.remove("bC")
        guitarra2.classList.remove("bdC")
        h41.style.opacity="0"
        imagen.classList.remove("guitarra")
    }
    if(ins2==1){
        bajo.classList.add("bC")
        bajo2.classList.add("bdC")
        h42.style.opacity="1"
        descripcion.innerHTML=`<h2>Descripción</h2>El bajo eléctrico proporciona la fundamentación rítmica y melódica del corrido tumbado. Su sonido profundo y pulsante ayuda a mantener el groove y la cohesión en la música.`
        funcion.innerHTML=`<h2>Función</h2>El bajo eléctrico actúa como el puente entre la sección rítmica y melódica, proporcionando una base sólida para la estructura musical del corrido tumbado.`
        uso.innerHTML=`<h2>Ejemplo de uso</h2>Se pueden escuchar líneas de bajo distintivas en canciones de artistas como Ovi y Fuerza Regida, que contribuyen al carácter distintivo del género.`
        imagen.classList.add("bajo")
    }
    else{
        bajo.classList.remove("bC")
        bajo2.classList.remove("bdC")
        h42.style.opacity="0"
        imagen.classList.remove("bajo")
    }
    if(ins3==1){
        acordeon.classList.add("bC")
        acordeon2.classList.add("bdC")
        h43.style.opacity="1"
        descripcion.innerHTML=`<h2>Descripción</h2>El acordeón es un elemento icónico en muchos estilos musicales mexicanos, incluido el corrido tumbado. Aporta melodías distintivas y a menudo ornamentadas que complementan las voces y otros instrumentos.`
        funcion.innerHTML=`<h2>Función</h2>En el corrido tumbado, el acordeón añade una capa de tradición mexicana a la mezcla, mezclando melodías típicas con arreglos modernos que enriquecen la experiencia auditiva.`
        uso.innerHTML=`<h2>Ejemplo de uso</h2>Artistas como Lenin Ramírez y Grupo Codiciado utilizan el acordeón para darle un toque auténtico y distintivo a sus producciones.`
        imagen.classList.add("acordeon")
    }
    else{
        acordeon.classList.remove("bC")
        acordeon2.classList.remove("bdC")
        h43.style.opacity="0"
        imagen.classList.remove("acordeon")
    }
    if(ins4==1){
        bateria.classList.add("bC")
        bateria2.classList.add("bdC")
        h44.style.opacity="1"
        descripcion.innerHTML=`<h2>Descripción</h2>La batería proporciona el pulso y la dinámica rítmica en el corrido tumbado. Incluye tambores, platillos y otros elementos percusivos que establecen el tempo y el groove de la música.`
        funcion.innerHTML=`<h2>Función</h2>La batería en el corrido tumbado adopta elementos del trap y reggaetón, con patrones rítmicos complejos que añaden energía y movimiento a las canciones.`
        uso.innerHTML=`<h2>Ejemplo de uso</h2>Escucha la variedad de ritmos y estilos que los bateristas en el género como Alemán y Eslabon Armado emplean para mantener la intensidad y el carácter dinámico del corrido tumbado.`
        imagen.classList.add("bateria")
    }
    else{
        bateria.classList.remove("bC")
        bateria2.classList.remove("bdC")
        h44.style.opacity="0"
        imagen.classList.remove("bateria")
    }
    if(ins5==1){
        tololoche.classList.add("bC")
        tololoche2.classList.add("bdC")
        h45.style.opacity="1"
        descripcion.innerHTML=`<h2>Descripción</h2>El tololoche es un tipo de contrabajo tradicional mexicano, también conocido como "bajo sexto". Es un instrumento de cuerda frotada que se toca verticalmente, similar en apariencia al contrabajo occidental pero con un sonido distintivo y una construcción diferente. Tradicionalmente hecho de madera con cuerdas de tripa, hoy en día también se fabrican versiones con cuerdas de metal.`
        funcion.innerHTML=`<h2>Función</h2>En el corrido tumbado, el tololoche proporciona una línea de bajo profunda y resonante que complementa las guitarras y otros instrumentos. Su sonido grave y su capacidad para establecer el ritmo y la armonía lo convierten en un elemento clave para la estructura musical del género.`
        uso.innerHTML=`<h2>Ejemplo de uso</h2>Artistas como Natanael Cano y Junior H utilizan el tololoche para añadir una base sólida y auténtica a sus canciones de corrido tumbado. El instrumento no solo sostiene la melodía, sino que también contribuye a la identidad sonora distintiva del género.`
        imagen.classList.add("tololoche")
    }
    else{
        tololoche.classList.remove("bC")
        tololoche2.classList.remove("bdC")
        h45.style.opacity="0"
        imagen.classList.remove("tololoche")
    }
    if(ins6==1){
        trombon.classList.add("bC")
        trombon2.classList.add("bdC")
        h46.style.opacity="1"
        descripcion.innerHTML=`<h2>Descripción</h2>El trombón es un instrumento de viento-metal que se utiliza principalmente en géneros musicales como el jazz, la música clásica y algunas formas de música folclórica. Es conocido por su capacidad para producir un tono cálido y resonante, y su capacidad de deslizar entre notas.`
        funcion.innerHTML=`<h2>Función</h2>Aunque no es común en todos los arreglos de corrido tumbado, el trombón puede ser utilizado para añadir una capa adicional de melodía y armonía. En ciertos casos, se emplea para crear secciones instrumentales más complejas o para darle un toque distintivo a ciertas partes de una canción.`
        uso.innerHTML=`<h2>Ejemplo de uso</h2>Algunos productores y arreglistas de corrido tumbado podrían optar por incluir trombones en sus composiciones para diversificar el sonido y añadir una textura diferente al arreglo instrumental. Sin embargo, su presencia no es tan frecuente como la de otros instrumentos más tradicionalmente asociados con el género.`
        imagen.classList.add("trombon")
    }
    else{
        trombon.classList.remove("bC")
        trombon2.classList.remove("bdC")
        h46.style.opacity="0"
        imagen.classList.remove("trombon")
    }
}

function ceroAll(){
    ins1=0
    ins2=0
    ins3=0
    ins4=0
    ins5=0
    ins6=0
}
guitarra.addEventListener("click",()=>{
    ceroAll()
    ins1=1
    carga()
})
bajo.addEventListener("click",()=>{
    ceroAll()
    ins2=1
    carga()
})
acordeon.addEventListener("click",()=>{
    ceroAll()
    ins3=1
    carga()
})
bateria.addEventListener("click",()=>{
    ceroAll()
    ins4=1
    carga()
})
tololoche.addEventListener("click",()=>{
    ceroAll()
    ins5=1
    carga()
})
trombon.addEventListener("click",()=>{
    ceroAll()
    ins6=1
    carga()
})