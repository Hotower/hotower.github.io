function tos()
{
  var x=$("#order").val();
  switch(x)
  {
    case "wzfls itclub":
      window.location="../itclub.html";
      break;
    case "md5":
      window.location="../md5former.html";
      break;
    default:
      alert(x);
  }
}

function nextbd()
{
  if(document.getElementById("img1").src.match("./images/witc1.PNG")){
    document.getElementById("img1").src="./images/witc2.PNG";
  }
  else{
    document.getElementById("img1").src="./images/witc3.PNG";
  }
}
