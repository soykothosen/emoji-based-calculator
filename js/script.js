
// Calculator display

var display="";

function Display( value ){

    $("#display").text(value);

} // end of display function


//getting value from 1-9 number button

var oprnd1="", oprnd2="", operator=null;

var firstOprnd=null;

function number (value){

    $("#resultDisplay").text(""); // after calculating 1 time it will clear the display

    var numberId = "#number"+value+"Button";

    //console.log("Number Id is "+numberId);

    if(firstOprnd==null){

        oprnd1 = oprnd1 +  $(numberId).text();

        console.log("Operand 1 is "+oprnd1);

        display = display + $(numberId).text();
        Display(display);

    } else{

        oprnd2 = oprnd2 +  $(numberId).text();
        console.log("Operand 2 is "+oprnd2);
        display = display + $(numberId).text();
        Display(display);
    }

}  // end of number function

// getting value from Zero Button

function Zero (){

    $("#resultDisplay").text(""); // after calculating 1 time it will clear the display
 
    if(firstOprnd==null){

        //console.log(oprnd1.length);


        Escape1:{

            if(oprnd1[0] == 0 &&  $("#zeroButton").text() == 0 && oprnd1.length == 1  ){
                break Escape1;
            }

            oprnd1 = oprnd1 +  $("#zeroButton").text();

            console.log("Operand 1 is "+oprnd1);
            display = display + $("#zeroButton").text();
            Display(display);

        } // end of escape1


    } else{

        Escape2: {

            if(oprnd2[0] == 0 &&  $("#zeroButton").text() == 0 && oprnd2.length == 1 ){
                break Escape2;
            }

            oprnd2 = oprnd2 +  $("#zeroButton").text();
            console.log("Operand 2 is "+oprnd2);
            display = display + $("#zeroButton").text();
            Display(display);

        } // end of escape2

       
    }
    
  };

// C Button

  function ButtonC (){

    $("#resultDisplay").text(""); // after calculating 1 time it will clear the display


     display = "";
     oprnd1="", oprnd2="", operator=null;
     firstOprnd=null;

    Display(display);

  }  // end of buttonc function


  // for operators button

  function operatorButton(value){


    console.log(oprnd1.length)

    if(oprnd1.length>0){

        firstOprnd = oprnd1;
        //oprnd1 = ''


        if(operator == null){

            if(value == "add"){
                display = display + $("#addButton").text();
                operator = "add";
                Display(display);
            }

            if(value == "sub"){
                display = display + $("#subButton").text();
                operator = "sub";
                Display(display);
            }

            if(value == "mul"){
                display = display + $("#mulButton").text();
                operator = "mul";
                Display(display);
            }

            if(value == "divi"){
                display = display + $("#divisionButton").text();
                operator = "divi";
                Display(display);
            }



        }

        

    }
    

} //  // end of operator function



// Equal Button and api call

function Equal (){



    if(operator == "add"){


        $.post("https://api.emoji-calculator-soykot.code-studio4.com/calculate",
        {
        
            operand1: firstOprnd,
            operand2: oprnd2,
            operation: "add", 

        },

        function(data, status){
            
            console.log(data);

            $("#resultDisplay").text(data);

            display = "";
            oprnd1="", oprnd2="", operator=null;
            firstOprnd=null;
            result = null;
    
        });

       

    }

    if(operator == "sub"){


        $.post("https://api.emoji-calculator-soykot.code-studio4.com/calculate",
        {
        
            operand1: firstOprnd,
            operand2: oprnd2,
            operation: "sub", 

        },

        function(data, status){
            
            console.log(data);

            $("#resultDisplay").text(data);

            display = "";
            oprnd1="", oprnd2="", operator=null;
            firstOprnd=null;
            result = null;
    
        });

       

    }

    if(operator == "mul"){


        $.post("https://api.emoji-calculator-soykot.code-studio4.com/calculate",
        {
        
            operand1: firstOprnd,
            operand2: oprnd2,
            operation: "mul", 

        },

        function(data, status){
            
            console.log(data);

            $("#resultDisplay").text(data);

            display = "";
            oprnd1="", oprnd2="", operator=null;
            firstOprnd=null;
            result = null;
    
        });

       

    }


    if(operator == "divi"){


        $.post("https://api.emoji-calculator-soykot.code-studio4.com/calculate",
        {
        
            operand1: firstOprnd,
            operand2: oprnd2,
            operation: "divi", 

        },

        function(data, status){
            
            console.log(data);

            $("#resultDisplay").text(data);

            display = "";
            oprnd1="", oprnd2="", operator=null;
            firstOprnd=null;
            result = null;
    
        });

       

    }





}  // end of equal function




// // Equal Button - frontend coding

// function Equal (){

//     var result;

//     if(operator == "add"){
//         result = parseInt(firstOprnd) + parseInt(oprnd2);
//         $("#resultDisplay").text("The result is "+ result);

//         display = "";
//         oprnd1="", oprnd2="", operator=null;
//         firstOprnd=null;
//         result = null;

//     }

//     if(operator == "sub"){
//         result = parseInt(firstOprnd) - parseInt(oprnd2);
//         $("#resultDisplay").text("The result is "+ result);

//         display = "";
//         oprnd1="", oprnd2="", operator=null;
//         firstOprnd=null;
//         result = null;

//     }

//     if(operator == "mul"){
//         result = parseInt(firstOprnd) * parseInt(oprnd2);
//         $("#resultDisplay").text("The result is "+ result);

//         display = "";
//         oprnd1="", oprnd2="", operator=null;
//         firstOprnd=null;
//         result = null;

//     }

//     if(operator == "divi"){
//         result = parseInt(firstOprnd) / parseInt(oprnd2);
//         $("#resultDisplay").text("The result is "+ result);

//         display = "";
//         oprnd1="", oprnd2="", operator=null;
//         firstOprnd=null;
//         result = null;

//     }



// }  // end of equal function


