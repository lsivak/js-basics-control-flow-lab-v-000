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


function ternaryCheckCity() {
  let city;
  city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
  return city
}
  // = 'NYC') ? 'Ok, sounds good.' : 'No go.'
