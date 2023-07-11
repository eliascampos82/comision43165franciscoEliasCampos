

alert("Bienvenido al Cajero");


let nombre =prompt("ingrese su Nombre")


alert("PASSWORD : 1234  RECORDALO BIEN !!!!")


let password = 1234;

while (true) {
   password = Number(prompt("Por favor "+ nombre.toUpperCase()+ " Ingresa tu Contraseña:"));
    if (password === 1234) {
      break;
    } else {
      alert("usuario o contraseña invalido.");
    }
}



alert("ingreso exitoso");
let menu_principal;
let plata_mia=50000;
let extraer_plata=0;




function menu(){
    let menu_principal= prompt("ingrese una operacion: \n 1: consultar saldo \n 2: retirar efectivo  \n 3: Depositar efectivo \n 4: salir");
    if (menu_principal == "1") {
        saldo();
        
    }else if(menu_principal == "2"){
        
        extraer();
        menu();
        
    }else if (menu_principal == "3"){
        depositarDinero()
        menu();
    }else{
        return(
            alert("bienvenido a mi bancoooooooooooooooo")
            );
        }
    };
    





function extraer() {
    
    extraer_plata= Number(prompt("ingrese un monto a extrer:"));
          while (true) {
              if(extraer_plata < plata_mia){  
                   plata_mia = plata_mia - extraer_plata 
                   alert("has retirado: $ " + extraer_plata + " pesos");
                   return(alert("tu monto actualizado es : $ " + plata_mia + " pesos"));
                }else if(extraer_plata === plata_mia){
                    alert("has retirado : $ " + extraer_plata + " pesos");
                    return(alert("tu monto actualizado es de 0 pesos"));
                }else{
                    alert("no tienes suficiente dinero");
                    extraer_plata = Number(prompt("ingrese un monto a extrer:"));
                };
    };
};
menu();




//let deposito;
function depositarDinero() {
    let deposito =Number(prompt("ingrese un monto a Depositar "))
    plata_mia = plata_mia + deposito;
    alert("Depositaste $ " + deposito + " pesos. Saldo actual: $ " + plata_mia + " pesos" );
};



function saldo(){
    alert("este es el monto por el momento00000 : $ " + plata_mia );
    menu();
};


