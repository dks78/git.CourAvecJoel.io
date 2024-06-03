var object1 ={ value : 10}
var object2 = object1;
var objetc3 = { value : 10};


// constect vs scoope 

const object4 = { 
    a: function(){
        console.log(this);
    }
}

// instantiation 
class player { 
    constructor(name, type) {
        console.log('player',  this);
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi i am  ${this.name}, i'a ${thistype } `);
    }
}
class wizard extends player  { 
    constructor(name, type) {
        super(name, type);
        console.log('wizard', this);

    }
    play (){
        console.log(`WEEEEEE i'm a ${thistype}`);
    }
}

const wizard1 = new wizard ('maledoxle', 'healer');