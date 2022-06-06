let iconos = [];
let selecciones = [];

generarTablero();

function cargarIconos(){
    iconos = [
        '<i class="fa-solid fa-star"></i>',
        '<i class="fa-solid fa-dog"></i>',
        '<i class="fa-solid fa-cat"></i>',
        '<i class="fa-solid fa-dove"></i>',
        '<i class="fa-solid fa-fish"></i>',
        '<i class="fa-solid fa-horse"></i>',
        '<i class="fa-solid fa-apple-whole"></i>',
        '<i class="fa-solid fa-cow"></i>',
        '<i class="fa-solid fa-moon"></i>',
        '<i class="fa-solid fa-sun"></i>',
        '<i class="fa-solid fa-cloud"></i>',
        '<i class="fa-solid fa-child-reaching"></i>',
    ]
}

function generarTablero(){
    cargarIconos();
    selecciones = [];

    const tablero = document.getElementById('tablero');
    let tarjetas = [];

    for(let i = 0; i < 24; i++){
        tarjetas.push(`
            <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                <div class="tarjeta" id="tarjeta${i}">
                    <div class="cara trasera" id="trasera${i}">
                        ${iconos[0]}
                    </div>
                    <div class="cara delantera">
                        <i class="fa-regular fa-circle-question"></i>
                    </div>
                </div>
            </div>
        `);
        if(i%2 == 1){
            iconos.splice(0, 1);
        }
    }
    tarjetas.sort(() => Math.random() - 0.5);
    tablero.innerHTML = tarjetas.join(' ');
}

function seleccionarTarjeta(i){
    let tarjeta = document.getElementById('tarjeta' + i);
    if(tarjeta.style.transform != 'rotateY(180deg)'){
        tarjeta.style.transform = 'rotateY(180deg)';
        selecciones.push(i);
    }
    if(selecciones.length == 2){
        deseleccionar(selecciones);
        selecciones = [];
    }
}

function deseleccionar(selecciones){
    setTimeout(() => {
        let trasera1 = document.getElementById('trasera' + selecciones[0]);
        let trasera2 = document.getElementById('trasera' + selecciones[1]);

        if(trasera1.innerHTML != trasera2.innerHTML){
            let tarjeta1 = document.getElementById('tarjeta' + selecciones[0]);
            let tarjeta2 = document.getElementById('tarjeta' + selecciones[1]);

            tarjeta1.style.transform = 'rotateY(0deg)';
            tarjeta2.style.transform = 'rotateY(0deg)';
        }else{
            trasera1.style.backgroundColor = 'lightgreen';
            trasera2.style.backgroundColor = 'lightgreen';
        }
    }, 1000);
}