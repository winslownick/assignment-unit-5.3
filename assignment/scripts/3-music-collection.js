console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

const addToCollection = (collection, title, artist, yearsPublished) => {
 let recordInformation = {
  title: 'Return of the Mack',
  artist: 'Mark Morrison',
  yearsPublished: 30
 };
 myCollection.push(recordInformation);
  return recordInformation;
} // end function
console.log(myCollection)







// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
