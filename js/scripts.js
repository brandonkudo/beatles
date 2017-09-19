$(document).ready(function() {
  $("#formOne").submit(function(event) {
     event.preventDefault();

    var beatles = "all you need is love";

    var vowels = ["a", "e", "i", "o", "u"];

    //Stack overflow suggestion
    // String.prototype.character = function name() {
    //   var i;
    //   for ( i = 0; i < vowel.length; i++) {
    //     var secondLoop = beatles.length;
    //     for ( j = 0; j < secondLoop; j++) {
    //         if (vowel[i] == beatles.charAt(j)) {
    //             beatles = beatles.slice(0, j).concat(beatles.slice(j + 1, secondLoop));
    //             j--;
    //             secondLoop--;
    //         }
    //
    //     }
    // }
    // }
    //
    // beatles.character();




    for (var i = 0; i < beatles.length; i++) {
      // console.log("in i loop: " + i + ", " + beatles);
      for(var j = 0; j < vowels.length; j++){
        beatles = beatles.replace(vowels[j], "-");
        // console.log("in j loop: " + j + ", " + beatles);

    }

    }

    $("#output").text(beatles);
    $("#output").show();


  });
});
