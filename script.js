var today = moment().format('dddd, MMMM Do, YYYY');
console.log(today);
$("#currentDay").text(today);

$(document).ready(function () {

    colorChange();
    //renderText();
    
});

function colorChange() {
    var currentHour = moment().hour();
    console.log(currentHour);

    $(".time-block").each(function () {

        var blockHour = $(this).attr("id").split("hour-")[1];
        console.log(blockHour);

        if (currentHour > blockHour) {

            $(this).addClass("past");

        }

        else if (currentHour < blockHour) {

            $(this).addClass("future");

        }

        else {

            $(this).addClass("present");

        }

    })
}

function renderText() {
    //something here to show locally stored events on the page 
    // var test = localStorage.getItem(time, description);
    // console.log(test);
    // JSON.parse(test);
    // console.log(test);

    // $(".time-block").each(function() {
    //     var time = $(this).attr("data-time");
    //     var description = localStorage.getItem("9");
    //     $(this).find("textarea").textContent(description);
        
    // })
    
}


$(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();   

    localStorage.setItem(time, description);

    colorChange();
    //renderText();

})

$("#hour-9").children(".description").val(localStorage.getItem("hour-9"));
$("#hour-10").children(".description").val(localStorage.getItem("hour-10"));
$("#hour-11").children(".description").val(localStorage.getItem("hour-11"));
$("#hour-12").children(".description").val(localStorage.getItem("hour-12"));
$("#hour-13").children(".description").val(localStorage.getItem("hour-13"));
$("#hour-14").children(".description").val(localStorage.getItem("hour-14"));
$("#hour-15").children(".description").val(localStorage.getItem("hour-15"));
$("#hour-16").children(".description").val(localStorage.getItem("hour-16"));
$("#hour-17").children(".description").val(localStorage.getItem("hour-17"));







