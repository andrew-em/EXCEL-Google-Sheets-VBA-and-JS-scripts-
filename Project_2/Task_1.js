function sendRow() {
  //объявили переменную ss и положили в неё обращение к активной рабочей книги
  var ss = SpreadsheetApp.getActive();
  
  //обратились к форме, к диапазону и скопировали строку (значения)
  var sheetForma = ss.getSheetByName('Ввод расходов >');
  var range = sheetForma.getRange("a4:f4");
  var values = range.getValues();

  
  //обратились к листу со всеми расходами, вставили новую строку после первой 
  //и вставили туда скопированную строку
  var sheetBD = ss.getSheetByName('расходы');
  sheetBD.insertRowsAfter(1, 1);
  sheetBD.getRange("a2:f2").setValues(values)
  
}
