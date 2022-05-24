const usu = document.getElementById('usuario');
const pass = document.getElementById('password');
const botonIngresar = document.getElementById('btnIngresar');

const validar = (usr,pwd) => {
    usr.setCustomValidity("");
    pwd.setCustomValidity("");
    if (usr.value == "") {
        usr.setCustomValidity("Complete el usuario");
    } else  if (usr.value.indexOf('@') == -1) {
        usr.setCustomValidity("El usuario debe contener al menos un @");
    } else if (pwd.value == "") {
        pwd.setCustomValidity("Complete la clave");
    } else {
        usr.setCustomValidity("");
        pwd.setCustomValidity("");
        console.log("Los datos fueron enviados con éxito");
        console.log('Loguear al sistema al usuario ' + usr.value + ' con la password ' + pwd.value);
        const values = [usr.value, pwd.value];
        console.log(values);
    }
};

/*botonIngresar.addEventListener('click',(e)=>{
    e.preventDefault();*/
botonIngresar.addEventListener('click', () => {
    validar(usu,pass);
});
