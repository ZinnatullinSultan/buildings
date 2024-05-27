document.addEventListener('DOMContentLoaded', function() {
  var modal = document.querySelectorAll('.modal');
  var instances_modal = M.Modal.init(modal);

  var sidenav = document.querySelectorAll('.sidenav');
  var instances_sidenav = M.Sidenav.init(sidenav);

  var gall = document.querySelectorAll('.materialboxed');
  var instances_gall = M.Materialbox.init(gall);

  // var sidenav_btn = document.querySelector('.sidenav-trigger');
  // var body2 = document.querySelector('body');

  // sidenav_btn.addEventListener('click', function() {
  //   body2.classList.add("sidenav2-open");
  //   headerSide.classList.add("sidenav3-open");
  // });

  // var closeSide1 = document.querySelector("div.sidenav-overlay");
  // var closeSide2 = document.querySelector(".sidenav-close");

  // closeSide1.addEventListener('click', function() {
  //   body2.classList.remove("sidenav2-open");
  // });
  // closeSide2.addEventListener('click', function() {
  //   body2.classList.remove("sidenav2-open");
  // });

});
