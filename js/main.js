$(document).ready(function () {

	//When click.
	var select = $(this);	
	select.find('a').on('click', function () {
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top }, 400 );
		return false;
	});

	
	// Click in the area for close mySlide.
	$('#myBox').on('click', function() {
		$('#myBox').hide();
	});


	new WOW().init();

});

function openBox() {
	document.getElementById('myBox').style.display = 'block';
}
function closeBox() {
	document.getElementById('myBox').style.display = 'none';
}

function showImage(n) {
	var image = document.getElementsByClassName("mySlide");

	// hide all image
	for(var i=0; i<image.length; i++)
		image[i].style.display = 'none';
	//-----------------------------------------
	image[n].style.display = 'block';
}