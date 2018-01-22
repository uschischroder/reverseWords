/*jshint esversion: 6 */

if (!textUtils) {
    var textUtils = require('../src/textUtils');
}
var textUtilsInstance = new textUtils();

QUnit.test('Test reverse() returns empty for empty param.', function( assert ) {
    var result = textUtilsInstance.reverse('');
    assert.equal(result, '');
});

QUnit.test('Test reverse() returns null for a null param.', function( assert ) {
    var result = textUtilsInstance.reverse(null);
    assert.equal(result, '');
});

QUnit.test('Test reverse() removes trailing spaces.', function( assert ) {
    result = textUtilsInstance.reverse('   ');
    assert.equal(result, '');

    result = textUtilsInstance.reverse(' aaa  ');
    assert.equal(result, 'aaa');

    result = textUtilsInstance.reverse('  the bird is flying.  ');
    assert.equal(result, '.gniylf si drib eht');
});

QUnit.test('Test reverse() returns empty for boolean param.', function( assert ) {
    var result = textUtilsInstance.reverse(false);
    assert.equal(result, '');

    result = textUtilsInstance.reverse(true);
    assert.equal(result, '');
});

QUnit.test('Test reverse() returns correct reversed values for single words.', function( assert ) {
    var result = textUtilsInstance.reverse('coffee');
    assert.equal(result, 'eeffoc');

    result = textUtilsInstance.reverse('house');
    assert.equal(result, 'esuoh');

    result = textUtilsInstance.reverse('bird');
    assert.equal(result, 'drib');

    result = textUtilsInstance.reverse('123');
    assert.equal(result, '321');
});

QUnit.test('Test reverse() returns correct for a numeric param.', function( assert ) {
    var result = textUtilsInstance.reverse(122223);
    assert.equal(result, '322221');
});

QUnit.test('Test reverse() returns correct inverted phrase.', function( assert ) {
    var result = textUtilsInstance.reverse('The house is falling down!');
    assert.equal(result, '!nwod gnillaf si esuoh ehT');

    result = textUtilsInstance.reverse('The coffee is hot!!!');
    assert.equal(result, '!!!toh si eeffoc ehT');
});

QUnit.test('Test reverse() returns correct palindrome.', function( assert ) {
    var result = textUtilsInstance.reverse('rotator');
    assert.equal(result, 'rotator');

    result = textUtilsInstance.reverse('dewed');
    assert.equal(result, 'dewed');
});

QUnit.test('Test countWords() returns 0 for empty, null or undefined text', function ( assert ) {
    var wordCount = textUtilsInstance.countWords('');
    assert.equal(wordCount, 0);

    wordCount = textUtilsInstance.countWords(null);
    assert.equal(wordCount, 0);

    wordCount = textUtilsInstance.countWords(undefined);
    assert.equal(wordCount, 0);
});

QUnit.test('Test countWords() returns correct count value for small texts', function ( assert ) {
    var wordCount = textUtilsInstance.countWords("One");
    assert.equal(wordCount, 1);

    wordCount = textUtilsInstance.countWords("This is three");
    assert.equal(wordCount, 3);

    wordCount = textUtilsInstance.countWords("Hummm, a lot of randomly writen words! How many do we have here?");
    assert.equal(wordCount, 13);
});

