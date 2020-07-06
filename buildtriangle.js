function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}
function buildTriangle(num)
{
  var s = "";
  for(var i=1; i<=num; i++)
  {
    s += makeLine(i);
  }
  return s;
}
console.log(buildTriangle(10));