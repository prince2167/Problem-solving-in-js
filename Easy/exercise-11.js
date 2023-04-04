//  Write an ES6 function to reverse a string in JavaScript without using in-built methods.

 const reverseString = (str) => {
   
    let reverseString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reverseString += str[i];
    }
  
    return reverseString;
  };
  
  console.log(reverseString("Hello my name is prince")); 
  