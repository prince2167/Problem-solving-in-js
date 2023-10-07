const word = "apple";
// output ---> a   first non repeating

const firstNonrepeat = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let count = 0;

      for (let j = 0; j < str.length; j++)
      {
        if (str[i] === str[j]) {
          count+= 1;
        }
      }

      if (count < 2) {
        result = str[i];
        break;
      }
    }
    return result;
};


// second way 

const firstNonRepeat = (str) => {
  let obj = {};
  for (let key of str) {
    if (obj[key]) {
      obj[key] += 1;
    } else {
      obj[key] = 1;
    }
  }

  for (let key in obj) {
    if (obj[key] === 1) {
      return key
    }
  }
};

console.log(firstNonrepeat(word));
console.log(firstNonRepeat(word));
