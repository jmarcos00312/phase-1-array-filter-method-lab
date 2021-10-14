// Code your solution here
      const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];

const findMatching = (arr, finding) => arr.filter(elem => elem.toLowerCase() === finding.toLowerCase())

    // console.log(matchedFind)
    // console.log(finding)
//-----------------------------------------------------------------------------
// function findMatching(drivers, string) {
//   let result =  drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
//   return result
// }
//-------------------------------------------------------------------------------------
// console.log(findMatching(drivers, "Sammy"))


// const fuzzyMatch = (arr, letters) =>  {
//   return arr.filter(elem => elem.slice(0, letters.length).toLowerCase() === letters.toLowerCase());
// }
const fuzzyMatch = (arr, letters) => arr.filter(elem => elem.slice(0, letters.length).toLowerCase() === letters.toLowerCase());





const matchName = (arr, finding) => [...new Set(arr.filter(elem => elem.name === finding))]

// const matchName = (arr, finding) => {
//     let newArr = []
//     newArr.push(...new Set(arr.filter(elem => elem.name === finding)))
//     return newArr
// }
// console.log(matchName(drivers, "Bobby"))