QUnit.test('Test countWords() returns correct valur for long text', function ( assert ) {
    var wordCount = textUtilsInstance.countWords(`Kurz vor Beginn seines zweiten Schuljahres in der Zaubererschule;
         Hogwarts erhält Harry Potter in den Ferien bei seinen Verwandten, den Dursleys, Besuch vom Hauselfen Dobby.
        Dieser versucht, Harry davon abzubringen, nach Hogwarts zurückzukehren, weil ihm dort großes Unheil drohe.
        Dobby gibt auch zu, die Briefe seiner Freunde aus Hogwarts, Ron Weasley und Hermine Granger, den ganzen Sommer
        lang abgefangen zu haben, um Harry vorzutäuschen, sie hätten ihn vergessen. Da Harry sich weigert, auf Dobby
        zu hören, bringt dieser ihn in Schwierigkeiten mit seinem Onkel Vernon. Daraufhin sperrt Mr. Dursley Harry in
        dessen Zimmer ein, um ebenfalls seine Rückkehr nach Hogwarts zu verhindern. Harry wird jedoch in einer
        Nacht-und-Nebel-Aktion von den Weasley-Brüdern Ron, Fred und George, die mit einem fliegenden Auto an seinem
        Fenster erscheinen, gerettet. Als es Ron und Harry wenige Tage später nicht möglich ist, auf den magischen
        Bahnsteig 9 ¾ zum Hogwarts-Express zu gelangen, behelfen sie sich erneut dem fliegenden Auto von Rons Vater.
        In Hogwarts angekommen landen sie in der peitschenden Weide, die das Auto demoliert, wobei Rons Zauberstab
        zerbrochen wird.

        In diesem Schuljahr übernimmt der egozentrische Professor Lockhart, der sich, wie sich später herausstellt,
        seinen Ruhm als großer Zauberer nur ergaunert hat und den Kindern nichts beibringen kann, die Stelle als Lehrer
        im Fach Verteidigung gegen die dunklen Künste. Harry beginnt eine seltsame Stimme zu hören, die außer ihm niemand
        hören kann. Gleichzeitig wird bekannt, dass die sogenannte „Kammer des Schreckens“ wieder geöffnet wurde, was die
        gesamte Schule in Unruhe versetzt. Während eines Duells zur Demonstration und Übung des Entwaffnungszaubers,
        beaufsichtigt durch die Professoren Snape und Lockhart, stellt sich heraus, dass Harry die Schlangensprache
        Parsel beherrscht. Durch eine Verkettung von unglücklichen Umständen wird er daraufhin verdächtigt, der
        angekündigte „Erbe Slytherins“ zu sein, der alle Schlammblüter – Zauberer, die wie Hermine von Muggeln
        abstammen – töten will. Allerdings sind die aufgefundenen Opfer nie tot, sondern nur versteinert.

        Um seine Unschuld zu beweisen, stellt Harry gemeinsam mit Hermine und Ron Nachforschungen über die
        „Kammer des Schreckens“ an und findet heraus, dass diese sich in Hogwarts befindet. Von dem verzauberten Tagebuch
        des ehemaligen Schülers Tom Riddle erfährt Harry, dass dieser zur Zeit der ersten Öffnung der Kammer auf die
        Hogwarts Schule ging. Auch scheint es zunächst, dass Rubeus Hagrid seinerzeit die Kammer des Schreckens geöffnet
        habe. Doch das Tagebuch wird ihm kurz darauf gestohlen. Auch Hermine fällt dem unbekannten Angreifer zum Opfer
        und wird versteinert. Harry und Ron finden heraus, dass sich der Eingang zur Kammer in einem der Mädchenbäder
        befindet. Zusammen mit Professor Lockhart, der ihnen helfen soll, begeben sie sich hinein. Da der Professor ein
        Schwindler ist und nicht eine seiner glorreichen Taten selbst begangen hat, versucht er nun sich mithilfe von
        Rons Zauberstab aus seiner Lage zu befreien. Bei dem Versuch mit dem kaputten Stab die beiden mit einem
        Vergessenszauber zu belegen, prallt der Zauber auf ihn zurück.

        In der „Kammer des Schreckens“ trifft Harry auf Tom Riddle, den er aus dessen verzauberten Tagebuch kennt.
        Es stellt sich heraus, dass Riddle eine manifestierte Erinnerung Lord Voldemorts ist, dem Schüler, der er einst
        war, bevor er sich seinen neuen Namen gab. Dieser erklärt Harry nun, dass er von Rons kleiner Schwester Ginny,
        der das Buch durch Lucius Malfoy in die Hände fiel, Besitz ergreifen konnte. Die bewusstlose Ginny,
        die seit Stunden in Hogwarts als verschwunden gilt, befindet sich ebenfalls in der Kammer. Riddle wird immer
        stärker, während Ginnys Kräfte langsam schwinden. Sobald Ginny tot ist, wird Voldemort zurückkehren.

        Riddle lässt nun den Basilisken – eine riesige Schlange, deren Blick tödlich ist – auf Harry los. Damit wird klar,
        dass Harry zuvor immer die Stimme des Basilisken hörte, als dieser sich im Gemäuer des Schlosses bewegte und
        Schüler angriff. Harry gelingt es schließlich mit Hilfe von Dumbledores Phönix Fawkes, der dem Basilisken die Augen
        aushackt und Harry zum Schwert von Godric Gryffindor verhilft, den Basilisken zu töten. Anschließend zerstört Harry
        mit einem Basiliskenzahn Tom Riddles Tagebuch und damit auch ihn selbst, und rettet damit Ginnys Leben. Er selbst
        wurde von dem Basilisken gebissen und das Gift verbreitet sich nun sehr schnell in seinem Körper, Fawkes kann ihn
        aber mit seinen heilenden Tränen retten.`);

    assert.equal(wordCount, 987);
});
