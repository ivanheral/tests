// Ejercicio 3
function formatDate(userDate) {
    var m = userDate.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    var mydate = new Date(userDate);
    var month = mydate.getMonth() + 1;
    var day = mydate.getDate();
    var year = mydate.getFullYear();
    userDate = `${day}/${month}/${year}`;
    return m ? userDate.split("/").reverse().join('') : 'error';
}