onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      document.getElementById("audio").play();  
      clearTimeout(c);
    }, 1000);
  };


function startAnimation(){
  document.getElementById("hidden").style.display = "block";
  document.getElementById("hidden").style.animation = "fadeIn 1s";
  document.getElementById("hidden").style.animationFillMode = "forwards";
  document.getElementById("hidden").style.animationDelay = "1s";
  document.getElementById("hidden").style.animationIterationCount = "1";

}