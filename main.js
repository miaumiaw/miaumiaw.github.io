
let y = document.getElementsByClassName('wrapper')[0];
y.addEventListener('click', function wrappers() {
    let x = document.getElementsByClassName('wrapperMenu')[0];
    let z = document.getElementsByClassName('cajaGlobal')[0];
    console.log(z);
    ocultar = () => {x.style.display = 'none'; ;z.style.filter = 'none'; y.classList.toggle('wrapperCruz')}
    mostrar = () => {x.style.display = 'flex'; z.style.filter = 'blur(2px)'; y.classList.toggle('wrapperCruz')}
    x.style.display == 'flex' ? ocultar() : mostrar();
    console.log(x);
});
