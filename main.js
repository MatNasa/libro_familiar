           
// crea un arreglo que se llame images y guarda las imagenes 
images=[ "lalitamemoji.png", "abuelomemoji.png", "mamimemoji.png", "papimemoji.png", "mateomemoji.png", "renatmemoji.png" ];
 // crea un arreglo que se llame names y guarda los nombres           
 names=[ "Barbara Montes (Lalita, Abuela)", "Luis Angel Ramirez (Abuelo)", "Karla Soto (Mamá)", "Gerardo Ramírez (Papá)", "Mateo Ramirez (YO)", "Renata Ramirez (Hermana)"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 5;
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").innerHTML = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}


