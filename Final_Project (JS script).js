function allCourseFinal() {
  var actBook = SpreadsheetApp.getActive();
  var sheetSetData = actBook.getSheetByName('ВСЕ ПРОГУЛКИ');
  
  var newMass = [];

  var mass = ['ГЕРДА', 'СНЕЖИНКА', 'КАПИТАЛ', 'КИНУ'];


  for (var t = 0; t < mass.length; t++) {
    var sheetData = actBook.getSheetByName(mass[t]).getDataRange().getValues();
    sheetData = sheetData.slice(1);
    sheetData = sheetData.filter(function(el){return el[0] != ''})
    var novData = new Date();
    sheetData = sheetData.map(function(el){return [el[0], el[1], el[2], el[3], el[4], el[5], mass[t], novData]})
    newMass = newMass.concat(sheetData);
  }

  sheetSetData.getRange("A2:H").clearContent();
  sheetSetData.getRange(2, 1, newMass.length, newMass[0].length).setValues(newMass);

}