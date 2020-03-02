var galleryViewIndex = 0;
var project;

const data = {
  satyasheel: {
    name: "Satyasheel",
    imageDir: "Satyasheel",
    photos: [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "h.jpg",
      "Image-1.jpg",
      "Image-4.jpg",
      "Image-6.jpg",
      "Image-7.jpg",
      "Image-10.jpg",
      "Image-11.jpg",
      "Image-12.jpg",
      "Image-14.jpg",
      "Image-15.jpg",
      "Image-16.jpg",
      "Image-17.jpg",
      "Image-17.jpg",
      "Image-18.jpg",
      "Image-19.jpg",
      "Image-20.jpg",
      "Image-21.jpg",
      "Image-22.jpg",
      "Image-23.jpg",
      "Image-24.jpg",
      "Image-28.jpg",
      "Image-29.jpg",
      "Image-30.jpg",
      "Image-31.jpg",
      "Image-33.jpg",
      "Image-34.jpg",
      "Image-35.jpg",
      "Image-36.jpg",
      "Image-37.jpg",
      "Image-37.jpg",
      "Image-38.jpg"
    ]
  },
  osho: {
    name: "The Osho House",
    imageDir: "Osho House",
    photos: [
      "Babbar's Residence-1.jpg",
      "Babbar's Residence-2.jpg",
      "Babbar's Residence-3.jpg",
      "Babbar's Residence-4.jpg",
      "Babbar's Residence-5.jpg",
      "Babbar's Residence-6.jpg",
      "Babbar's Residence-7.jpg",
      "Babbar's Residence-8.jpg",
      "Babbar's Residence-9.jpg",
      "Babbar's Residence-10.jpg",
      "Babbar's Residence-11.jpg",
      "Babbar's Residence-12.jpg",
      "Babbar's Residence-13.jpg",
      "Babbar's Residence-14.jpg",
      "Babbar's Residence-15.jpg",
      "Babbar's Residence-16.jpg",
      "Babbar's Residence-17.jpg",
      "Babbar's Residence-18.jpg",
      "Babbar's Residence-19.jpg",
      "Babbar's Residence-20.jpg"
    ]
  },
  coban: {
    name: "Coban Residencies",
    imageDir: "Coban Residencies",
    photos: [
      "areal.jpg",
      "BIRD'S EYE VIEW (5).jpg",
      "CLUB (11).jpg",
      "DAY VIEW (4).jpg",
      "FRONT VIEW (2).jpg",
      "inner road view.jpg",
      "NIGHT VIEW (10).jpg",
      "SIDE VIEW (3).jpg",
      "SWIMMING POOL (7).jpg",
      "TERRACE GARDEN(6).jpg",
      "TOP VIEW (1).jpg"
    ]
  }
};

function populate() {
  let obj = data[project];
  for (let i = 0; i < obj.photos.length; i++) {
    $(".populate-project").append(
      `<div><img src="../img/${obj.imageDir}/${obj.photos[i]}" data-item="${i}"/></div>`
    );
  }
}

function openGallery() {
  let obj = data[project];
  let total = obj.photos.length;
  if (galleryViewIndex + 1 == total) {
    $(".expanded-view .right-arrow").addClass("hide-item");
  } else {
    $(".expanded-view .right-arrow").removeClass("hide-item");
  }
  if (galleryViewIndex == 0) {
    $(".expanded-view .left-arrow").addClass("hide-item");
  } else {
    $(".expanded-view .left-arrow").removeClass("hide-item");
  }
  $(".expanded-view img").attr(
    "src",
    `../img/${obj.imageDir}/${obj.photos[galleryViewIndex]}`
  );
  $(".expanded-view").removeClass("hide-item");
}

function closeGallery() {
  $(".expanded-view").addClass("hide-item");
}

function nextPhoto() {
  let total = data[project].photos.length;
  if (galleryViewIndex + 1 >= total) {
    return;
  }
  if (galleryViewIndex + 2 == total) {
    $(".expanded-view .right-arrow").addClass("hide-item");
  } else {
    $(".expanded-view .right-arrow").removeClass("hide-item");
  }
  galleryViewIndex++;
  openGallery();
}

function prevPhoto() {
  if (galleryViewIndex <= 0) {
    return;
  }
  if (galleryViewIndex == 1) {
    $(".expanded-view .right-arrow").addClass("hide-item");
  } else {
    $(".expanded-view .right-arrow").removeClass("hide-item");
  }
  galleryViewIndex--;
  openGallery();
}

$(document).ready(function() {
  project = $("section.project-section")
    .attr("class")
    .split(" ")[0];
  populate();

  $(".populate-project").on("click", "img", function() {
    galleryViewIndex = parseInt($(this).attr("data-item"));
    openGallery();
  });

  $(".expanded-view .left-arrow").click(function() {
    prevPhoto();
  });
  $(".expanded-view .right-arrow").click(function() {
    nextPhoto();
  });
  $(".expanded-view .cross").click(function() {
    closeGallery();
  });

  $(window).keyup(function(e) {
    if (e.keyCode == 37) {
      prevPhoto();
    } else if (e.keyCode == 39) {
      nextPhoto();
    } else if (e.keyCode == 27) {
      closeGallery();
    }
  });
});
