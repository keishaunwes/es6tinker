
favMovie() 
favMovie(`4 brothers`)
favMovie(`Scream`) 
favMovie(`Bad boys`)
favMovie(`Kallie`, `Forest Gump`) 
favMovie(`Forest Gump`, `Richie`) 
favMovie(``, ``) 
function favMovie(movie, name = `world`) {
    console.log(`My name is ${name} and my favorite movie is ${movie}.`)
  
};



let favMov = (movi, nam) => 
    console.log(`My name is ${nam} and my favorite movie is ${movi}.`);
favMov(`Nemo`, `Liam`);

let favMoves = (movies, names) => { 
    console.log(`My name is ${names} and my favorite movie is ${movies}.`);
};
favMoves(`Nemo`, `Liam`);




var game = `Chase Graffeo`; 

var getFirstName = (string) => {
    console.log(string.split(` `)[0]);
};
getFirstName(game);


var getFirstNameConcise = string => (console.log(string.split(` `)[0]));
getFirstNameConcise(game); 

let number = (x, y) => ({ 
    product: x * y,
    exponent: x ** y,
    sum: x + y,
    difference: x - y,
    quotent: x / y,
});

let result = number(4, 2); 
console.log(result);

let resu = number(5, 2);
console.log(resu);

let resul = number(6, 2);
console.log(resul);


function me(name, location, favFood) {
    console.log(name, location, favFood);
}

let array = [`Keishaun`, `Chicago`, `Ribs`];

me(...array);

let im = `Keishaun`

let thisFunc = () => {
    for (i = 0; i <= 4; i++)
        console.log([...im][i]);
    
};
thisFunc(im);