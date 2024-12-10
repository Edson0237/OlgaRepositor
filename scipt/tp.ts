function bt1():void{
  var ecran :any = document.getElementById("message");
  var resultat :any = 1;
  ecran.innerHTML += resultat;
}
 
function bt2():void{
  var ecran :any = document.getElementById("message");
  var resultat :any = 2;
  ecran.innerHTML += resultat;
}
 
function bt3():void{
  var ecran :any = document.getElementById("message");
  var resultat :any = 3;
  ecran.innerHTML += resultat;
}
 
function bt4():void{
  var ecran :any = document.getElementById("message");
  var resultat :any = 4;
  ecran.innerHTML += resultat;
}

 
function bt5():void{
  var ecran :any = document.getElementById("message");
  var resultat :any = 5;
  ecran.innerHTML += resultat;
}

 
function bt6():void{
  var ecran :any = document.getElementById("message");
  var resultat :any = 6;
  ecran.innerHTML += resultat;
}

 
function bt7():void{
  var ecran :any = document.getElementById("message");
  var resultat :any = 7;
  ecran.innerHTML += resultat;
}

 
function bt8():void{
  var ecran :any = document.getElementById("message");
  var resultat :any = 8;
  ecran.innerHTML += resultat;
}

 
function bt9():void{
  var ecran :any = document.getElementById("message");
  var resultat :any = 9;
  ecran.innerHTML += resultat;
}

 
function btplus():void{
  var ecran :any = document.getElementById("message");
  var resultat :any = "+";
  ecran.innerHTML += resultat;
}

 
function btmultiplication():void{
  var ecran :any = document.getElementById("message");
  var resultat :any = "*";
  ecran.innerHTML += resultat;
}

 
function btmoins():void{
  var ecran :any = document.getElementById("message");
  var resultat :any = "-";
  ecran.innerHTML += resultat;
}

 
function btdivision():void{
  var ecran :any = document.getElementById("message");
  var resultat :any = "/";
  ecran.innerHTML += resultat;
}

 
function bt0():void{
  var ecran :any = document.getElementById("message");
  var resultat :any = 0;
  ecran.innerHTML += resultat;
}

 
function bt00():void{
  var ecran :any = document.getElementById("message");
  var resultat :any = "00";
  ecran.innerHTML += resultat;
}

function btpoint():void{
  var ecran :any = document.getElementById("message");
  var resultat :any = ".";
  ecran.innerHTML += resultat;
}

 
function btsuppression():void{
  var ecran :any = document.getElementById("message");
  var resultat :any = " ";
  ecran.innerHTML = resultat;
}

 
function btegal():void{
  var ecran :any = document.getElementById("message")?.innerHTML;
  var resultat :any = eval(ecran);
  var message : any = document.getElementById("message");
  message.innerHTML = resultat;
}

 
function btracine():void{
  var ecran :any = document.getElementById("message")?.innerHTML;
  var resultat :any = Math.sqrt(eval(ecran));
  if (!resultat) {
    alert("Veuillez entrer un nombre avant de trouver la racinne");
    
  } else {
    var mess : any = document.getElementById("message");
    mess.innerHTML = resultat;
  }
}

 
function btfactoriel():void{
  var ecran :any = document.getElementById("message")?.innerHTML;
  var transition :any = document.getElementById("message");
  var resultat : any = 1;

  if (!ecran) {
    alert("Veuillez entrer un nombre avant de trouver la racinne");
    
  } else {
    if (ecran <0) {
      alert("Veuillez entrer un nombre positif");
      
    } else {
      if (ecran == 0 || ecran == 1) {
        resultat = 1;
        transition.innerHTML = resultat ;
      } else {
        for(let i = 1 ; i <= ecran ; i++){
          resultat *= i;
        }
        transition.innerHTML = resultat ;
      }
     
    }
  }
}

function showTime(): void {
    const date = new Date();
    let h: number | string = date.getHours();
    let m: number | string = date.getMinutes();
    let s: number | string = date.getSeconds();
    let session: string = "AM";

    if (h === 0) {
        h = 12;
    }

    if (h > 12) {
        h -= 12; 
        session = "PM";
    }

    
    h = (h < 10) ? "0" + h : h.toString();
    m = (m < 10) ? "0" + m : m.toString();
    s = (s < 10) ? "0" + s : s.toString();

    const time = `${h}:${m}:${s} ${session}`;
    const clockDisplay = document.getElementById("MyClockDisplay");
    
    if (clockDisplay) {
        clockDisplay.innerText = time;
    }

    setTimeout(showTime, 1000);
}

