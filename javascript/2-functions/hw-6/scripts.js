// recipe object
function fixStart(str) {
    let target = new RegExp(str.charAt(0), 'g');
    return str.charAt(0) + str.substring(1).replace(target, '*');
}

console.log(fixStart('babble'));
console.log(fixStart('turtle'));