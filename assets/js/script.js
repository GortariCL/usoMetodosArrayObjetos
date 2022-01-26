//Inicio Declaración Arrays
let radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15234241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
]

let traumatologia = [
    { hora: '08:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADAZ', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
]

let dental = [
    { hora: '08:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ANGEL MUÑOZ', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
]
//Fin Declaración Arrays

//Inicio Función agregar nuevas horas al array traumatología
let agregaHoras = () => {
    traumatologia.push(
        { hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE' },
        { hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA' },
        { hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE' },
        { hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE' },
        { hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA' },
    );
    //Ordenar horas en el arreglo
    traumatologia.sort(function (a, b) {
        if (a.hora > b.hora) {
            return 1;
        } else if (a.hora < b.hora) {
            return -1;
        } else {
            return 0;
        }
    });
};
agregaHoras();
//Fin Función agregar nuevas horas al array traumatología


//Inicio Elimina primer objeto del array
const borrarPrimero = () => {
    radiologia.shift();
}
borrarPrimero();
//Fin Elimina primer objeto del array

//Inicio Elimina último objeto del array
const borrarUltimo = () => {
    radiologia.pop();
}
borrarUltimo();
//Fin Elimina último objeto del array

//Inicio Tabla Radiología
var filaRadiologia = "<tr><th>#</th><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Prevision</th></tr>";

for (var i = 0; i < radiologia.length; i++) {
    filaRadiologia +=
        `<tr>
        <td>${i + 1}</td>
        <td>${radiologia[i].hora}</td>
        <td>${radiologia[i].especialista}</td>
        <td>${radiologia[i].paciente}</td>
        <td>${radiologia[i].rut}</td>
        <td>${radiologia[i].prevision}</td>
        </tr>`;
}
document.getElementById("tableBodyRd").innerHTML = filaRadiologia;
document.getElementById("atencionesRd").innerHTML = `Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}</p>`;
//Fin Tabla Radiología

//Inicio Tabla Traumatología
var filaTraumatologia = "<tr><th>#</th><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Prevision</th></tr>";

for (var i = 0; i < traumatologia.length; i++) {
    filaTraumatologia +=
        `<tr>
        <td>${i + 1}</td>
        <td>${traumatologia[i].hora}</td>
        <td>${traumatologia[i].especialista}</td>
        <td>${traumatologia[i].paciente}</td>
        <td>${traumatologia[i].rut}</td>
        <td>${traumatologia[i].prevision}</td>
        </tr>`;
}
document.getElementById("tableBodyTr").innerHTML = filaTraumatologia;
document.getElementById("atencionesTr").innerHTML = `Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}</p>`;
//Fin Tabla Traumatología

//Inicio Tabla Dental
var filaDental = "<tr><th>#</th><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Prevision</th></tr>";

for (var i = 0; i < dental.length; i++) {
    filaDental +=
        `<tr>
        <td>${i + 1}</td>
        <td>${dental[i].hora}</td>
        <td>${dental[i].especialista}</td>
        <td>${dental[i].paciente}</td>
        <td>${dental[i].rut}</td>
        <td>${dental[i].prevision}</td>
        </tr>`;
}
document.getElementById("tableBodyDt").innerHTML = filaDental;
document.getElementById("atencionesDt").innerHTML = `Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}</p>`;
//Fin Tabla Dental

//Inicio Lista de pacientes atendidos en el centro médico
var filaPacientes = "";

var listaPacientes = radiologia.concat(traumatologia, dental);
for (var i = 0; i < listaPacientes.length; i++) {
    filaPacientes +=
        `<ul>
        <li class='list-unstyled'>${listaPacientes[i].paciente}</li>
        </ul>`;
}
document.getElementById("paName").innerHTML = filaPacientes;
//Fin Lista de pacientes atendidos en el centro médico

//Inicio Lista de Pacientes con isapre Dental
let newDentalArray = dental.filter(pre => {
    return pre.prevision === 'ISAPRE';
});
var filaIsapre = "";

for (var i = 0; i < newDentalArray.length; i++) {
    filaIsapre +=
        `<ul>
        <li class='list-unstyled'>${newDentalArray[i].paciente} - ${newDentalArray[i].prevision}</li>
        </ul>`;
}
document.getElementById("isaprePa").innerHTML = filaIsapre;
//Fin Lista de Pacientes con isapre Dental

//Inicio Lista de Pacientes con fonasa traumatología
let newTraumaArray = traumatologia.filter(pre => {
    return pre.prevision === 'FONASA';
});
var filaFonasa = "";

for (var i = 0; i < newTraumaArray.length; i++) {
    filaFonasa +=
        `<ul>
        <li class='list-unstyled'>${newTraumaArray[i].paciente} - ${newTraumaArray[i].prevision}</li>
        </ul>`;
}
document.getElementById("fonasaPa").innerHTML = filaFonasa;
//Fin Lista de Pacientes con fonasa traumatología