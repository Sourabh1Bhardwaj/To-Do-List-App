
// console.log(module);

// module.exports = "Hello World";

// module.exports = getDate;

// module.exports.getDate = getDate;

// function getDate(){
//     let today = new Date();
    
//         let options = {
//             weekday : "long",
//             day : "numeric",
//             month : "long"
//         }; 
    
//         // let day = today.toLocaleDateString("en-US",options);
//         // return day;
//         return today.toLocaleDateString("en-US",options);
// }

//anonymous function
// module.exports.getDate = function(){
//     let today = new Date();
    
//         let options = {
//             weekday : "long",
//             day : "numeric",
//             month : "long"
//         }; 
    
//         // let day = today.toLocaleDateString("en-US",options);
//         // return day;
//         return today.toLocaleDateString("en-US",options);
// }


exports.getDate = function(){
    const today = new Date();
    
        const options = {
            weekday : "long",
            day : "numeric",
            month : "long"
        }; 
    
        // let day = today.toLocaleDateString("en-US",options);
        // return day;
        return today.toLocaleDateString("en-US",options);
}


//
// module.exports.getDay = getDay;

// function getDay(){
//     let today = new Date();
    
//         let options = {
//             weekday : "long"
//         }; 
    
//         // let day = today.toLocaleDateString("en-US",options);
//         // return day;
//         return today.toLocaleDateString("en-US",options);
// }
// console.log(module.exports);



// module.exports.getDay = function(){
//     let today = new Date();
    
//         let options = {
//             weekday : "long"
//         }; 
    
//         // let day = today.toLocaleDateString("en-US",options);
//         // return day;
//         return today.toLocaleDateString("en-US",options);
// }
// console.log(module.exports);


//
exports.getDay = function(){
    const today = new Date();
    
        const options = {
            weekday : "long"
        }; 
    
        // let day = today.toLocaleDateString("en-US",options);
        // return day;
        return today.toLocaleDateString("en-US",options);
}
console.log(module.exports);
