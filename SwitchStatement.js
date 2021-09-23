//declare 
const expression = 'star wars';

let moviePhrase;
switch (expression) {
    case 'jaws':
        moviePhrase = "You're gonna need a bigger boat.";
      //Statements executed when the
      //result of expression matches value1
    case 'the shining':
      //Statements executed when the
      //result of expression matches value2
     moviePhrase = "All work and no play makes Jack a dull boy.";
    case 'star wars':
        moviePhrase = "Do. Or do not. There is no try.";
    case 'forrest gump':
        moviePhrase = "Life was like a box of chocolates.";
    case 'back to the future':
        moviePhrase = "Where we're going, we don't need roads.";
    case ' ':
        moviePhrase = "Great movie choice!";
    break;
    default:
        moviePhrase = "Great movie choice!";
  }

  console.log(moviePhrase);
  
//Write out a Switch Statement for the pseudo code below
//Assume star wars is your favorite movie.


// If favoriteMovie is "jaws"
// Assign moviePhrase the value "You're gonna need a bigger boat."
// Else if favoriteMovie is "the shining"
// Assign moviePhrase the value "All work and no play makes Jack a dull boy."
// Else if favoriteMovie is "star wars"
// Assign moviePhrase the value "Do. Or do not. There is no try."
// Else if favoriteMovie is "forrest gump"
// Assign moviePhrase the value "Life was like a box of chocolates."
// Else if favoriteMovie is "back to the future"
// Assign moviePhrase the value "Where we're going, we don't need roads."
// Else
// Assign moviePhrase the value "Great movie choice!"
