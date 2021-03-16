function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "index.html");
    req.onload = function() {
      if (req.status == 200) {
        myCallback(this.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.send();
  }
  // Callback function
  /*async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
      setTimeout(function() { myResolve("Hello"); }, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  myDisplay();*/
  
  // Fetch remote for longitude and latitude
  async function city(cityName) {
    let response = await fetch(`https://geocode.xyz/${cityName}?json=1`)
    .then((response) => response.json())
    .then((result) => {
        console.log(result.longt);
        console.log(result.latt);
    })
    .catch((error) => console.log("error", error));
}
city("Chapel Hill");

setInterval(myFunction, 1000);

// Time callback function
function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}

