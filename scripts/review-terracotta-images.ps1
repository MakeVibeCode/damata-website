Add-Type -AssemblyName System.Drawing
$projectRoot = Split-Path $PSScriptRoot -Parent
$reviewItems = (Get-Content (Join-Path $projectRoot 'assets/terracotta-variant-sources.json') -Raw | ConvertFrom-Json).images
$reviewSheet = New-Object System.Drawing.Bitmap(1440,840)
$reviewGraphics = [System.Drawing.Graphics]::FromImage($reviewSheet)
$reviewGraphics.Clear([System.Drawing.Color]::FromArgb(243,231,216))
$reviewFont = New-Object System.Drawing.Font('Arial',10)
for ($reviewIndex=0; $reviewIndex -lt $reviewItems.Count; $reviewIndex++) {
 $reviewPhoto = [System.Drawing.Image]::FromFile((Join-Path $projectRoot ('assets/' + $reviewItems[$reviewIndex].asset)))
 $reviewX = ($reviewIndex % 6)*240
 $reviewY = [Math]::Floor($reviewIndex/6)*210
 $reviewGraphics.DrawImage($reviewPhoto,[int]$reviewX,[int]$reviewY,232,174)
 $reviewGraphics.DrawString($reviewItems[$reviewIndex].key,$reviewFont,[System.Drawing.Brushes]::Black,[single]$reviewX,[single]($reviewY+178))
 $reviewPhoto.Dispose()
}
$reviewSheet.Save((Join-Path $projectRoot 'outputs/catalogue-terracotta-review.jpg'),[System.Drawing.Imaging.ImageFormat]::Jpeg)
$reviewGraphics.Dispose(); $reviewSheet.Dispose(); $reviewFont.Dispose()
