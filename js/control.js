const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("button");

function HasAtSign(text) {
    return text.includes("@");
    //Usar en caso de que el includes no funcione
    /*
    if (text.indexOf("@") == -1)
        return false;
    
    return true;
    */
}

button.addEventListener("click", function(event) {
    if (username.value == "" || password.value == "") {
        alert("Por favor, ingresar ambos valores");
        event.preventDefault();
    } else if (!HasAtSign(username.value)) {
        alert("Por favor, ingresar un usuario válido. El mismo debe contener @");
        event.preventDefault();
    }
})