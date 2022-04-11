const rectangle = require('./rectangle');
var rect = require('./rectangle');

function solveReact(l, b){
    console.log("Solving for rectangle with l = "+ l +" and b = "+ b);
    rect(l, b, (err, rectangle) => {
        if(err){
            console.log("ERROR: ", err.message);
        }
        else{
            console.log("Area is: "+ rectangle.area());
            console.log("Perimeter is: "+ rectangle.perimeter())
        }

    });
}

solveReact(2, 4);
solveReact(3, 5);
solveReact(0, 5);