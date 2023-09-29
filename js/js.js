$(document).ready(function() {
  // Fungsi untuk mengganti tema dan ikon
  function toggleDarkMode() {
    var body = $("body");
    var modeIcon = $("#mode");

    body.toggleClass("dark-theme");
    modeIcon.toggleClass("bi-sun-fill bi-moon-stars-fill"); // Ganti ikon sesuai keadaan tema
  }

  // Event handler untuk mengklik tombol
  $("#toggleButton").click(function() {
    toggleDarkMode();
  });
});




