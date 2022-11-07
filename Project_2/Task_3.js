function zadanie1() {
  var actBook = SpreadsheetApp.getActive();
  var getlistName = actBook.getSheetByName('Ввод расходов >').getRange('E1').getValue();
  var dataFromSheet= actBook.getSheetByName('Ввод расходов >').getRange('A4:F4').getValues();

  var listName = actBook.getSheetByName(getlistName);
  
  listName.insertRowsAfter(1, 1);
  listName.getRange('A2:F2').setValues(dataFromSheet);

}


function zadanie2() {  
  var actBook = SpreadsheetApp.getActive();
  var getlistName = actBook.getSheetByName('< Выводим расходы').getRange('B1').getValue();
  var listName = actBook.getSheetByName(getlistName);
  var dataFromSheet = listName.getDataRange().getValues();

  var dataForFilter = actBook.getSheetByName('< Выводим расходы').getRange('E1').getValue();
  var dataFromSheet = dataFromSheet.filter(function(row){return row[1] == dataForFilter});

   //обращаемся к листу Отчет
  //очищаем диапазон после шапки
  //вставляем туда отфильтрованные данные
  var sheetReport = actBook.getSheetByName('< Выводим расходы');
  sheetReport.getRange("a4:f").clearContent();
  sheetReport.getRange(4, 1, dataFromSheet.length, dataFromSheet[0].length).setValues(dataFromSheet); 



}