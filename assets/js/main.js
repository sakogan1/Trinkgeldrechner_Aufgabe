// das Trinkgeld berechnen
// Je nach Zufriedenheit mit dem Service
// Schlechter Service: 2% Trinkgeld
// Mittlerer Service: 10% Trinkgeld
// Super Service: 20% Trinkgeld

// das Geld berechnen, das jeder in deiner Gruppe zahlen muss
// den Gesamtbetrag aus Rechnungsbetrag + Trinkgeld berechnen





function berechne(){
const sum = parseInt(document.getElementById("summe").value)
console.log(sum)
const pers = parseInt(document.getElementById("personen").value)
console.log(pers)
let select = document.getElementById("service").value
switch(select){
    case "1":{
        const first = ((sum/100) * 2)*pers
        const Gesamtsumme=sum+first
        const preisProPers = Gesamtsumme/pers
        console.log(preisProPers)
       
        document.getElementById("erg").innerHTML=`<p>Das Trinkgeld ist:${first}</p> <br>
          <p>Die Gesamtsumme beträgt:${Gesamtsumme}</p><br> 
          <p>Der Preis pro Person:${preisProPers}</p> `
    }break
    case "2":{
        const first = ((sum/100) * 10)*pers
        const Gesamtsumme=sum+first
        const preisProPers = Gesamtsumme/pers
        console.log(preisProPers)
       
        document.getElementById("erg").innerHTML=`<p>Das Trinkgeld ist:${first}</p> <br>
          <p>Die Gesamtsumme beträgt:${Gesamtsumme}</p><br> 
          <p>Der Preis pro Person:${preisProPers}</p> `
    }break
    case "3":{
        const first = ((sum/100) * 20)*pers
        const Gesamtsumme=sum+first
        const preisProPers = Gesamtsumme/pers
        console.log(preisProPers)
       
        document.getElementById("erg").innerHTML=`<p>Das Trinkgeld ist:${first}</p> <br>
          <p>Die Gesamtsumme beträgt:${Gesamtsumme}</p><br> 
          <p>Der Preis pro Person:${preisProPers}</p> `
    }break
}

}