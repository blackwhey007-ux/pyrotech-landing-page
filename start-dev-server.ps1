Write-Host "====================================" -ForegroundColor Cyan
Write-Host "  Starting Pyrotech Landing Page" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Killing any existing Node processes..." -ForegroundColor Yellow
Stop-Process -Name node -Force -ErrorAction SilentlyContinue
Write-Host ""
Write-Host "Starting development server..." -ForegroundColor Green
Write-Host ""
npm run dev
Read-Host "Press Enter to exit"




