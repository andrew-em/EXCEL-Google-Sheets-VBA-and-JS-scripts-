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

Sub Задание_1()

Dim sheet As Worksheet

For Each sheet In Worksheets
    sheet.Visible = True
    
    With sheet.UsedRange.Font
       .Size = 11
       .Color = vbBlack
       .Bold = False
       .Name = "Arial"
    End With
    
    With sheet.UsedRange.Cells
       .HorizontalAlignment = xlLeft
       .Borders.LineStyle = False
       .Hyperlinks.Delete
    End With
    
Next sheet

End Sub
