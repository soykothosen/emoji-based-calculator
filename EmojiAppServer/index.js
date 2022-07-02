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