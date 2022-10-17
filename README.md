1. docker build -t docker_dashboard .
2. docker run --name docker_dashboard -v /var/run/docker.sock:/var/run/docker.sock --restart unless-stopped -p 3001:3000 -d docker_dashboard
3. docker exec -it docker_dashboard /bin/bash
