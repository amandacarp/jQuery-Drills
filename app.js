$(document).ready(function(){

$('#btnSubmit').click(function(e){
    e.preventDefault();
    alert("Text: " + $("input[type=text]").val());

    });

    $('input[type="submit"]').attr('disabled', true);

    $('input[type="text"]').on('keyup', function () {
        let textarea_value = $("#inputText").val();
        if (textarea_value != '' ) {
            $('input[type="submit"]').attr('disabled', false);
        } else {
            $('input[type="submit"]').attr('disabled', true);
        }
    })


})
