$(document).ready(function() {
  docWidth = $(window).width();
  if (docWidth >= 600) {
    const h = $("section.image-slide").innerHeight() / 2;
    const w = $("section.image-slide").innerWidth() / 2;

    $("section.image-slide").mousemove(function(e) {
      $("section.image-slide .content h1").css(
        "top",
        `${(e.clientY - h) / 30}px`
      );
      $("section.image-slide .content h1").css(
        "left",
        `${(e.clientX - w) / 30}px`
      );
      $("section.image-slide .content h5").css(
        "top",
        ` ${(e.clientY - h) / 40}px`
      );
      $("section.image-slide .content h5").css(
        "left",
        `${(e.clientX - w) / 40}px`
      );
      $("section.image-slide .slider").css(
        "transform",
        `translate(${(w - e.clientX) / 30}px, ${(h - e.clientY) /
          30}px) scale(1.1)`
      );
    });
  }
});
