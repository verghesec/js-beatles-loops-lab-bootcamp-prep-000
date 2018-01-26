
function theBeatlesPlay(musicians, instruments) {
  var introArray = [];
  for (let i=0; i<musicians.length; i++) {
    introArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return introArray;
}
