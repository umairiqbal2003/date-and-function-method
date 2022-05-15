// alert("hello world");

///////////////      Date Methods //////////////////////

//////////    Question no 1 ////////////////////

// var now = new Date();

// document.write(now);

///////////////    Question no 2 ////////////

// var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var now = new Date();
// var monthName=months[now.getMonth()]
// alert("Current Month: "+ monthName);


///////////    Question no 3 /////////////////////////////////


// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// var now = new Date();

// var dayName = days[now.getDay()]

// alert( "Today is : " + dayName.slice(0,3));


/////////////    Question no 4 ///////////////

// var date = new Date();
// switch(date.getDay()){
//     case 0: alert("Its Funday!"); break;
//     case 6: alert("Its Funday !"); break;
//     default: alert("any other week day");
// }



//////////    Question no   6  /////////////////

// var today = new Date();
// var pastDate = new Date(" 1 Jan  1970");

// var msToday = today.getTime();
// var mspastDate = pastDate.getTime();

// var msDiff = msToday - mspastDate;

// var diff = msDiff/ (1000*60);
// document.write("Current Date : " + today+ "</br>"+ "Elapsed Miliseconds Since Jan 1 1970 : " + msDiff+"</br>"+
// "Elapsed Minutes Since Jan 1 1970 : " + diff);


////////////   Question no 7 ///////////////////////



// var date = new Date();
// switch(date.getTime()){
//     case 12: alert("Its Funday!"); break;
//     case 6: alert("Its Funday !"); break;
//     default: alert("any other week day");
// }



//////////////////////////////            Fucntions /////////////////////////////////


///////////   Question no 1 ///////////

// function currentdate(){
//     var now = new Date()
//     document.write(now);
// }

// currentdate();

////////////////////////      Question no 2 /////////////////////////

// function greets(fname,lname){

//     var fullname = fname+lname
//     alert("Hello: "+fullname);
// }
// greets("Umair ","Iqbal");

//////////////////////   Question no 3 ///////////////

// function greet(sum1,sum2){
    

//     var  sum = sum1 + sum2

//     // document.write(sum)

//     return sum1 + sum2
// }
//  sum1 = +prompt("enter your first number")
//  sum2 = +prompt("enter your second number")

//  var value = greet(sum1,sum2);

//  document.write(value);


//////////////////////////        Question no 4 ////////////////////////////////

// function abc(){
  
//     var num1 = +prompt("Enter First Number")
//     var operator = prompt("Enter any operator  '+ - * /' ")
//     var num2 = +prompt("Enter Last Number ")
//     var result;
//     if (operator=='+'){
//    result=num1+num2;
//     }
//     else if (operator=='-'){
//     result=num1-num2;
//     }
//     else if (operator=='*'){
//     result=num1*num2;
//     }
//     else if (operator=='/'){
//     result=num1/num2;
//     }
//     alert(result);
//     }
//     abc();
  

 ///////////////////////////   Question no 5 ////////////////////////////

//  function square(){

//     var a = +prompt("enter your number")
    
//      var b = a * a

//      document.write(b)
//  }
//  square();

/////////////////////////////      Question no 7 //////////////////////////

// var a = +prompt("Enter start number")
//  var b = +prompt("Enter end number")
// for(i = a;i <= b;i++){
// document.write(i + "<br>");
// }
// abc();