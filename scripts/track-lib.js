function tos()
{
  alert($("#order").val());
  if($("#order").val()=="wzfls itclub"){
    window.location="../itclub.html";
  }
  else{
    alert($("#order").val());
  }
}

fuction nextbd()
{
  if(document.getElementById("img1").src.match("./images/witc1.PNG")){
    document.getElementById("img1").src="./images/witc2.PNG";
  }
  else{
    document.getElementById("img1").src="./images/witc3.PNG";
  }
}
