function clr1(id){
    document.getElementById(id).style.backgroundColor="#2C2C2B";
    document.getElementById(id+'i').style.color="#fff";
  }
  function clr2(id){
    document.getElementById(id).style.backgroundColor="aliceblue";
    document.getElementById(id+'i').style.color="#2C2C2B";
  }
  var b=document.querySelector(' .phnbar');
  function navslide(){
   
    // b.style.right="0px";
    b.classList.toggle('exbar');
  }
  
  function myFunction(x) {
    x.classList.toggle("change");
  }