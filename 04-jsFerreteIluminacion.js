/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    let vCantidad = parseInt(document.getElementById("txtIdCantidad").value);
    let vModelo = document.getElementById("Marca").value;
    const Precio = 35;
    let Parcial;
    let vDescuento;
    let PrecioFinal;
    let IIBB;

    Parcial = vCantidad * Precio;

    if (vCantidad >= 6) {
        Descuento = (Parcial * 50) / 100;
        PrecioFinal = Parcial - Descuento;
    }
    //. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" 
    //se hace un descuento del 40 % 
    //y si es de otra marca el descuento es del 30%.
    else if (vCantidad == 5) {
        if (vModelo == "ArgentinaLuz") {
            Descuento = (Parcial * 40) / 100;
            PrecioFinal = Parcial - Descuento;
        }
        else {
            Descuento = (Parcial * 30) / 100;
            PrecioFinal = Parcial - Descuento;
        }
    }
    //. Si compra 4 lamparitas bajo consumo marca 
    //"ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y
    // si es de otra marca el descuento es del 20%.
    else if (vCantidad == 4) {
        if (vModelo == "ArgentinaLuz" || vModelo == "FelipeLamparas") {
            Descuento = (Parcial * 25) / 100;
            PrecioFinal = Parcial - Descuento;
        }
        else {
            Descuento = (Parcial * 20) / 100;
            PrecioFinal = Parcial - Descuento;
        }

    }
    //Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%,
    // si es “FelipeLamparas” se hace un descuento del 10 %
    // y si es de otra marca un 5%.
    else if (vCantidad == 3) {
        if (vModelo == "ArgentinaLuz") {
            Descuento = (Parcial * 15) / 100;
            PrecioFinal = Parcial - Descuento;
        }
        else if (vModelo == "FelipeLamparas") {
            Descuento = (Parcial * 10) / 100;
            PrecioFinal = Parcial - Descuento;
        }
        else {
            Descuento = (Parcial * 5) / 100;
            PrecioFinal = Parcial - Descuento;
        }

    }
    if (vCantidad == 2) {
        PrecioFinal = Parcial;
    }
    // Si el importe final con descuento suma más de $120 
    //se debe sumar un 10% de ingresos brutos en informar del impuesto 
    //con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.
    if (PrecioFinal > 120) {
        IIBB = PrecioFinal + ((PrecioFinal * 0.10) / 100);

        document.getElementById("txtIdprecioDescuento").value = `Usted pago $${IIBB}`;
    }
    else {
        document.getElementById("txtIdprecioDescuento").value = `Usted pago $${PrecioFinal}`;
    }

}







