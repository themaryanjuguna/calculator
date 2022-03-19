// $(document).ready(function() {
//     $("#blanks form").submit(function() {
//         $(".person1").append("blah blah");
//         $(".person2").append("blah blah");
//         $(".animal").append("blah blah");
//         $(".exclamation").append("blah blah");
//         $(".verb").append("blah blah");
//         $(".noun").append("blah blah");

//         $("#story").show();
//     });
// });

// But when we submit the form, the story briefly flashes and then disappears. 
// What's happening is that, by default, forms try to send the information somewhere, 
// and since we haven't told it where to submit to, the page just refreshes and erases our hard work. 
// If you look in the URL bar, you can see that there's a ? at the end of the address now. 
// This is your clue that the form has been submitted to nowhere and the page refreshed. We need to 
// prevent the default action for the form:


//////


// $(document).ready(function() {
//     $("#blanks form").submit(function(event) {
//         $(".person1").append("blah blah");
//         $(".person2").append("blah blah");
//         $(".animal").append("blah blah");
//         $(".exclamation").append("blah blah");
//         $(".verb").append("blah blah");
//         $(".noun").append("blah blah");

//         $("#story").show();

//         event.preventDefault();
//     });
// });

// Notice that we've added a parameter event to the callback function we passed to submit() method. 
// When the form is submitted, jQuery runs the callback function and passes in something as an argument. 
// We don't know what this "something" is - we just know that it somehow represents the event of the form 
// being submitted, and so we give the parameter the name event. And we know that if we call the method 
// preventDefault() on this event thing, it will stop the form from submitting.


///////


// $(document).ready(function() {
//     $("#blanks form").submit(function(event) {
//         var person1Input = $("input#person1").val();
//         var person2Input = $("input#person2").val();
//         var animalInput = $("input#animal").val();
//         var exclamationInput = $("input#exclamation").val();
//         var verbInput = $("input#verb").val();
//         var nounInput = $("input#noun").val();
//         $(".person1").append(person1Input);
//         $(".person2").append(person2Input);
//         $(".animal").append(animalInput);
//         $(".exclamation").append(exclamationInput);
//         $(".verb").append(verbInput);
//         $(".noun").append(nounInput);

//         $("#story").show();

//         event.preventDefault();
//     });
// });

// There's one last thing to fix, though. If you don't refresh the page and you change the value of one 
// of the inputs, it just adds it after the first value, instead of replacing it. 
// We need to replace the existing text rather than just appending to it:



///////////


// $(document).ready(function() {
//     $("#blanks form").submit(function(event) {
//         var person1Input = $("input#person1").val();
//         var person2Input = $("input#person2").val();
//         var animalInput = $("input#animal").val();
//         var exclamationInput = $("input#exclamation").val();
//         var verbInput = $("input#verb").val();
//         var nounInput = $("input#noun").val();
//         $(".person1").text(person1Input);
//         $(".person2").text(person2Input);
//         $(".animal").text(animalInput);
//         $(".exclamation").text(exclamationInput);
//         $(".verb").text(verbInput);
//         $(".noun").text(nounInput);

//         $("#story").show();

//         event.preventDefault();
//     });
// });

/////////// DO not repeat yourself
$(document).ready(function() {
    $("#blanks form").submit(function(event) {
      var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

      blanks.forEach(function(blank) {
        var userInput = $("input#" + blank).val();
        $("." + blank).text(userInput);
      });

      $("#story").show();

      event.preventDefault();
    });
  });