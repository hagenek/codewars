const solution = (str) => {
    let arr = [];
    if (str.length % 2 !== 0) {
      for (let i = 0; i < str.length; i += 2) {
          if (i === str.length-1) {
            const underScore = str[i] + "_"
            arr.push(underScore)
          } else {
          arr.push(str[i]+str[i+1]);
          }
        }
    } else {
      for (let i = 0; i < str.length; i += 2) {
        arr.push(str[i]+str[i+1]);
      }
    }
    console.log("Arr", arr)
    return arr
  }
  module.exports= solution