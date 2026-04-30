Write-Host "Build läuft..." -ForegroundColor Cyan
npm run build

Write-Host "Server wird bereinigt..." -ForegroundColor Yellow

ssh deployer@217.154.67.144 "rm -rf /var/www/korbitsch.at/current/*"

Write-Host "Upload via SCP..." -ForegroundColor Yellow

scp -r dist/* deployer@217.154.67.144:/var/www/korbitsch.at/current/ 

Write-Host "Deploy erfolgreich!" -ForegroundColor Green