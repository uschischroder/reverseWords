if (!textUtils) {
    var textUtils = require('../src/textUtils');
}
var textUtilsInstance = new textUtils();

QUnit.test( 'Test reverse() returns empty for empty param.', function( assert ) {
    var result = textUtilsInstance.reverse('');
    assert.equal(result, '');
});

QUnit.test( 'Test reverse() returns null for a null param.', function( assert ) {
    var result = textUtilsInstance.reverse(null);
    assert.equal(result, '');
});

QUnit.test( 'Test reverse() removes trailing spaces.', function( assert ) {
    result = textUtilsInstance.reverse('   ');
    assert.equal(result, '');

    result = textUtilsInstance.reverse(' aaa  ');
    assert.equal(result, 'aaa');

    result = textUtilsInstance.reverse('  the bird is flying.  ');
    assert.equal(result, '.gniylf si drib eht');
});

QUnit.test( 'Test reverse() returns empty for boolean param.', function( assert ) {
    var result = textUtilsInstance.reverse(false);
    assert.equal(result, '');

    result = textUtilsInstance.reverse(true);
    assert.equal(result, '');
});

QUnit.test( 'Test reverse() returns correct reversed values for single words.', function( assert ) {
    var result = textUtilsInstance.reverse('coffee');
    assert.equal(result, 'eeffoc');

    result = textUtilsInstance.reverse('house');
    assert.equal(result, 'esuoh');

    result = textUtilsInstance.reverse('bird');
    assert.equal(result, 'drib');

    result = textUtilsInstance.reverse('123');
    assert.equal(result, '321');
});

QUnit.test( 'Test reverse() returns correct for a numeric param.', function( assert ) {
    var result = textUtilsInstance.reverse(122223);
    assert.equal(result, '322221');
});

QUnit.test( 'Test reverse() returns correct inverted phrase.', function( assert ) {
    var result = textUtilsInstance.reverse('The house is falling down!');
    assert.equal(result, '!nwod gnillaf si esuoh ehT');

    result = textUtilsInstance.reverse('The coffee is hot!!!');
    assert.equal(result, '!!!toh si eeffoc ehT');
});

QUnit.test( 'Test reverse() returns correct palindrome.', function( assert ) {
    var result = textUtilsInstance.reverse('rotator');
    assert.equal(result, 'rotator');

    result = textUtilsInstance.reverse('dewed');
    assert.equal(result, 'dewed');
});
