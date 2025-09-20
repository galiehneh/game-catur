@echo off
echo Stopping and removing existing chess-game container and image...

REM Stop the container if it's running
docker stop chess-game 2>nul

REM Remove the container if it exists
docker rm chess-game 2>nul

REM Remove the image if it exists
docker rmi chess-game 2>nul

echo Building new Docker image...
docker build -t chess-game .

echo Starting new container on port 3000...
docker run -d -p 3000:80 --name chess-game chess-game

echo Deployment complete! Access the chess game at http://localhost:3000
pause
