
function theBeatlesPlay(musicians, instruments) {
  var introArray = [];
  for (let i=0; i<musicians.length; i++) {
    introArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return introArray;
}

function johnLennonFacts(facts) {
  var excitingFacts = [];
  var i;

  while (i<facts.length) {
    excitingFacts.push(facts[i] +"!!!");
  }

  return excitingFacts;
}
