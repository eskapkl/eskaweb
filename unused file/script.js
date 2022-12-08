
// Defining async function
async function getapi(url) {
    console.log("calling "+url)
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// let url = "https://kevin-db-default-rtdb.asia-southeast1.firebasedatabase.app/makanan.json"
getapi("https://employeedetails.free.beeceptor.com/my/api/path");
// getapi(url)