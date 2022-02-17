/*Esercizio 1*/

function CalcoloEta() {  
    var userinput = document.getElementById("DDN").value;  
    var dob = new Date(userinput);  
    if(userinput=='') {  
      document.getElementById("message").innerHTML = "**Inserisci l'anno!";    
      return false;   
    } else {  
      
    //calculate month difference from current date in time  
    var mese_diff = Date.now() - dob.getTime();
      
    //convert the calculated difference in date format  
    var data = new Date(mese_diff);   
      
    //extract year from date      
    var anno = data.getUTCFullYear();  
      
    //now calculate the age of the user  
    var eta = Math.abs(anno - 1970);  
      
    //display the calculated age  
    return document.getElementById("result").innerHTML =    
             "Hai: " + eta + " anni. ";  
    }  

}  

/*Esrcizio 2*/

function saluto(){
    return "Ciao a tutti";
}

saluto = () => {return "ciao a tutti"}


/*Esercizio 4*/

console.log("mario" === "mario");
console.log(2 !==2);
console.log(10<9);
console.log(5>=5);
console.log(3!=6);