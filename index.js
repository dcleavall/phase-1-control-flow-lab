function scuberGreetingForFeet(feet) {
  let driverGreeting
  if (feet < 400) {
    driverGreeting = 'This one is on me!';
    return driverGreeting
  }
  else if (feet > 400 && feet < 2000  ) {
    return 'That will be twenty bucks.';
  }
  else if (feet > 2000 && feet < 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else {
    return 'No can do.';
  }
}
function ternaryCheckCity(city) {
    return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
   }
function switchOnCharmFromTip(tip) {
  switch(tip) {
  case 'generous':
    return "Thank you so much."
    break;
    case 'not as generous':
      return "Thank you."
      break;
      case 'thanks for everything':
        return "Bye."
}}