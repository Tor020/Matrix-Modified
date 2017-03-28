document.getElementById( "Blue" ).addEventListener( "click", functionBlue );
document.getElementById( "Green" ).addEventListener( "click", functionGreen );
document.getElementById( "Red" ).addEventListener( "click", functionRed );
document.getElementById( "Pink" ).addEventListener( "click", functionPink );
document.getElementById( "Teal" ).addEventListener( "click", functionTeal );
document.getElementById( "Purple" ).addEventListener( "click", functionPurp );

    //this calls the draw function every .35 seconds
    
setInterval( draw, 35 );
var textColor = "#3BD83B"

  //geting canvas by id c

var c = document.getElementById( "c" );
var ctx = c.getContext( "2d" );

    //making the canvas full screen

c.height = window.innerHeight;
c.width = window.innerWidth;

    //chinese characters - taken from the unicode charset

var matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%';

    //converting the string into an array of single characters

matrix = matrix.split( "" );

    //Setting the fontsize that is used in the col

var font_size = 10; //This is set outside of the draw function and is referred to as a variable. essentially this is functioning as a constant
var columns = c.width / font_size;

    //number of columns for the rain

var rows = c.height / font_size;

    //test variable for the rows
    //this creates an empty array 

var letSouth = [];

    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)

for ( var x = 0; x < columns; x++ ) letSouth[ x ] = 1; //this value refers to where on the screen the characters start their initial descent. the 1 basically puts it 1 section from the very top of the page. a -1 would make it start above the page
    //drawing the characters
function draw() {
    //Black BG for the canvas
    //translucent amount of fade out on the page. The 4th value is opacity and the higher the value the less remains on the page
  ctx.fillStyle = "rgba(0, 0, 0, .25)";
  ctx.fillRect( 0, 0, c.width, c.height );
  ctx.fillStyle = textColor; //green text
  ctx.font = font_size + "px arial";
        //looping over letSouth
  for ( var i = 0; i < letSouth.length; i++ ) {
        //a random chinese character to print
    var text = matrix[ Math.floor( Math.random() * matrix.length ) ];
        //x = i*font_size, y = value of letSouth[i]*font_size
    ctx.fillText( text, i * font_size, letSouth[ i ] * font_size );
        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the letSouth scattered on the Y axis
    if ( letSouth[ i ] * font_size > c.height && Math.random() > 0.975 ) letSouth[ i ] = 0;
        //incrementing Y co-ordinate
    letSouth[ i ]++;
  }
}


function functionBlue() { textColor = "#293CCB"; }
function functionGreen() { textColor = "#3BD83B"; }
function functionRed() { textColor = "#ff0000"; }
function functionPink() { textColor = "#ff00ff"; }
function functionTeal() { textColor = "#00ffff"; }
function functionPurp() { textColor = "#8000ff"; }