let extURL =
  "http://wordgrammar.net/minna-no-nihongo-lesson-1-all-vocabulary-and-grammar-with-explanation/";

const vocabulary = new Array();
let cardCounter = 1; // initialize for first flashCard
let lessonCount = 1; // initialize for first lesson
const myTables = document.querySelectorAll("table");

myTables.forEach(myTable => {
  const rows = myTable.querySelectorAll("tr");
  rows.forEach(line => {
    let columnCounter = 1;
    const flashCard = {
      number: 0,
      word: "",
      kanji: "",
      meaning: "",
      lesson: lessonCount,
    };
    const cells = line.querySelectorAll("td");
    cells.forEach(cell => {
      if (
        (cell.innerText === "NO") ||
        (cell.innerText === "WORD") ||
        (cell.innerText === "KANJI") ||
        (cell.innerText === "MEANING")
      )
        return;
      switch (columnCounter) {
        case 1:
          flashCard.number = cardCounter;
          break;

        case 2:
          flashCard.word = cell.innerText;
          break;

        case 3:
          flashCard.kanji = cell.innerText;
          break;

        case 4:
          flashCard.meaning = cell.innerText;
          break;

        default:
          console.error("columns out of bounds");
          return;
      }
      columnCounter += 1;
      //console.log(columnCounter);
      //console.log(cell.innerText);
    });
    //console.log(line);
    // if (!flashCard.number == 0) {
    if (flashCard.number !== 0) {
      vocabulary.push(flashCard);
      cardCounter += 1;
    }
  });
  //vocabulary.shift();
  lessonCount += 1;
});

// vocabulary.map(row => {
//   {
//     word: row;
//   }
// });

// Das Array von Objects in ein Object mit einzelnen Objects verwandeln
const arrayToObject1 = (arr, key) => {
  return arr.reduce((obj, item) => {
    obj[item[key]] = item;
    return obj;
  }, {});
};
const vocObj = arrayToObject1(vocabulary, "number");

let id = "voc";

console.log("==>vocObj: ", vocObj[6]);

//console.log([vocabulary]);
window.localStorage.setItem(id, JSON.stringify(vocObj));
