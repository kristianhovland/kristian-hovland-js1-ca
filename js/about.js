document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector(".loader").style.visibility = "visible";
    } else {
      document.querySelector(".loader").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
    }
  };
  
  const delayInMilliseconds = 4000;
  
  setTimeout(function() {
    document.body.innerHTML = document.body.innerHTML.replace(/The/g, "Replaced");
    document.body.innerHTML = document.body.innerHTML.replace(/the/g, "replaced");
  }, delayInMilliseconds);