var mailflag = false, nameflag = false, pwdflag = false, genderflag = false, prefflag = false, bdayflag = false,conpwdflag=false;
function checkName() {
    var name = document.getElementById("UserName").value;
    var nameDiv = document.getElementById("UserNameDiv");
    var counterspaces = 0;
    if (name.length < 3) {
        nameDiv.innerHTML = "name can't be less than 3 letters";
        nameDiv.style.fontSize = "medium";
        nameDiv.style.color = "red";
        return;
    }
    for (var i = 0; i < name.length; i++) {
        if ((name[i] >= 'A' && name[i] <= 'Z') && i != 0) {
            nameDiv.innerHTML = "capital letters only in the first letter";
            return;
        }

        if (!((name[i] >= 'a' && name[i] <= 'z') || name[i] == " " || (name[i] >= 'A' && name[i] <= 'Z'))) {
            nameDiv.innerHTML = "only letters and a space allowed";
            return;
        }
    }
    nameflag = true;
    nameDiv.innerHTML = "";
}

    function checkPassword() {
        var password1 = document.getElementById("Password").value;
        var password1Div = document.getElementById("PasswordDiv");
        
        if (password1.length < 6) {
            password1Div.innerHTML = "password can't be less than 6 letters";
            password1Div.style.fontSize = "medium";
            password1Div.style.color = "red";
            return;
        }
        
        pwdflag = true;
        password1Div.innerHTML = "";
}

function checkConfirmPassword() {
    var password1 = document.getElementById("Password").value;
    var password2 = document.getElementById("ConfirmPassword").value;
    var password2Div = document.getElementById("ConfirmPasswordDiv");

    password2Div.style.fontSize = "medium";
    password2Div.style.color = "red";

    if (password2.length == 0) {
        password2Div.innerHTML = "please confirm your password";
        password2Flag = false;
        return;
    }

    if (password2 != password1) {
        password2Div.innerHTML = "the passwords aren't identical";
        password2Flag = false;
        return;
    }
    conpwdflag = true;
    password2Div.innerHTML = "";
}

function checkMail() {
    var mail = document.getElementById("mail").value;
    var mailDiv = document.getElementById("mailDiv");
    mailDiv.style.fontSize = "medium";
    mailDiv.style.color = "red";


    var atSymbol = mail.indexOf("@");
    if (atSymbol < 1) {
        mailDiv.innerHTML = "invalid Email,@ must be included";
        mailFlag = false;
        return;
    }
    var dotSymbol = mail.indexOf(".");
    if (dotSymbol < 1) {
        mailDiv.innerHTML = "invalid Email,dot must be included";
        mailflag = false;
        return;
    }

    var dot = mail.indexOf(".");
    if (dot <= atSymbol + 2 && dot > 0) {
        mailDiv.innerHTML = "at least 2 letter between dot and @ is a must";
        mailFlag = false;
        return;
    }

  
    if (dot === mail.length - 1) {
        mailDiv.innerHTML = "invalid Email, can't end with a dot";
        mailFlag = false;
        return;
    }
    mailDiv.innerHTML = "";
    mailflag = true;
}


function checkRadio() {
    radioDiv.style.fontSize = "medium";
    radioDiv.style.color = "red";

    if (!document.getElementById("yes").checked && !document.getElementById("no").checked ) {
        radioFlag = false;
        radioDiv.innerHTML = "you must answer";
        return;
    }
    prefflag = true;
    radioDiv.innerHTML = "";
}

function checkBirthday() {
    var birthdayDiv = document.getElementById("birthdayDiv");
    var year = document.getElementById("birthday").value.split("-")[0];
    birthdayDiv.style.color = "red";
    birthdayDiv.style.fontSize = "medium";

    if (year == "") {
        birthdayDiv.innerHTML = "enter birthday";
        birthdayFlag = false;
        return;
    }

    if (year => 2015) {
        birthdayDiv.innerHTML = "you are too young";
        birthdayFlag = false;
        return;
    }

    birthdayDiv.innerHTML = "";
    bdayflag = true;
}

function checkSelect() {
    var selectDiv = document.getElementById("genderDiv");

    if (document.getElementById("gender").value == "") {
        selectDiv.innerHTML = "must choose on of the options";
        selectDiv.style.color = "red";
        selectDiv.style.fontSize = "medium";
        selectFlag = false;
        return;
    }
    selectDiv.innerHTML = "";
    genderlag = true;
}

function checkRegister() {

    nameflag();
    pwdflag();
    conpwdflag();
    mailflag();
    genderflag();
    bdayflag();
    prefflag();
   

    if (nameflag && pwdflag && conpwdflag && mailflag && genderflag && bdayflag && prefflag) {
        return true;
    }

    return false;
}

