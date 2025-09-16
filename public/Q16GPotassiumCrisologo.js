process.stdin.on('data', function (data)  {
  let num = Number(data.toString().trim()); // convert data input into a number do not change anything here. Do not remove this line.

  /* - Please work with the num variable in your code.

      - No HTML nor CSS needed.  Output is just through console.log

      - No prompt, getElementById, alert nor confirm

      - just focus on the stated requirements

*/

 // -------------------------------  type your answers below -----------------------------------------/
var d = 0, x = 1;
  while(x <= num){
    console.log(x);
    d++;
    x = x + d;
  }
 // --------------------------------- end of your answer ----------------------------------------------/

  process.exit();  // stops the process do not remove
});// do not remove

