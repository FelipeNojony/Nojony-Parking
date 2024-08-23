
var entradas = []

class InfoCarro {
    marca;
    modelo;
    placa;
    dataEntrada;
    dataSaida;


    constructor(marca, modelo, placa, dataEntrada, dataSaida){
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.dataEntrada = dataEntrada;
        this.dataSaida = dataSaida;
    }
}



function dataAtual (){
    let data = new Date;
    let dataAtual = data.toLocaleString()

    return dataAtual;

}

function cadastrar(){
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let placa = document.getElementById("placa").value;
    let dataEntrada = dataAtual()
    let dataSaida = ""

    let entradaCarro = new InfoCarro(marca, modelo, placa, dataEntrada, dataSaida);

    entradas.push(entradaCarro)

    document.getElementById("marca").value = ""
    document.getElementById("modelo").value = ""
    document.getElementById("placa").value = ""

    listarCarros()
}

function listarCarros(){
    for(let indice = 0; indice < entradas.length; indice++){
        let html = `
            <div class="card">
                <div>${entradas[indice].marca}</div>
                <div>${entradas[indice].modelo}</div>
                <div>${entradas[indice].placa}</div>
                <div>${entradas[indice].dataEntrada}</div>
            </div>
        `

            document.getElementById("lista-carros").innerHTML += html

    }
}

