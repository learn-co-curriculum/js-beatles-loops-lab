function theBeatlesPlay(musicians, instruments){
  const array = [];
  for (let i = 0; i < musicians.length; i++) { 
    array.push(musicians[i] + " plays " + instruments[i])
}
return array
};

function johnLennonFacts(facts){
 let i = 0;
 while (i < facts.length) {
  facts[i] += "!!!"
  i++;
 }
 return facts
};

function iLoveTheBeatles(num){
   let phrases = [];
    do {
    phrases.push("I love the Beatles!");
    num++
  } while (num < 15);
  return phrases;
}
