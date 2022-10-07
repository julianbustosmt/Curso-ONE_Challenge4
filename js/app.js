import { addUser } from "./Login/Components/addUser.js";

const btnSingIn = document.querySelector('[data-btn-singIn]')

btnSingIn.addEventListener('click', addUser)