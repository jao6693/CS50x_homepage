// declare some variables to track the rating of the different drivers
const drivers_count = 8;
const star0_path = "./assets/images/star-0.svg";
const star1_path = "./assets/images/star-1.svg";

// wait for the page to be ready
document.addEventListener("DOMContentLoaded", function(event) {
  // set an id to all stars for rating
  for (let i = 0; i < drivers_count; i++) {
    let count = 0;
    let wrapper_id = "img-rating-" + i;
    let wrapper_rating = document.getElementById(wrapper_id);
    // get the children img elements
    let img_rating = wrapper_rating.querySelectorAll("img");
    // loop over all img
    img_rating.forEach(function(img_rating_item) {
      // assign them an id
      img_rating_item.id = wrapper_id + "-" + count;
      // add a mouse click event listener
      img_rating_item.addEventListener("click", onMouseClickRating);
      count += 1;
    });
  }
});

// declare functions for rating
function onMouseClickRating(event) {
  let img_id = event.target.getAttribute("id").toString();
  let level = img_id.charAt(img_id.length-1);

  // mouse clicking a rating star should change the appearance of the stars
  for (let i = 0; i < 5; i++) {
    let current_img = document.getElementById(img_id.substring(0, img_id.length-1) + i);

    if (i <= level ) {
      current_img.setAttribute("src", star1_path);
    } else {
      current_img.setAttribute("src", star0_path);
    }
  }
}
