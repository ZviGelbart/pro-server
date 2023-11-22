import Body from "./Body.js";
import Headers from "./Headers.js";
import Package from "./Package.js";

class Client {
  constructor(ip) {
    this.ip = ip;
  }
  sendPackage() {
        const headers = new Headers(this.ip, document.getElementById("url").value);
        const body = new Body(document.getElementById("body").value);
        const packages =  new Package(headers, body);
        

    }
  }
export default Client