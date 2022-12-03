
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('thank-you-state').style.display = 'none';
});
 
function ratingClicked(element){
  let li = document.getElementsByTagName('li');

  // loop through all 'li' elements
  for (i = 0; i < li.length; i++) {
      // Remove the class 'active' if it exists
      li[i].classList.remove('ratingClicked');
  }
  // add 'active' classs to the element that was clicked
  element.classList.add('ratingClicked');
}

function submitClicked() {
  let li = document.getElementsByTagName('li');
  let selectedRating;
  // loop through all 'li' elements
  for (i = 0; i < li.length; i++) {
    // Remove the class 'active' if it exists
    if(li[i].classList.contains('ratingClicked')){
      selectedRating = li[i].innerHTML;
    };
  }
  if(selectedRating){
    document.getElementById('rating-state').style.display = 'none';
    document.getElementById('thank-you-state').style.display = '';
    document.getElementById('thank-you-state').classList.add('thank-you-state');
    var p = document.getElementById('final-rating');
    var final = document.createTextNode("You selected " + selectedRating + " out of 5");
    p.appendChild(final);
  }else{
    alert('Please select a rating');
  }

};  