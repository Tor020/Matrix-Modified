    //this calls the draw function every .35 seconds
        setInterval(draw, 35);

    //geting canvas by id c
        var c = document.getElementById("c");
        var ctx = c.getContext("2d");

    //making the canvas full screen
        c.height = window.innerHeight;
        c.width = window.innerWidth;
    //chinese characters - taken from the unicode charset
        var matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%';
    //converting the string into an array of single characters
        matrix = matrix.split("");

    //Setting the fontsize that is used in the col
        var font_size = 10;
        var columns = c.width/font_size; 
            //number of columns for the rain
        var rows = c.height/font_size;
            //test variable for the rows

     //this creates an empty array 
        var drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
        for(var x = 0; x < columns; x++)
                drops[x] = 1; //this value refers to where on the screen the characters start their initial descent. the 1 basically puts it 1 section from the very top of the page. a -1 would make it start above the page

        //drawing the characters
        function draw()
        {

            //Black BG for the canvas
            //translucent amount of fade out on the page. The 4th value is opacity and the higher the value the less remains on the page
            ctx.fillStyle = "rgba(0, 0, 0, .25)";
            ctx.fillRect(0, 0, c.width, c.height);

            ctx.fillStyle = "#9590f4"; //green text
            ctx.font = font_size + "px arial";


            //looping over drops
            for(var i = 0; i < drops.length; i++)
            {
                //a random chinese character to print
                var text = matrix[Math.floor(Math.random()*matrix.length)];
                //x = i*font_size, y = value of drops[i]*font_size
                ctx.fillText(text, i*font_size, drops[i]*font_size);

                //sending the drop back to the top randomly after it has crossed the screen
                //adding a randomness to the reset to make the drops scattered on the Y axis
                if(drops[i]*font_size > c.height && Math.random() > 0.975)
                    drops[i] = 0;

                //incrementing Y coordinate
                drops[i]++;
            }
        }

