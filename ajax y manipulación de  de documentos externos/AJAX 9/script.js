$(document).ready(function () {
    
    $('.thumbnail').on('click', function () {
        
        var fullImageSrc = $(this).data('full');

      
        $('#fullImage').attr('src', fullImageSrc).fadeIn();
    });
});
