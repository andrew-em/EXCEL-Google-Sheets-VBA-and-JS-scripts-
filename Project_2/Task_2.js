
//скрипт для фильтрации по дате / условию

function filter(){
  
  //обратились к листу со всеми расходами
  //забрали все строки с данными
  //отфильтровали, оставив только строки с датами >= 01-03-19
  //в GAS месяц начинается с 0, 0 - это январь, 11 - это декабрь
  var ss = SpreadsheetApp.getActive();
  var sheetBD = ss.getSheetByName('расходы');
  var data = sheetBD.getDataRange().getValues();
  data = data.filter(function(row){return row[0] >= new Date(2019, 4, 1)});
  
  
  //обращаемся к листу Отчет
  //очищаем диапазон после шапки
  //вставляем туда отфильтрованные данные
  var sheetReport = ss.getSheetByName('< Выводим расходы');
  sheetReport.getRange("a4:f").clearContent();
  sheetReport.getRange(4, 1, data.length, data[0].length).setValues(data);  
  

  
}