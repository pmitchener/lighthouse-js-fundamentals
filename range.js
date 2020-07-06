const range = function(start, end, step)
{
  let trackNum = start;
  let arr = [];
  if(start === undefined){
    return [];
  }
  else if(end === undefined){
    return [];
  }
  else if(step === undefined){
    return [];
  }
  if(start > end){
    return [];
  }
  if(step <= 0){
    return [];
  }
  arr.push(start);
  while(trackNum < end)//lint had a problem with while(true) here ???
  {
    trackNum += step;
    if(trackNum > end)
    {
      break;
    }
    arr.push(trackNum);
  }
  return arr;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));