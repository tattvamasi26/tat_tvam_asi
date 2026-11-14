# Crop a band out of a Gita page scan, to read one line closely.
#
#   powershell -File scripts/gita/crop-scan.ps1 -Page 64 -Top 0.47 -Height 0.06
#
# Top and Height are fractions of the page height; Left and Width of its
# width. Writes corpus/gita/scans/crop-<page>.png, enlarged 3x.
param(
  [Parameter(Mandatory = $true)][int]$Page,
  [double]$Top = 0.0,
  [double]$Height = 0.2,
  [double]$Left = 0.0,
  [double]$Width = 1.0
)
Add-Type -AssemblyName System.Drawing
$dir = Join-Path $PSScriptRoot "..\..\corpus\gita\scans"
$src = Join-Path $dir ("{0:D3}.jpg" -f $Page)
$img = [System.Drawing.Image]::FromFile((Resolve-Path $src))
$x = [int]($img.Width * $Left)
$y = [int]($img.Height * $Top)
$w = [int]($img.Width * $Width)
$h = [int]($img.Height * $Height)
$rect = New-Object System.Drawing.Rectangle $x, $y, $w, $h
$out = New-Object System.Drawing.Bitmap ($w * 3), ($h * 3)
$g = [System.Drawing.Graphics]::FromImage($out)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($img, (New-Object System.Drawing.Rectangle 0, 0, ($w * 3), ($h * 3)), $rect, [System.Drawing.GraphicsUnit]::Pixel)
$dest = Join-Path $dir ("crop-{0}.png" -f $Page)
$out.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $out.Dispose(); $img.Dispose()
Write-Output $dest
