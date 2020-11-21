function toggleText() {
  document.addEventListener('click', function(event) {
    let hiderOne = document.querySelectorAll(".toggle-text-button")[0];

    let elem = document.getElementById("text");

    elem.hidden = !elem.hidden;
  });
}
