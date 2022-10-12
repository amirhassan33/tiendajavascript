function sumar() {
    let resultado = num1 + num2;
    return resultado;
}

function restar() {
    let resultado = num1 - num2;
    return resultado;
}

function multiplicar() {
    let resultado = num1 * num2;
    return resultado;
}

function dividir() {
    let resultado = num1 / num2;
    return resultado;
}

alert("Bienvenido a la calculadora basica");
alert("Se le pedira que por favor ingrese su clave numerica de cuatro dijitos para poder utilizarla");
alert("Ojo que son 3 intentos");

for (let i = 3; i > 0; i--) {
    let clave = parseInt(prompt("Ingresa tu clave de cuatro dijitos"));

    if (clave == 3965) {
        alert("Ingresaste bien al sistema");
        let opcion = prompt("Elegi que tipo de calculo queres hacer: \nIngresa + para sumar \nIngresa - para restar \nIngresa * para multiplicar \nIngresa / para dividir \nIngresa x para salir");

        while (opcion.toUpperCase() != "X") {

            switch (opcion) {

                case "+":
                    alert("Elejiste sumar");
                    num1 = parseFloat(prompt("Ingresa el primer numero a sumar"));
                    num2 = parseFloat(prompt("Ingresa el segundo numero a sumar"));

                    if (isNaN(num1) || isNaN(num2)) {
                        alert("Uno de los dos datos ingresados no es un numero, fijate bien viejo");
                    } else {
                        alert("El resultado de la suma es " + sumar());
                    }
                    break;

                case "-":
                    alert("Elejiste restar");
                    num1 = parseFloat(prompt("Ingresa el primer numero a restar"));
                    num2 = parseFloat(prompt("Ingresa el segundo numero a restar"));

                    if (isNaN(num1) || isNaN(num2)) {
                        alert("Uno de los dos datos ingresados no es un numero, fijate bien viejo");
                    } else {
                        alert("El resultado de la suma es " + restar());
                    }
                    break;

                case "*":
                    alert("Elejiste multiplicar");
                    num1 = parseFloat(prompt("Ingresa el primer numero a multiplicar"));
                    num2 = parseFloat(prompt("Ingresa el segundo numero a multiplicar"));

                    if (isNaN(num1) || isNaN(num2)) {
                        alert("Uno de los dos datos ingresados no es un numero, fijate bien viejo");
                    } else {
                        alert("El resultado de la suma es " + multiplicar());
                    }
                    break;

                case "/":
                    alert("Elejiste dividir");
                    num1 = parseFloat(prompt("Ingresa el primer numero a dividir"));
                    num2 = parseFloat(prompt("Ingresa el segundo numero a dividir"));

                    if (num2 != 0) {
                        if (isNaN(num1) || isNaN(num2)) {
                            alert("Uno de los dos datos ingresados no es un numero, fijate bien viejo");
                        } else {
                            alert("El resultado de la suma es " + dividir());
                        }
                    } else {
                        alert("Me dijo la bruja que no se puede dividir por cero");
                    }
                    break;

                default:
                    alert("Elejiste una opcion que esta calculadora no tiene");
                    break;
            }
            opcion = prompt("Elegi que tipo de calculo queres hacer: \nIngresa + para sumar \nIngresa - para restar \nIngresa * para multiplicar \nIngresa / para dividir \nIngresa x para salir");
        }
        break;
    } else if (clave != 3965 && i == 3) {
        alert("Contraseña incorreta. Te quedan 2 intentos");
    } else if (clave != 3965 && i == 2) {
        alert("Contraseña incorreta. Te queda 1 intento");
    } else if (clave != 3965 && i == 1) {
        alert("Contraseña incorreta. Me dijo la bruja que estas afuera viejo");
    }
}