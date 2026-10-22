$ErrorActionPreference = "Stop"

$remote = "deployer@217.154.67.144"
$remotePath = "/var/www/korbitsch.at/current"

Write-Host "Build startet..." -ForegroundColor Cyan
npm run build

if (!(Test-Path "dist")) {
    Write-Host "Build fehlgeschlagen!" -ForegroundColor Red
    exit 1
}

Write-Host "Cleanup..." -ForegroundColor Yellow
Start-Process "ssh" -ArgumentList "-n -T $remote find $remotePath -mindepth 1 -maxdepth 1 ! -name assets -exec rm -rf {} +" -Wait -NoNewWindow

Write-Host "Upload..." -ForegroundColor Yellow
Start-Process "scp" -ArgumentList "-r dist/* ${remote}:$remotePath/" -Wait -NoNewWindow

Write-Host "Deploy erfolgreich!" -ForegroundColor Green