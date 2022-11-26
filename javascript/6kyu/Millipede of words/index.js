/**
 
The set of words is given. Words are joined if the last letter of one word and the first letter of another word are the same. Return true if all words of the set can be combined into one word. Each word can and must be used only once. Otherwise return false.

Input
Array of 3 to 7 words of random length. No capital letters.

Example true
Set: excavate, endure, desire, screen, theater, excess, night.
Millipede: desirE EndurE ExcavatE ExcesS ScreeN NighT Theater.

Example false
Set: trade, pole, view, grave, ladder, mushroom, president.
Millipede: presidenT Trade.
 
*/

const solution = (words, Millipede = '') => {
  if (words.length === 0) {
    return true
  }

  for (let i = 0; i < words.length; i++) {
    if (Millipede.length === 0 || Millipede[Millipede.length - 1] === words[i][0]) {
      if (solution(words.slice(0, i).concat(words.slice(i + 1)), Millipede + words[i])) {
        return true
      }
    }
  }
  return false
}

module.exports = solution
