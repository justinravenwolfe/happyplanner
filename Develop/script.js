// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.<- DONE
// TODO: Add a listener for click events on the save button. <- DONE This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? <- DONE How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?<- Next task
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  //Waits untill all elements are there

  //Array 
  //dayjs()<- object, time, date
  var curr_day = dayjs().format('YYYY-MM-DD'); 
  var nine = dayjs(curr_day + "T09:00:00");
  var ten = dayjs(curr_day + "T10:00:00");
  var eleven = dayjs(curr_day + "T11:00:00");
  var twelve = dayjs(curr_day + "T12:00:00");
  var one = dayjs(curr_day + "T13:00:00");
    var two = dayjs(curr_day + "T14:00:00");
    var three = dayjs(curr_day + "T15:00:00");
    var four = dayjs(curr_day + "T16:00:00");
    var five = dayjs(curr_day + "T17:00:00");
    //List of the dayjs objects as hours. 
    var work_hours = [nine,ten,eleven,twelve,one,two,three,four,five];
    var hour_index = 0; 
  $(document).ready(function(){
   
    $('.time-block').each(function(index,element){
      //'mm -dd-yyy hh:mm:ss' 
      //Lookup the current time and format it the standard paradigm we've been using 
      var curr_hour = dayjs().format('YYYY-MM-DDTHH:mm:ss'); 
      //Within current hour <- Red<- add class Past<- 12pm
      if(curr_hour.isSame(work_hours[hour_index], 'hour'))
      {
        $(this).addClass('present'); 
      }else if(curr_hour.isBefore(work_hours[hour_index], 'hour')){
        $(this).addClass('future');
      }else{
        $(this).addClass('past'); 
      }

      hour_index++;
      //Before current hour <- grey- add class Present
      //After current hour <- green - add class Future

    }); 
    $('.saveBtn').click(function(){
      //Take the current button that was press, look for the closest div<- in this case is the enclosing parent, and then put the id of that div in this variable
      //Text Area 
      var div_id = $(this).closest('div').attr('id'); 
      //What the user entered
      var user_desc = $('.description').val(); 
      //Making the text of the div equal to what entered into the text area
      $(div_id).text(user_desc); 
    
    
     }); 
    
    }); 
     
    
    //DOM- Document object model
    //document.querySelector <- Javascript
