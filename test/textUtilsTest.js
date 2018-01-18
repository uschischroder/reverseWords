if (!reverse) {
    var reverse = require('../src/reverseString');
}

QUnit.test( 'Test reverse() returns empty for empty param.', function( assert ) {
    var result = reverse('');
    assert.equal(result, '')
});

QUnit.test( 'Test reverse() returns null for a null param.', function( assert ) {
    var result = reverse(null);
    assert.equal(result, '')
});

QUnit.test( 'Test reverse() removes trailing spaces.', function( assert ) {
    result = reverse('   ');
    assert.equal(result, '');

    result = reverse(' aaa  ');
    assert.equal(result, 'aaa');

    result = reverse('  the bird is flying.  ');
    assert.equal(result, '.gniylf si drib eht');
});

QUnit.test( 'Test reverse() returns empty for boolean param.', function( assert ) {
    var result = reverse(false);
    assert.equal(result, '');

    var result = reverse(true);
    assert.equal(result, '')
});

QUnit.test( 'Test reverse() returns correct reversed values for single words.', function( assert ) {
    var result = reverse('coffee');
    assert.equal(result, 'eeffoc');

    result = reverse('house');
    assert.equal(result, 'esuoh');

    result = reverse('bird');
    assert.equal(result, 'drib');

    result = reverse('123');
    assert.equal(result, '321');
});

QUnit.test( 'Test reverse() returns correct for a numeric param.', function( assert ) {
    var result = reverse(122223);
    assert.equal(result, '322221');
});

QUnit.test( 'Test reverse() returns correct inverted phrase.', function( assert ) {
    var result = reverse('The house is falling down!');
    assert.equal(result, '!nwod gnillaf si esuoh ehT');

    result = reverse('The coffee is hot!!!');
    assert.equal(result, '!!!toh si eeffoc ehT');
});

QUnit.test( 'Test reverse() returns correct palindrome.', function( assert ) {
    var result = reverse('rotator');
    assert.equal(result, 'rotator');

    result = reverse('dewed');
    assert.equal(result, 'dewed');
});
