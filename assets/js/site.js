// The page chrome's one behaviour: clicking a figure.shot enlarges it in the
// #lightbox overlay; clicking anywhere, or Esc, dismisses it. External rather
// than inline so a page can carry a Content-Security-Policy that forbids
// inline script.
(function(){
  var box=document.getElementById("lightbox"),full=box.firstElementChild;
  document.addEventListener("click",function(e){
    var shot=e.target.closest(".shot button");
    if(shot){
      var img=shot.querySelector("img");
      full.src=img.currentSrc||img.src;
      full.alt=img.alt;
      box.hidden=false;
    }else if(!box.hidden){
      box.hidden=true;
    }
  });
  document.addEventListener("keydown",function(e){
    if(e.key==="Escape")box.hidden=true;
  });
})();
