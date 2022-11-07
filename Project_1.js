function newSheet(){
  var actBook = SpreadsheetApp.getActive();
  actBook.insertSheet('randList');
}

function math25(){
    var actBook = SpreadsheetApp.getActive();
    var randList = actBook.getSheetByName('randList');
    var range = randList.getRange("A1:A25"); 
    var randomNumber = Math.random();

    for (var i=1;i<=25;i++){
        randomNumber;
      }

  Logger.log(range.getValues())

  var sheetPervZad = actBook.getSheetByName('Вставить лист случайных значений (первое задание)');
  var rangePervZad = sheetPervZad.getRange ("A1:A25");
  rangePervZad.setValues(range.getValues())
}




function city10(){
    var actBook = SpreadsheetApp.getActive();
    var randList = actBook.getSheetByName('Города (второе задание)');
    var rangeIn = randList.getRange("C2:C11");
    var min = 1;
    var max = randList.getLastRow();

    var massive = [];
    
    for (var i=1;i<=10;i++){
      var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
      var city = randList.getRange(randomNumber,1).getValue();
      massive.push([city]);
      }

  rangeIn.setValues(massive);

 }


function zadanie3() {
  var actBook = SpreadsheetApp.getActive();
  var actList = actBook.getSheetByName('Вставка функции (третье задание)'); 
  var cellWithFunction = actList.getRange("A1").getValue();
  var lastFilledCell = actList.getRange(actList.getLastRow()+1,1);

  lastFilledCell.setValue(cellWithFunction);

 }
