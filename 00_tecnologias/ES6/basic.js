
let aDatos = [ {precio: 23}, {precio: 45}, {precio: 65}]

aDatos.forEach(element => {
    let iva = 1.22
    let precio_final = element.precio * iva
    console.log(`
        El precio es :
                        ${precio_final}`);
}
);