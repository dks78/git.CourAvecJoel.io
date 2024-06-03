const basket = [ 'Apples' , 'maridoene', 'mordekekais' , ' grappes ']
const detailledBasket = { 
    apple : 5,
    maridoene : 2,
    mordekais : 3,
    grappes : 1,
}

//1
for (let i = 0 ; i < basket.length; i++ ){
    console.log(basket[i]);
}

//2
// basket.foreEach(item => {
//     console.log(item);
// });

// for of 
 for ( item of basket){
    console.log(item);
 }
// for in - properties
for ( item in detailledBasket){ 
    console.log(item);
}


