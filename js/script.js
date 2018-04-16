var i = 0,
    ri = 0,
    m = "";
var ponderado = 0;


function agregar() {
    var tb = document.getElementById("data");
    var nombre = document.getElementById("nombre").value;
    var Curso = document.getElementById("Cursos").value;
    var Nota1 = document.getElementById("nota1").value;
    var Nota2 = document.getElementById("nota2").value;
    var Nota3 = document.getElementById("nota3").value;
    if (nombre === "" || Cursos === "" || Nota1 === NaN || Nota2 === NaN || Nota3 === NaN) {
        mensaje("Falta agregar datos");
    } else {
        i++;
        document.getElementById("nombre").disabled = true;
        var promedio = promediar(Nota1, Nota2, Nota3);

        var fila = "<tr><td>" + Curso + "</td><td>" + Nota1 + "</td><td>" + Nota2 + "</td><td>" + Nota3 + "</td><td>" + promedio.toFixed(1) + "</td><td><a href='#' onclick='editar(this)'><img src='iconos/e.png'></td><td><a href='#' onclick='eliminar(this)'><img src='iconos/d.png'></td></tr>";

        var fil = document.createElement("tr");

        fil.innerHTML = fila;
        tb.appendChild(fil);
        document.getElementById("name").innerText = "Alumno: " + nombre;
        ponderado = ponderado + Promedio;

        ponderar(ponderado);

        limpiar();
        mensaje("Registro guardado correctamente");
    }
}

function promediar(n1, n2, n3) {
    var prom = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;
    return prom;
}

function eliminar(p) {

    var opcion = confirm("¿Desea Eliminar?");
    if (opcion == true) {
        var y = p.parentNode.parentNode.rowIndex;
        for (var j = y + 1; j < document.getElementById("data").rows.length; j++) {
            data.rows[j].cells[0].innerText = j - 1;
        }
        document.getElementById("data").deleteRow(y);
        mensaje("Registro Eliminado correctamente");
        i--;
    } else {
        mensaje("Registro no se eliminó");
    }
}

function editar(p) {
    ri = p.parentNode.parentNode.rowIndex;
    document.getElementById("Cursos").value = document.getElementById("data").rows[ri].cells[0].innerText;
    document.getElementById("data").rows[ri].cells[0].innerText = "";
    document.getElementById("nota1").value = document.getElementById("data").rows[ri].cells[1].innerText;
    document.getElementById("data").rows[ri].cells[1].innerText = "";
    document.getElementById("nota2").value = document.getElementById("data").rows[ri].cells[2].innerText;
    document.getElementById("data").rows[ri].cells[2].innerText = "";
    document.getElementById("nota3").value = document.getElementById("data").rows[ri].cells[3].innerText;
    document.getElementById("data").rows[ri].cells[3].innerText = "";
    document.getElementById("data").rows[ri].cells[4].innerText = "";
}

function modificar() {
    var opcion = confirm("¿Desea Modificar?");
    if (opcion == true) {
        data.rows[ri].cells[0].innerHTML = document.getElementById("Cursos").value;
        data.rows[ri].cells[1].innerHTML = document.getElementById("nota1").value;
        data.rows[ri].cells[2].innerHTML = document.getElementById("nota2").value;
        data.rows[ri].cells[3].innerHTML = document.getElementById("nota3").value;
        data.rows[ri].cells[4].innerHTML = promediar(document.getElementById("nota1").value, document.getElementById("nota2").value, document.getElementById("nota3").value)
        mensaje("Registro Modificado Correctamente");
    } else {
        mensaje("Registro no se Modificó");
    }
    limpiar();
}

function limpiar() {
    document.getElementById("Cursos").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
}

function mensaje(x) {
    alert(x);
}

function ponderar(p) {
    document.getElementById("ponderado").innerText = 'Ponderado: ' + (p / document.getElementById("data").rows.length);
}
