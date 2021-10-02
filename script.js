// current day is displayed at top of calendar: moment
// timeblocks from 9 to 5: for loop
// timeblocks colorcoded: in css
// click into timeblock: input
// saved data in 

var currentDay = moment().format("dddd MMM Do, YYYY");
$("#currentDay").text(currentDay);
var textAreaEl = $('textarea');
// save btn: save text that is put in text area 
// create function to save text in text area in local storage
// button
var saveBtn = $(".saveBtn");
saveBtn.on("click", userInput);

//grabbing id values from html
function userInput() {
    var input = $(this).siblings("textarea").val();
    console.log(input);
    var idEl = $(this).siblings('textarea').attr('id');
    localStorage.setItem(idEl, input);
    return;
}

// creating local storage for each 
function init() {
    var time1 = localStorage.getItem("9am");
    $("#9am").text(time1);
    var time2 = localStorage.getItem("10am");
    $("#10am").text(time2);
    var time3 = localStorage.getItem("11am");
    $("#11am").text(time3);
    var time4 = localStorage.getItem("12pm");
    $("#12pm").text(time4);
    var time5 = localStorage.getItem("1pm");
    $("#1pm").text(time5);
    var time6 = localStorage.getItem("2pm");
    $("#2pm").text(time6);
    var time7 = localStorage.getItem("3pm");
    $("#3pm").text(time7);
    var time8 = localStorage.getItem("4pm");
    $("#4pm").text(time8);
    var time9 = localStorage.getItem("5pm");
    $("#5pm").text(time9);

}

init();
// looping the past present future colors
function colorCode() {
    //moment().hour();
    console.log(moment().hour());
    $('textarea').each(function () {
        // console.log(ok);
        //$(this).attr('attr');
        if (moment().hour() == $(this).attr('attr')) {
            $('textarea').addClass('present');
        } else if (moment().hour() < $(this).attr('attr')) {
            $('textarea').addClass('future');
        } else {
            $('textarea').addClass('past');
        }
    });
};

colorCode();

/*
var containerEl = $(".container");

for(i=0; i<5; i++) {
    var newRow = $("<div>").attr("class", "row")
    
    var newP = $("<p>").attr("class", "col-1 hour").text("whatever Time it is")
    var newTextA = $("<textarea>").attr("class", "col-10 present")
    var newBtn = $("<button>").attr("class", "col-1 saveBtn").text("Save")
    
    newRow.append(newP)
    newRow.append(newTextA)
    newRow.append(newBtn)
    
    containerEl.append(newRow)
}
*/