function reverse(param) {
    var reversed = [];

    if (isValid(param)) return '';
    /*for (var i=param.length-1;i>=0;i--) {
        reversed += param[i];
    };*/

    param = param.toString().trim();

    for (var left=0,right=param.length-1;left<=right;left++,right--) {
        reversed[left] = param[right];
        reversed[right] = param[left];
    }

    return reversed.join('');
}

function reverseRec(param, reversed, index) {
    if (index === 1)
        return param[0];

    reversed = param[index-1] + reverseRec(param, reversed, --index);
    return reversed;
}

function isValid(param) {
    var valid = !param  ||
        (typeof(param) !== "string" && typeof(param) !== "number");

    return valid;
}

if (typeof module !== 'undefined' && 'exports' in module) {
    module.exports = reverse;
}
/*
var result = reverse('coffees');
var result2 = reverse('full');
*/