// --------------(Part II)--------------
/**
 * This year, not only Jim & Dela but also Chinku are doing hard work to secure the first position. Can you find out who will get the delicious cake?
 * Input:
 * The input line has three values, x (The marks Jim has got,), y(The marks Dela has got) and z (The marks Chinku has got).
 * 
 * Output:
 * Print the name of the topper.
 *
 */

const jim = 69;
const dela = 97;
const Chinku = 99;

// function getMax(jim)

if (jim > dela && jim > Chinku) {
    console.log('Jim will get the cake');
} else if (dela > jim && dela > Chinku) {
    console.log('Dela will eat cake in this bela');
} else {
    console.log('Chinku will get the cake');
}

