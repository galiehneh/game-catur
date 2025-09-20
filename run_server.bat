@echo off
echo Starting Chess Game Server on 0.0.0.0:3000...
echo.
echo The game will be accessible at:
echo - Local: http://localhost:3000
echo - Network: http://0.0.0.0:3000
echo - Or use your computer's IP address: http://[YOUR_IP]:3000
echo.
echo Press Ctrl+C to stop the server
echo.

cd /d %~dp0
python -m http.server 3000 --bind 0.0.0.0

pause
