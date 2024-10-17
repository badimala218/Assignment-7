//STEP 1
const favoriteMovies = ["Strange Magic", "Earwig and the Witch", 
    "Dreamgirls", "The Big Year", "Zootopia"];
console.log(favoriteMovies[1]);

//STEP 2
let movies = new Array(5);
movies[0] = "Strange Magic";
movies[1] = "Earwig and the Witch";
movies[2] = "Dreamgirls";
movies[3] = "The Big Year";
movies[4] = "Zootopia";
console.log(movies[0]);

//STEP 3
movies = new Array(5);
movies[0] = "Strange Magic";
movies[1] = "Earwig and the Witch";
movies[2] = "Book of Life";
movies[3] = "Dreamgirls";
movies[4] = "The Big Year";
movies[5] = "Zootopia";
console.log(movies.length);

//STEP 4
movies = [];
movies[0] = "Strange Magic";
movies[1] = "Earwig and the Witch";
movies[2] = "Dreamgirls";
movies[3] = "The Big Year";
movies[4] = "Zootopia";
delete movies[0];
console.log(movies);

//STEP 5
movies = [];
movies[0] = "Strange Magic";
movies[1] = "Earwig and the Witch";
movies[2] = "Dreamgirls";
movies[3] = "The Big Year";
movies[4] = "Zootopia";
movies[5] = "Stepford Wives";
movies[6] = "Anastasia";
for (let i = 0; i < movies.length; i++)
{
    console.log(movies[i]);
}

//STEP 6
// Copied from Step 5
console.log("\nCopied from Step 5");
movies = [];
movies[0] = "Strange Magic";
movies[1] = "Earwig and the Witch";
movies[2] = "Dreamgirls";
movies[3] = "The Big Year";
movies[4] = "Zootopia";
movies[5] = "Stepford Wives";
movies[6] = "Anastasia";
for (let i = 0; i < movies.length; i++)
{
    console.log(movies[i]);
}
console.log("End Copy 5");
console.log("");
// Copied from Step 5

for (i in movies) 
{
    if (movies.hasOwnProperty(i)) 
    {
        console.log(movies[i]);
    }
}
//STEP 7
// Copied from Step 5
console.log("\nCopied from Step 5");
movies = [];
movies[0] = "Strange Magic";
movies[1] = "Earwig and the Witch";
movies[2] = "Dreamgirls";
movies[3] = "The Big Year";
movies[4] = "Zootopia";
movies[5] = "Stepford Wives";
movies[6] = "Anastasia";
for (let i = 0; i < movies.length; i++)
{
    console.log(movies[i]);
}
console.log("End Copy 5");
console.log("");
// Copied from Step 5

movies = movies.sort();
for (i in movies) 
{
    if (movies.hasOwnProperty(i)) 
    {
        console.log(movies[i]);
    }
}

//STEP 8
// Copied from Step 5
console.log("\nCopied from Step 5");
movies = [];
movies[0] = "Strange Magic";
movies[1] = "Earwig and the Witch";
movies[2] = "Dreamgirls";
movies[3] = "The Big Year";
movies[4] = "Zootopia";
movies[5] = "Stepford Wives";
movies[6] = "Anastasia";
for (let i = 0; i < movies.length; i++)
{
    console.log(movies[i]);
}
console.log("End Copy 5");
console.log("");
// Copied from Step 5

let leastFavMovies = [];
leastFavMovies[0] = "Elf";
leastFavMovies[1] = "Cars 2";
leastFavMovies[2] = "Burlesque";
console.log("\nMovies I like:");
console.log("");
let logMovies = function(movie)
{
    console.log(movie);
}
movies.forEach(logMovies);
console.log("\nMovies I regret watching:");
console.log("");
leastFavMovies.forEach(logMovies);
console.log("");

//STEP 9
// Copied from Step 8
console.log("\nCopied from Step 8");
movies = [];
movies[0] = "Strange Magic";
movies[1] = "Earwig and the Witch";
movies[2] = "Dreamgirls";
movies[3] = "The Big Year";
movies[4] = "Zootopia";
movies[5] = "Stepford Wives";
movies[6] = "Anastasia";
for (let i = 0; i < movies.length; i++)
{
    console.log(movies[i]);
}
leastFavMovies = [];
leastFavMovies[0] = "Elf";
leastFavMovies[1] = "Cars 2";
leastFavMovies[2] = "Burlesque";
console.log("\nMovies I like:");
console.log("");
logMovies = function(movie)
{
    console.log(movie);
}
movies.forEach(logMovies);
console.log("\nMovies I regret watching:");
console.log("");
leastFavMovies.forEach(logMovies);
console.log("");
console.log("End Copy 8");
console.log("");
// Copied from Step 8

let concatArray = movies.concat(leastFavMovies).sort().reverse();
console.log(concatArray);

//STEP 10
// Copied from Step 9
console.log("\nCopied from Step 9");
movies = [];
movies[0] = "Strange Magic";
movies[1] = "Earwig and the Witch";
movies[2] = "Dreamgirls";
movies[3] = "The Big Year";
movies[4] = "Zootopia";
movies[5] = "Stepford Wives";
movies[6] = "Anastasia";
for (let i = 0; i < movies.length; i++)
{
    console.log(movies[i]);
}
leastFavMovies = [];
leastFavMovies[0] = "Elf";
leastFavMovies[1] = "Cars 2";
leastFavMovies[2] = "Burlesque";
console.log("\nMovies I like:");
console.log("");
logMovies = function(movie)
{
    console.log(movie);
}
movies.forEach(logMovies);
console.log("\nMovies I regret watching:");
console.log("");
leastFavMovies.forEach(logMovies);
console.log("");
concatArray = movies.concat(leastFavMovies).sort().reverse();
console.log(concatArray);
console.log("End Copy 9");
console.log("");
// Copied from step 9

console.log(concatArray.pop());
