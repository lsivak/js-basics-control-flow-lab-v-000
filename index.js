function scuberGreetingForFeet(someNumber) {
  let result
  if (someNumber <= 400) {
    result = 'This one is on me!'
  } else if (someNumber < 2500 ) {
    result = 'I will gladly take your thirty bucks.'
  } else if (someNumber > 2500)
    result = 'No can do.'
  return result;
}


function ternaryCheckCity(city) {
  result = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return result;
}

function switchOnCharmFromTip(tip) {
  switch(tip) {
    case 'generous':
    tip >= 10
    response = 'Thank you so much.';
    case 'not as generous':
    !tip >= 10
    response = 'Thank you.';
    case 'thanks for everything':
    !tip >= 5
    response = 'Bye.'
    return response
  }
}
