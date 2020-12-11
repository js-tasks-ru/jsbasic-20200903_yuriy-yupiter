function toggleText() {

  let hiderOne = document.querySelector(".toggle-text-button");
  let elem = document.getElementById("text");
  hiderOne.addEventListener('click', function() {

      elem.hidden = !elem.hidden;
 
  });
}
