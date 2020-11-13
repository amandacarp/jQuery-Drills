$(document).ready(function () {
    //create an unordered list in body
    let myList = $('<ul></ul>')
    $('body').append(myList)

    //create a click event to console log the input field's text
    $('#btnSubmit').click(function (e) {
        //prevent default refresh from occuring
        e.preventDefault();
        let textValue = $("input[type=text]").val()
        console.log("Text: " + $("input[type=text]").val());

        //create a new list item with in put field text each time button is click and append to ul
        let listItem = $('<li></li>')
        $(myList).append(listItem);
        listItem.append(textValue);
        //create a new background color and border radius when new list item is hovered over
        $(myList).mouseover(function () {
            myList.css('background-color', 'red');
            myList.css('border-radius', '10px');
        })
        //remove new bg color and br after mouseout
        $(myList).mouseout(function () {
            myList.removeAttr('style');
        })
        //when user clicks li element- assign random color
        let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'black'];

        function getRandomColor () {
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            return randomColor;
        }
        $(listItem).click(function(){
        let randomColor = getRandomColor();
        listItem.css('color', randomColor);
    })

    $(listItem).dblclick(function(){
        listItem.remove();
    })
        //when user clicks submit- refresh input field
        $("input[type=text]").val('');
    });

    //if no text in input field, disable submit button
    $('input[type="submit"]').attr('disabled', 'disabled');

    $('input[type="text"]').keyup(function () {
        let textarea_value = $("#inputText").val();
        if (textarea_value.length > 0) {
            $('input[type="submit"]').removeAttr('disabled');
        } else {
            $('input[type="submit"]').attr('disabled', 'disabled');
        }

    })


})
