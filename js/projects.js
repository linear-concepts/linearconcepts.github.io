$(document).ready(function() {
  $(".project").mouseenter(function() {
    let type = $(this)
      .attr("class")
      .split(" ")[1];
    $(".background").css("opacity", "0");
    $(".background").css("height", "120%");
    $(".background").css("width", "120%");
    $(".background").attr("class", "background");
    $(".background").addClass(type);
    setTimeout(function() {
      $(".background").animate(
        { opacity: 1, height: "100%", width: "100%" },
        240
      );
    }, 10);
    setTimeout(function() {
      $(".background-delay").attr("class", "background-delay");
      $(".background-delay").addClass(type);
    }, 250);
  });
  $(".project-gallery").mouseleave(function() {
    console.info("leave");
  });
});
