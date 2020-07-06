const finalPosition = function (moves){
  let x = 0;
  let y = 0;
  for(const move of moves)
  {
    switch(move)//light house loabs lint had issue with the indents on my switch statement. I had to move everything backwards to get lint to pass.
    {
      case "north":
        y++;
        break;
      case "south":
        y--;
        break;
      case "east":
        x++;
        break;
      case "west":
        x--;
        break;
      default:
        break;
    }
  }
  return [x, y];
};
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] ; 
console.log(finalPosition(moves));