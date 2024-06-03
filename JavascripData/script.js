let database = [
    {
        username: "robert",
        password: "supersecret"
    },
    {
        username: "sally",
        password: " 14663"
    },
    {
        username: "say",
        password: " 44663"
    }
];

var newFeed = [
    {
        username: "boby",
        timeline: "blabadodo"
    },
    {
        username: "saallyy",
        timeline: "pokemon abangergfdsf"
    }
];




var userNamePrompt = prompt(" quel est votre prenom");
var passwordPrompt = prompt(" quel est votre motdepass ");


function valid(username, password){
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true;
        }
    }
return false;
}



function sign(username, password) {
    console.log(valid(username,password));
    // for (var i = 0; i < database.length; i++) {
    //     if (database[i].username === username &&
    //         database[i].password === password) {
    //         console.log(newFeed );
    //     } else {
    //         alert("vous n'avez pas le droit d'acceder a ce site");
    //     }
    // }

    // if (user === database[0].username &&
    //     pass === database[0].password)
    //     console.log(newFeed);
    // else {
    //     alert("sorry, wrong username and password ");
    // }
}
sign(userNamePrompt, passwordPrompt);
