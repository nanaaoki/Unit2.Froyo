var input = prompt("Please input your flavor order(s) here, separated by commas.")
var array = input.split(",");

console.log(array);

let flavors = array;
  

function mapOrder(flavors) {
    const map = {};
    for (let i = 0; i < flavors.length; i++) {
        if (map[flavors[i]]) {
            map[flavors[i]]++;
        } else {
            map[flavors[i]] = 1;
        }
    }
    return map;
}

console.log("mapOrder result: ", mapOrder(flavors));

