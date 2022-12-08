var fs = require('fs');
var clicksData = fs.readFileSync('./sample_prefixes.txt').toString().split("\n");

class PrefixService {
  match(str) {
    for (let i = str.length; i >= 0; i--) {
      for (let j = 0; j < clicksData.length; j++) {
        let prefix = str.slice(0, i+1);
        if (this.checkNext(prefix, clicksData[j], i))
          return prefix;
      }
    }
    return "";
  }

  checkNext(str, arr, i) {
    if (i < 0)
      return true;
    if (arr[i] == str[i])
      return this.checkNext(str, arr, i-1);
    return false
  }
}

module.exports = new PrefixService();