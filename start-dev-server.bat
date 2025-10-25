@echo off
echo ====================================
echo   Starting Pyrotech Landing Page
echo ====================================
echo.
echo Killing any existing Node processes...
taskkill /f /im node.exe 2>nul
echo.
echo Starting development server...
echo.
npm run dev
pause