showTime();
 
function btpuissance():void{
  var ecran :any = document.getElementById("message");
  var resultat :any = "**";
  ecran.innerHTML += resultat;
}

 
function btmodulo():void{
  var ecran :any = document.getElementById("message")?.innerHTML;
  var resultat :any = document.getElementById("buttonmodulo")?.innerHTML;
  var mess  :any = document.getElementById("message");
  mess.innerHTML += resultat;
}

 
function btexpo():void{
   var ecran :any = document.getElementById("message")?.innerHTML;
  var expo :any = document.getElementById("message");
  var resultat : any = 0;
      if (!ecran) {
        alert("Veuillez entrer un nombre ");
      } else {;
        resultat = Math.exp(ecran); 
        expo.innerHTML= resultat;
      }
}

 
function btcos():void{
  var ecran :any = document.getElementById("message")?.innerHTML;
    var angleEnDegres :any = document.getElementById("message");
  var angle : any = 0 ;
  var resultat : any = 0;
        if (!ecran) {
          alert("Veuillez entrer un nombre ");
        } else {
          angle = ecran * (Math.PI / 180);
          resultat = Math.cos(angle); 
          angleEnDegres.innerHTML= resultat;
        }
}

 
function btsin():void{
  var ecran :any = document.getElementById("message")?.innerHTML;
    var angleEnDegres :any = document.getElementById("message");
  var angle : any = 0 ;
  var resultat : any = 0;
        if (!ecran) {
          alert("Veuillez entrer un nombre ");
        } else {
          angle = ecran * (Math.PI / 180);
          resultat = Math.sin(angle); 
          angleEnDegres.innerHTML= resultat;
        }
        
      
  }

 
function bttag():void{
  var ecran :any = document.getElementById("message")?.innerHTML;
  var angleEnDegres :any = document.getElementById("message");
  var angle : any = 0 ;
  var resultat : any = 0;
  if (!ecran) {
    alert("Veuillez entrer un nombre ");
  } else {
    angle = ecran * (Math.PI / 180);
    resultat = Math.tan(angle); 
    angleEnDegres.innerHTML= resultat;
  }
}

 
function btlog():void{
  var ecran :any = document.getElementById("message")?.innerHTML;
 var loga :any = document.getElementById("message");
 var resultat : any = 0;
     if (!ecran) {
       alert("Veuillez entrer un nombre ");
     } else {;
       resultat = Math.log(ecran); 
       loga.innerHTML= resultat;
     }
}

 
function btbinaire():any{
  var ecrant:any=Number(document.getElementById("message")?.innerHTML);
  if (!ecrant) {
          alert("Veillez saisir un chifre avant d'appliquer la conversion en binaire");
  } else {
          var result:any= ecrant.toString(2);
          var Mms:any=document.getElementById("message");
          Mms.innerHTML=result;
  }

}

 
function btdecimale():any{
  var ecrant:any=document.getElementById("message")?.innerHTML;
  if (!ecrant) {
          alert("Veillez saisir un chifre avant d'appliquer la conversion en décimal");
  } else {
          if (ecrant) {
                  var result:any= parseInt(ecrant,16);
                  var Mms:any=document.getElementById("message");
                  Mms.innerHTML=result;
          } else {
                  var result:any= parseInt(ecrant,2);
                  var Mms:any=document.getElementById("message");
                  Mms.innerHTML=result;
          }
          
  }

}

 
function bthexa():void { 
  var ecrant:any=Number(document.getElementById("message")?.innerHTML);
  if (!ecrant) {
          alert("Veillez saisir un chifre avant d'appliquer la conversion en hexadecimal");
  } else {
          var result:any= ecrant.toString(16).toUpperCase();
          var Mms:any=document.getElementById("message");
          Mms.innerHTML=result;
        }
}

var btn : any =  document.getElementById("olga");
var affichable :any = document.getElementById("lucio");
var afficher : any = false;
btn.addEventListener('click',function()
  {
    if (!afficher) {
      affichable.style.display ='block';
      btn.innerHTML= 'NORMAL';
      afficher = true;
    } else {
      affichable.style.display ='none';
      btn.innerHTML= 'SCIENTIFIQUE';
      afficher = false;
    }
  }
);