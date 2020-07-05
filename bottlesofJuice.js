var num = 5;

/*
99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
...
2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!
*/
while (num >= 1) {
    console.log(num +" " + ((num != 1) ? "bottles" : "bottle") + " of juice on the wall! " + num +" " + ((num != 1) ? "bottles" : "bottle") + " of juice! Take one down, pass it around... " + (num-1) + " " + (((num-1) != 1) ? "bottles": "bottle") + " of juice on the wall!");
    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num
    num--;
}