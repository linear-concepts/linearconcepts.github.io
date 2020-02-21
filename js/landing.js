$(document).ready(function() {
  const h = $("section.image-slide").innerHeight() / 2;
  const w = $("section.image-slide").innerWidth() / 2;

  $("section.image-slide").mousemove(function(e) {
    console.log(e.clientX, e.clientY);
    $("section.image-slide .content h1").css(
      "top",
      `${(e.clientY - h) / 20}px`
    );
    $("section.image-slide .content h1").css(
      "left",
      `${(e.clientX - w) / 20}px`
    );
    $("section.image-slide .content h5").css(
      "top",
      ` ${(e.clientY - h) / 30}px`
    );
    $("section.image-slide .content h5").css(
      "left",
      `${(e.clientX - w) / 30}px`
    );
    $("section.image-slide .slider").css(
      "transform",
      `translate(${(w - e.clientX) / 40}px, ${(h - e.clientY) /
        40}px) scale(1.1)`
    );
  });
});
