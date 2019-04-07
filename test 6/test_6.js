// Ejercicio 6
function accesor(obj, val_default, property ) {
    var arr = property.split('.');
    var value = val_default;

    while (arr.length) {
        value = obj[arr[0]];
        if (typeof value === 'object' && value != null) {
            obj = value;
        }
        arr.shift();
    }
    return value;
}