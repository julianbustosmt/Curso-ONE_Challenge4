import { uniqueUser } from "../Services/services.js";

export const addUser = (event) =>{
    event.preventDefault();

    const inputNombre = document.querySelector('[data-form-nombre]');
    const inputEmail = document.querySelector('[data-form-email]');
    const inputPassword = document.querySelector('[data-form-password]');
    const inputPassword2 = document.querySelector('[data-form-confirm__password]');

    const nombre = inputNombre.value;
    const email = inputEmail.value;
    const password = inputPassword.value;
    const password2 = inputPassword2.value;

    if (nombre == "" ||
        email == "" ||
        password == "" ||
        !(password === password2)||
        !uniqueUser(email)){
        return
    };

    const userObject = {
        id: uuid.v4(),
        nombre,
        email,
        password,
    };

    const userList = JSON.parse(localStorage.getItem('user')) || [];
    userList.push(userObject);
    localStorage.setItem('user', JSON.stringify(userList));

    inputNombre.value = "";
    inputEmail.value = "";
    inputPassword.value = "";
    inputPassword2.value = "";
}






