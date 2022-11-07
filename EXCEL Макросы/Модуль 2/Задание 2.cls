VERSION 1.0 CLASS
BEGIN
  MultiUse = -1  'True
END
Attribute VB_Name = "ЭтаКнига"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = True
Option Explicit


Sub Объект()
' Переименование листа и занесение текущей даты в ячейку A1

Workbooks("Объектная модель.xlsm").Sheets("Лист 1").Name = "Объектная модель"
Workbooks("Объектная модель.xlsm").Sheets("Объектная модель").Range("A1").Formula = "=NOW()"
       
End Sub
