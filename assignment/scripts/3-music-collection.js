console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

const addToCollection = (collection, title, artist, yearPublished) => {
 let recordAlbum = {
  title: title,
  artist: artist,
  yearPublished: yearPublished
  }; // end object
  
  collection.push(recordAlbum);
  
   return recordAlbum;
} // end function

let album1 = console.log(addToCollection(myCollection, 'Return of the Mack', 'Mark Morrison', 1996));
let album2 = console.log(addToCollection(myCollection, 'Sweat (A la la la la long', 'Inner Circel', 1992));
let album3 = console.log(addToCollection(myCollection, 'Should\'ve Been A Cowboy', 'Toby Kieth', 1993));
let album4 = console.log(addToCollection(myCollection, 'Little Miss Saturday Night', 'Drew Parker', 2022));
let album5 = console.log(addToCollection(myCollection, 'Where I Find God', 'Larry Fleet', 2021));
let album6 = console.log(addToCollection(myCollection, 'Pink Houses', 'Jogn Mellencamp', 1983));

console.log(myCollection);

const showCollection = collection => {
 for(let i = 0; i < collection.length; i++) {
  console.log(`${collection[i].title}  by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
 } // end loop
} // end function

console.log('My colleciton:', myCollection);
showCollection(myCollection);

const findByArtist = (collection, artist) => {
 const artistArray = []; 

 for(let i = 0; i < collection.length; i++) {
  if(collection[i].artist === artist) {
    artistArray.push(collection[i]);
     
  } // end if statement
 } // end loop
 return artistArray;
} // end function


console.log(findByArtist( 'John Mellecamp'));




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
