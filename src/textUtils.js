/*jshint esversion: 6 */

var textUtils = function() {

    var reverse = function(param) {
        let reversed = [];

        if (isValidParameter(param)) return '';

        param = param.toString().trim();

        for (let left=0,right=param.length-1;left<=right;left++,right--) {
            reversed[left] = param[right];
            reversed[right] = param[left];
        }

        return reversed.join('');
    };

    var reverseRec = function(param, reversed, index) {
        if (index === 1)
            return param[0];

        reversed = param[index-1] + reverseRec(param, reversed, --index);

        return reversed;
    };

    var countWords = function(text) {
        if (isEmpty(text)) return 0;

        let words = text.split(" ");
        return words.length;
    };

    var isValidParameter = function(param) {
        let valid = !param  ||
            (typeof(param) !== "string" && typeof(param) !== "number");

        return valid;
    };

    var isEmpty = function(text) {
        return text == null ||
            text == undefined ||
            text.length == 0;
    };

    return {
        reverse : reverse,
        reverseRec : reverseRec,
        countWords : countWords,
        isEmpty : isEmpty
    };
};

if( typeof module !== "undefined" && "exports" in module) {
    module.exports = textUtils;
}
