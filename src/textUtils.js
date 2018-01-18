var textUtils = function() {

    var reverse = function(param) {
        var reversed = [];

        if (isValid(param)) return '';

        param = param.toString().trim();

        for (var left=0,right=param.length-1;left<=right;left++,right--) {
            reversed[left] = param[right];
            reversed[right] = param[left];
        }

        return reversed.join('');
    }

    var reverseRec = function(param, reversed, index) {
        if (index === 1)
            return param[0];

        reversed = param[index-1] + reverseRec(param, reversed, --index);

        return reversed;
    }

    var isValid = function(param) {
        var valid = !param  ||
            (typeof(param) !== "string" && typeof(param) !== "number");

        return valid;
    }

    return {
        reverse : reverse,
        reverseRec : reverseRec
    }
}

if( typeof module !== "undefined" && "exports" in module) {
    module.exports = textUtils;
}
