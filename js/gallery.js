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
  },
  avh: {
    name: "AV House",
    imageDir: "AV House",
    photos: [
      "LC_AV (1 of 20).jpg",
      "LC_AV (2 of 20).jpg",
      "LC_AV (3 of 20).jpg",
      "LC_AV (4 of 20).jpg",
      "LC_AV (5 of 20).jpg",
      "LC_AV (6 of 20).jpg",
      "LC_AV (7 of 20).jpg",
      "LC_AV (8 of 20).jpg",
      "LC_AV (9 of 20).jpg",
      "LC_AV (10 of 20).jpg",
      "LC_AV (11 of 20).jpg",
      "LC_AV (12 of 20).jpg",
      "LC_AV (13 of 20).jpg",
      "LC_AV (14 of 20).jpg",
      "LC_AV (15 of 20).jpg",
      "LC_AV (16 of 20).jpg",
      "LC_AV (17 of 20).jpg",
      "LC_AV (18 of 20).jpg",
      "LC_AV (19 of 20).jpg",
      "LC_AV (20 of 20).jpg"
    ]
  },
  lvogue: {
    name: "Linen Vogue",
    imageDir: "Linen Vogue",
    photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"]
  },
  micasa: {
    name: "Micasa",
    imageDir: "Micasa",
    photos: [
      "aerial.jpg",
      "Amphi.jpg",
      "birds_eye.jpg",
      "club.jpg",
      "fsade.jpg",
      "pond.jpg",
      "road_drive.jpg"
    ]
  },
  ph: {
    name: "Upcoming Housing",
    imageDir: "Proposed Housing",
    photos: [
      "Aerial Day cam_Highrez_1 copy 1.jpg",
      "Club House Cam_Highrez_.jpg",
      "Entry cam_2_Highrez_.jpg",
      "Entry Night_Highrez_.jpg",
      "pool night cam_highrez_.jpg",
      "site_send.jpg"
    ]
  },
  rch: {
    name: "The Cube House",
    imageDir: "Residential Cube House",
    photos: [
      "Bath-1.jpg",
      "Bath-2.jpg",
      "Bath-3.jpg",
      "Elevation1.jpg",
      "Elevation2.jpg",
      "Formal_Dining.jpg",
      "Master-Bed1.jpg",
      "Master-Bed2.jpg"
    ]
  },
  rh: {
    name: "Affordable Housing Gurugram",
    imageDir: "Residential Housing",
    photos: [
      "aerial.jpg",
      "cam_1.jpg",
      "cam_2.jpg",
      "night.jpg",
      "site(numb).jpg",
      "type_1.jpg",
      "type_2.jpg",
      "type_3(TOWER-2).jpg",
      "type_4(TOWER-2).jpg"
    ]
  },
  rv: {
    name: "The Urban House",
    imageDir: "Residential Villa",
    photos: ["B1.jpg", "B2.jpg", "B3.jpg", "B4.jpg"]
  },
  affordable: {
    name: "Affordable Housing Dwarka",
    imageDir: "Affordable Housing",
    photos: [
      "7 (4).jpg",
      "aerial.jpg",
      "affordable_again.jpg",
      "SITE_TOWER_10.jpg"
    ]
  },
  leaf: {
    name: "The Leaf House",
    imageDir: "The Leaf House",
    photos: [
      "Image 1.jpg",
      "Image 2.jpg",
      "Image 3.jpg",
      "Image 4.jpg",
      "Image 5.jpg",
      "Image 6.jpg",
      "Image 7.jpg",
      "Image 8.jpg",
      "Image 9.jpg",
      "Image 10.jpg",
      "Image 11.jpg",
      "Image 12.jpg",
      "Image 13.jpg",
      "Image 14.jpg",
      "Image 15.jpg",
      "Image 16.jpg",
      "Image 17.jpg",
      "Image 18.jpg",
      "Image 19.jpg",
      "Image 20.jpg",
      "Image 21.jpg",
      "Image 22.jpg",
      "Image 23.jpg",
      "Image 24.jpg",
      "Image 25.jpg",
      "Image 26.jpg",
      "Image 27.jpg",
      "Image 28.jpg",
      "Image 29.jpg",
      "Image 30.jpg",
      "Image 31.jpg",
      "Image 32.jpg",
      "Image 33.jpg",
      "Image 35.jpg",
      "Image 36.jpg",
      "Image 37.jpg",
      "Image 38.jpg",
      "Image 39.jpg",
      "Image 40.jpg",
      "Image 41.jpg",
      "Image 42.jpg",
      "Image 43.jpg"
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

  $(".project-section h1").css("opacity", "0");
  $(".project-section h5").css("opacity", "0");
  $(".project-section h1").css("top", "20px");
  $(".project-section h5").css("top", "20px");
  $(".project-section h6").css("opacity", "0");
  $(".project-section h6").css("top", "20px");
  setTimeout(function() {
    $(".project-section h5").animate({ opacity: "1", top: "0px" }, 500);
  }, 1000);
  setTimeout(function() {
    $(".project-section h1").animate({ opacity: "1", top: "0px" }, 500);
  }, 1250);
  setTimeout(function() {
    $(".project-section h6").animate({ opacity: "1", top: "0px" }, 500);
  }, 1500);

  $(".populate-project").on("click", "img", function() {
    galleryViewIndex = parseInt($(this).attr("data-item"));
    openGallery();
  });

  $(".expanded-view .left-arrow").click(function(e) {
    prevPhoto();
    e.stopPropagation();
  });
  $(".expanded-view .right-arrow").click(function(e) {
    nextPhoto();
    e.stopPropagation();
  });
  $(".expanded-view img").click(function(e) {
    e.stopPropagation();
  });
  $(".expanded-view .cross").click(function() {
    closeGallery();
  });
  $(".expanded-view").click(function() {
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
