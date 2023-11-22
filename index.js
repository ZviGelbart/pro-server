// import Body from "./model/Body.js";
// import Headers from "./model/Headers.js";
// import Package from "./model/Package.js";
import Client from "./model/Client.js";


const client = new Client("123456")


function sendmessage() {
    client.sendPackage();
}
document.getElementById("submit").addEventListener("click", sendmessage);
