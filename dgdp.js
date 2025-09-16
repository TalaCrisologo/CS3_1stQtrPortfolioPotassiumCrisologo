/* let x = 2;
while (x <= 20){
    if(x % 2 == 0){
        console.log(x);
    }
    x++;
}
    */

var i, j, k;

for(i = 1; i <= 5; i++){
    for(j = 5; j > 1; j--){
        process.stdout.write(" ");
    }
    for(k = 1; k <= 5; k++){
        console.log("*");
    }
}