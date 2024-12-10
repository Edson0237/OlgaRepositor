function bt1() {
    var ecran = document.getElementById("message");
    var resultat = 1;
    ecran.innerHTML += resultat;
}
function bt2() {
    var ecran = document.getElementById("message");
    var resultat = 2;
    ecran.innerHTML += resultat;
}
function bt3() {
    var ecran = document.getElementById("message");
    var resultat = 3;
    ecran.innerHTML += resultat;
}
function bt4() {
    var ecran = document.getElementById("message");
    var resultat = 4;
    ecran.innerHTML += resultat;
}
function bt5() {
    var ecran = document.getElementById("message");
    var resultat = 5;
    ecran.innerHTML += resultat;
}
function bt6() {
    var ecran = document.getElementById("message");
    var resultat = 6;
    ecran.innerHTML += resultat;
}
function bt7() {
    var ecran = document.getElementById("message");
    var resultat = 7;
    ecran.innerHTML += resultat;
}
function bt8() {
    var ecran = document.getElementById("message");
    var resultat = 8;
    ecran.innerHTML += resultat;
}
function bt9() {
    var ecran = document.getElementById("message");
    var resultat = 9;
    ecran.innerHTML += resultat;
}
function btplus() {
    var ecran = document.getElementById("message");
    var resultat = "+";
    ecran.innerHTML += resultat;
}
function btmultiplication() {
    var ecran = document.getElementById("message");
    var resultat = "*";
    ecran.innerHTML += resultat;
}
function btmoins() {
    var ecran = document.getElementById("message");
    var resultat = "-";
    ecran.innerHTML += resultat;
}
function btdivision() {
    var ecran = document.getElementById("message");
    var resultat = "/";
    ecran.innerHTML += resultat;
}
function bt0() {
    var ecran = document.getElementById("message");
    var resultat = 0;
    ecran.innerHTML += resultat;
}
function bt00() {
    var ecran = document.getElementById("message");
    var resultat = "00";
    ecran.innerHTML += resultat;
}
function btpoint() {
    var ecran = document.getElementById("message");
    var resultat = ".";
    ecran.innerHTML += resultat;
}
function btsuppression() {
    var ecran = document.getElementById("message");
    var resultat = " ";
    ecran.innerHTML = resultat;
}
function btegal() {
    var _a;
    var ecran = (_a = document.getElementById("message")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var resultat = eval(ecran);
    var message = document.getElementById("message");
    message.innerHTML = resultat;
}
function btracine() {
    var _a;
    var ecran = (_a = document.getElementById("message")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var resultat = Math.sqrt(eval(ecran));
    if (!resultat) {
        alert("Veuillez entrer un nombre avant de trouver la racinne");
    }
    else {
        var mess = document.getElementById("message");
        mess.innerHTML = resultat;
    }
}
function btfactoriel() {
    var _a;
    var ecran = (_a = document.getElementById("message")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var transition = document.getElementById("message");
    var resultat = 1;
    if (!ecran) {
        alert("Veuillez entrer un nombre avant de trouver la racinne");
    }
    else {
        if (ecran < 0) {
            alert("Veuillez entrer un nombre positif");
        }
        else {
            if (ecran == 0 || ecran == 1) {
                resultat = 1;
                transition.innerHTML = resultat;
            }
            else {
                for (var i = 1; i <= ecran; i++) {
                    resultat *= i;
                }
                transition.innerHTML = resultat;
            }
        }
    }
}
function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
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
    var time = "".concat(h, ":").concat(m, ":").concat(s, " ").concat(session);
    var clockDisplay = document.getElementById("MyClockDisplay");
    if (clockDisplay) {
        clockDisplay.innerText = time;
    }
    setTimeout(showTime, 1000);
}
showTime();
function btpuissance() {
    var ecran = document.getElementById("message");
    var resultat = "**";
    ecran.innerHTML += resultat;
}
function btmodulo() {
    var _a, _b;
    var ecran = (_a = document.getElementById("message")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var resultat = (_b = document.getElementById("buttonmodulo")) === null || _b === void 0 ? void 0 : _b.innerHTML;
    var mess = document.getElementById("message");
    mess.innerHTML += resultat;
}
function btexpo() {
    var _a;
    var ecran = (_a = document.getElementById("message")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var expo = document.getElementById("message");
    var resultat = 0;
    if (!ecran) {
        alert("Veuillez entrer un nombre ");
    }
    else {
        ;
        resultat = Math.exp(ecran);
        expo.innerHTML = resultat;
    }
}
function btcos() {
    var _a;
    var ecran = (_a = document.getElementById("message")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var angleEnDegres = document.getElementById("message");
    var angle = 0;
    var resultat = 0;
    if (!ecran) {
        alert("Veuillez entrer un nombre ");
    }
    else {
        angle = ecran * (Math.PI / 180);
        resultat = Math.cos(angle);
        angleEnDegres.innerHTML = resultat;
    }
}
function btsin() {
    var _a;
    var ecran = (_a = document.getElementById("message")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var angleEnDegres = document.getElementById("message");
    var angle = 0;
    var resultat = 0;
    if (!ecran) {
        alert("Veuillez entrer un nombre ");
    }
    else {
        angle = ecran * (Math.PI / 180);
        resultat = Math.sin(angle);
        angleEnDegres.innerHTML = resultat;
    }
}
function bttag() {
    var _a;
    var ecran = (_a = document.getElementById("message")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var angleEnDegres = document.getElementById("message");
    var angle = 0;
    var resultat = 0;
    if (!ecran) {
        alert("Veuillez entrer un nombre ");
    }
    else {
        angle = ecran * (Math.PI / 180);
        resultat = Math.tan(angle);
        angleEnDegres.innerHTML = resultat;
    }
}
function btlog() {
    var _a;
    var ecran = (_a = document.getElementById("message")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var loga = document.getElementById("message");
    var resultat = 0;
    if (!ecran) {
        alert("Veuillez entrer un nombre ");
    }
    else {
        ;
        resultat = Math.log(ecran);
        loga.innerHTML = resultat;
    }
}
function btbinaire() {
    var _a;
    var ecrant = Number((_a = document.getElementById("message")) === null || _a === void 0 ? void 0 : _a.innerHTML);
    if (!ecrant) {
        alert("Veillez saisir un chifre avant d'appliquer la conversion en binaire");
    }
    else {
        var result = ecrant.toString(2);
        var Mms = document.getElementById("message");
        Mms.innerHTML = result;
    }
}
function btdecimale() {
    var _a;
    var ecrant = (_a = document.getElementById("message")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    if (!ecrant) {
        alert("Veillez saisir un chifre avant d'appliquer la conversion en décimal");
    }
    else {
        if (ecrant) {
            var result = parseInt(ecrant, 16);
            var Mms = document.getElementById("message");
            Mms.innerHTML = result;
        }
        else {
            var result = parseInt(ecrant, 2);
            var Mms = document.getElementById("message");
            Mms.innerHTML = result;
        }
    }
}
function bthexa() {
    var _a;
    var ecrant = Number((_a = document.getElementById("message")) === null || _a === void 0 ? void 0 : _a.innerHTML);
    if (!ecrant) {
        alert("Veillez saisir un chifre avant d'appliquer la conversion en hexadecimal");
    }
    else {
        var result = ecrant.toString(16).toUpperCase();
        var Mms = document.getElementById("message");
        Mms.innerHTML = result;
    }
}
var btn = document.getElementById("olga");
var affichable = document.getElementById("lucio");
var afficher = false;
btn.addEventListener('click', function () {
    if (!afficher) {
        affichable.style.display = 'block';
        btn.innerHTML = 'NORMAL';
        afficher = true;
    }
    else {
        affichable.style.display = 'none';
        btn.innerHTML = 'SCIENTIFIQUE';
        afficher = false;
    }
});
