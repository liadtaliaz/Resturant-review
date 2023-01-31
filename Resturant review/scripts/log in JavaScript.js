var nameFlag = false, pwdFlag = false;
function checkName() {
    var name = document.getElementById("userName").value;
    var nameDiv = document.getElementById("userNameDiv");
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
    nameFlag = true;
    nameDiv.innerHTML = "";
}


function checkPassword() {
    var password1 = document.getElementById("password").value;
    var password1Div = document.getElementById("PasswordDiv");

    if (password1.length < 6) {
        password1Div.innerHTML = "password can't be less than 6 letters";
        password1Div.style.fontSize = "medium";
        password1Div.style.color = "red";
        return;
    }
   
    pwdFlag = true;
    password1Div.innerHTML = "";
}

function checkLogin() {
    nameFlag();
    pwdFlag();

    if (nameFlag && pwdFlag) {
        return true;

    }
    return false;
}


