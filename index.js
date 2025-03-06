function scuberGreetingForFeet(ride){
  // Write your code here!
  
  if (ride <= 400){
    console.log('This one is on me!');
    return ('This one is on me!');
  } else if(ride <= 2000){
    console.log('That will be twenty bucks.');
    return ('That will be twenty bucks.');
  } else if (ride <= 2500){
    console.log('I will gladly take your thirty bucks.');
    return ('I will gladly take your thirty bucks.');
  } else {
    return ('No can do.')
  }
}

function ternaryCheckCity(city){
  // Write your code h ere!
  return city ==='NYC' ? "Ok, sounds good.":"No go.";
}

function switchOnCharmFromTip(tip){
  // Write your code here!

  switch (tip) {
    case 'generous':
      return ("Thank you so much.");

    case 'not as generous':
      return ('Thank you.');
  
    default:
      return ('Bye.');
  }
}