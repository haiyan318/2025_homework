$(document).ready(function () {
  const $track = $("#galleryTrack");
  const $items = $track.children();
  const itemCount = $items.length;
  const visibleItems = 4;

  $track.append($items.slice(0, visibleItems).clone());

  let currentIndex = 0;

  function slideNext() {
    currentIndex++;

    if (currentIndex >= itemCount) {
      setTimeout(() => {
        $track.css("transition", "none");
        currentIndex = 0;
        $track.css("transform", `translateX(0)`);
        setTimeout(() => $track.css("transition", "transform 0.5s ease-in-out"), 10);
      }, 500);
    }

    const offset = (currentIndex * 100) / visibleItems;
    $track.css("transform", `translateX(-${offset}%)`);
  }

  setInterval(slideNext, 3000);
  $(".mini-image").click(function () {
    const src = $(this).data("src");
    $("#modalImage").attr("src", src);
    $("#modalOverlay").fadeIn();
  });
  $("#modalClose, #modalOverlay").click(() => $("#modalOverlay").fadeOut());
  $(".modal-content").click(e => e.stopPropagation());
});