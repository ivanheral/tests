// Ejercicio 2
function removeProperty(obj, property) {
    var result = false;
    if (typeof obj[property] == 'undefined') {
        Object.values(obj).filter(item => typeof item === 'object' && item != null).forEach(
            item => {
                result = removeProperty(item, property);
                return result;
            });
    } else {
        delete obj[property];
        return true;
    }
    return result;
}