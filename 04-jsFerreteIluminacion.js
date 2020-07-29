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
    let vLampara;
    let Suma;
    let vMarca;
    let vParcial;
    let vDescuento;
    
    let vFinal = parseInt;
    let vIIBB;

    
    vLampara = parseInt(document.getElementById("txtIdCantidad").value);
    vMarca = document.getElementById("Marca").value;
    Suma = vLampara * 35;


    if (vLampara >= 6) {
        vParcial= (Suma *50)/100;
        vDescuento= Suma -vParcial;

        vFinal = vDescuento;

        document.getElementById("txtIdprecioDescuento").value = vFinal;
    }
    if (vLampara == 5 && vMarca === "ArgentinaLuz") {
        vParcial = (Suma *40)/100;
        vDescuento = Suma -vParcial  
        vFinal =  vDescuento
        document.getElementById("txtIdprecioDescuento").value = vFinal;
    }
    else if (vLampara == 5 && vMarcar !="ArgentinaLuz"){
        vParcial = (Suma * 30)/100
        vDescuento = Suma - vParcial;
        vFinal = vDescuento;
        document.getElementById("txtIdprecioDescuento").value = vFinal;
    }
    if (vLampara == 4){
        if(vMarca == "ArgentinaLuz" && vMarca == "FelipeLuz"){
            vParcial=(Suma*25)/100;
            vDescuento=Suma - vParcial;
            vFinal= vDescuento;
            document.getElementById("txtIdprecioDescuento").value = vFinal;
            if (vLampara == 3){
                if(vMarca == "ArgentinaLuz"){
                    vParcial=(Suma*15)/100;
                    vDescuento=Suma - vParcial;
                    vFinal= vDescuento;
                    document.getElementById("txtIdprecioDescuento").value = vFinal;
                }
                if (vMarca == "FelipeLuz"){
                    vParcial=(Suma*10)/100;
                    vDescuento=Suma - vParcial;
                    vFinal= vDescuento;
                    document.getElementById("txtIdprecioDescuento").value = vFinal;
                }
                else { vParcial=(Suma*5)/100;
                vDescuento=Suma - vParcial;
                vFinal= vDescuento;
                document.getElementById("txtIdprecioDescuento").value = vFinal;
                }
            }

            

        }
        
    }


    




}








