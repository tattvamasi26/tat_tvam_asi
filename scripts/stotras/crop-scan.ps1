# Crop a band out of a page scan, to read one line closely.
#
#   powershell -File scripts/stotras/crop-scan.ps1 -Page 266 -Top 0.55 -Height 0.12
#
# Top and Height are fractions of the page height. Writes
# corpus/stotras/scans/crop-<page>.png, enlarged 2x.
param(
  [Parameter(Mandatory = $true)][int]$Page,
  [double]$Top = 0.0,
  [double]$Height = 0.2
)
Add-Type -AssemblyName System.Drawing
$dir = Join-Path $PSScriptRoot "..\..\corpus\stotras\scans"
$src = Join-Path $dir ("{0:D3}-hi.jpg" -f $Page)
if (-not (Test-Path $src)) { $src = Join-Path $dir ("{0:D3}.jpg" -f $Page) }
$img = [System.Drawing.Image]::FromFile((Resolve-Path $src))
$y = [int]($img.Height * $Top)
$h = [int]($img.Height * $Height)
$rect = New-Object System.Drawing.Rectangle 0, $y, $img.Width, $h
$out = New-Object System.Drawing.Bitmap ($img.Width * 2), ($h * 2)
$g = [System.Drawing.Graphics]::FromImage($out)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($img, (New-Object System.Drawing.Rectangle 0, 0, ($img.Width * 2), ($h * 2)), $rect, [System.Drawing.GraphicsUnit]::Pixel)
$dest = Join-Path $dir ("crop-{0}.png" -f $Page)
$out.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $out.Dispose(); $img.Dispose()
Write-Output $dest
