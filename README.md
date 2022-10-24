# Docker Dashboard

### Development

First run server build
```
npm run build && node dist/app.js
```

Then Client
```
npm run dev
```

### Using docker

```
docker build -t docker_dashboard .
```

```
docker run --name docker_dashboard -v /var/run/docker.sock:/var/run/docker.sock --restart unless-stopped -p 3001:3000 -d docker_dashboard
```

```
docker exec -it docker_dashboard /bin/bash
```
