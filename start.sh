#!/bin/sh
set -e

# start backend
java -jar /app/backend/app.jar &

# start next frontend
cd /app/frontend/.output
node server/index.mjs &

# start nginx
nginx -g 'daemon off;'