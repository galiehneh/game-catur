@echo off
echo Stopping and removing existing game-catur container and image...

REM Stop the container if it's running
docker stop game-catur 2>nul

REM Remove the container if it exists
docker rm game-catur 2>nul

REM Remove the image if it exists
docker rmi game-catur 2>nul

echo Building new Docker image...
docker build -t game-catur .

echo Starting new container on port 3000...
docker run -d -p 3000:80 --name game-catur game-catur

echo Deployment complete! Access the chess game at http://localhost:3000
REM pause
