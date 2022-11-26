/**

Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

 */

function towerBuilder(nFloors) {
  const floors = []

  for (let i = 0; i < nFloors; i += 1) {
    floors.push(Array(nFloors - i).join(' ') + Array(2 + i * 2).join('*') + Array(nFloors - i).join(' '))
  }

  return floors
}

module.exports = towerBuilder
