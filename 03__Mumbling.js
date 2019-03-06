// Mumbling
// Level: 7kyu
/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(str) {
    let strAccum = "";
    let charSelector, strContainer, strCapitalize;
    for(i = 0; i < str.length; i++){
        charSelector = str.charAt(i);
        strContainer = charSelector.repeat(i+1);
        strCapitalize = strContainer.charAt(0).toUpperCase() + strContainer.slice(1).toLowerCase();
        (i < (str.length - 1)) ? strAccum += strCapitalize + '-' : strAccum += strCapitalize;
    }
    return strAccum;
}