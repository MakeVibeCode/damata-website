$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$projectRoot = Split-Path $PSScriptRoot -Parent
$assetRoot = Join-Path $projectRoot 'assets'
$manifest = Get-Content -LiteralPath (Join-Path $assetRoot 'terracotta-catalogue-sources.json') -Raw | ConvertFrom-Json
$variantManifest = Get-Content -LiteralPath (Join-Path $assetRoot 'terracotta-variant-sources.json') -Raw | ConvertFrom-Json
$manifest.images += $variantManifest.images
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq 'image/jpeg'
$parameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
$parameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 85L)
foreach ($entry in $manifest.images) {
  if ($entry.asset -notmatch '^terra-[a-z-]+\.jpg$') { throw 'Invalid output filename' }
  $target = Join-Path $assetRoot $entry.asset
  $photo = [System.Drawing.Image]::FromFile($entry.source)
  try { $photo.Save($target, $codec, $parameters) } finally { $photo.Dispose() }
}
$parameters.Dispose()
Write-Output ('Prepared ' + $manifest.images.Count + ' JPEG images.')
