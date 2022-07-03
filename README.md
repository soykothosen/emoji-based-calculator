# emoji-based-calculator

Fresher Coding Challenge tasks for Fresher Developer Job Post of Link Staff Co. Ltd.

To see the application please visit - [https://emoji-calculator-soykot.code-studio4.com/](https://emoji-calculator-soykot.code-studio4.com/)

![Emoji Calculator](https://emoji-calculator-soykot.code-studio4.com/emoji-cal.PNG)

## Tools & Technology
### Frontend Development

- Bootstrap
- HTML, CSS, JavaScript
- jQuery

### Backend Development

- Node Js
- Express Js

## Development Approach

**Frontend Code Structure** 

- *css*
  - *custom.css*
- *js*
  - *script.js*
- *index.html*


In **custom.css** file I import custom google font and create two class for the font family

In **script.js** file I write the code for getting value after clicking on a button of calculator. Based on click I create here functions. And when anyone click the "=" Button , a post method is performed with two operand and a operator. **The result calculate in serverside and send back a response. The response data is shown in the calculator display.**

**index.html** file is mainly work for UI. I use bootrap in this file to design the calculator UI.

**Backend Code Structure**

- *EmojiAppServer*
  - *node_modules*
  - *index.js*
  - *package.json*
  - *package-lock.json*


Here **index.js** is responsible for calculation. This file run on server and send result to the frontend via JSON over HTTP Protocol.

**index.js** (Server Side)

``` js
var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.urlencoded({ extended: true}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});


app.post("/calculate",function(req,res){

    var { operand1, operand2, operation } = req.body

    var result

    if(operation == "add"){

        result = parseInt(operand1) + parseInt(operand2)

        res.send("The result is "+result);

    }

    if(operation == "sub"){

        result = parseInt(operand1) - parseInt(operand2)

        res.send("The result is "+result);

    }

    if(operation == "mul"){

        result = parseInt(operand1) * parseInt(operand2)

        res.send("The result is "+result);

    }

    if(operation == "divi"){

        result = parseInt(operand1) / parseInt(operand2)

        res.send("The result is "+result);

    }
    
    
}) // end of calculate route




app.listen('8081', function(err){
	if(err){
		throw err;
	} else{
	console.log("Server run on port http://localhost:8081");
    }
});

```

Some Part of Code of **script.js** to communicate with the server side

``` js

// Equal Button and api call

function Equal (){


    //var route = "https://api.emoji-calculator-soykot.code-studio4.com/calculate"
    var route = "http://localhost:8081/calculate"

    // Function for post method
    function postingToserver( value ){

        $.post(route,
            {
            
                operand1: firstOprnd,
                operand2: oprnd2,
                operation: value, 
    
            },
    
            function(data, status){
                
                console.log(data);
    
                $("#resultDisplay").text(data);
    
                display = "";
                oprnd1="", oprnd2="", operator=null;
                firstOprnd=null;
                result = null;
        
            });

    } // end of function

    if(operator == "add"){

        postingToserver("add")

    }

    if(operator == "sub"){

        postingToserver("sub")

    }

    if(operator == "mul"){

        postingToserver("mul")

    }


    if(operator == "divi"){

        postingToserver("divi")

    }


}  // end of equal function

```


#### Thanks a lot!