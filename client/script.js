

function getImage() {
  $.ajax({
    url: "/images",
}).done(function(data) {
    $('#imagecat').attr('src', data) //returns attributes and values of the selected elements
});
}