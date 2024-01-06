function addComment() {
    var commentText = $('#comment-text').val();

    if (commentText.trim() === '') {
        alert('Por favor, escribe un comentario.');
        return;
    }

    
    $.ajax({
        url:  'https://comments-container.free.beeceptor.com/todos', 
        type: 'POST',
        data: { comment: commentText },
        success: function () {

            addCommentToList(commentText);
            $('#comment-text').val(''); 
        },
        error: function () {
            alert('Hubo un error al enviar el comentario. Por favor, inténtalo de nuevo.');
        }
    });
}

function addCommentToList(comment) {
   
    var commentContainer = $('#comments-container');
    var newComment = $('<div>').text(comment);
    commentContainer.append(newComment);
}
