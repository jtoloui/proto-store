# proto-store

[![Releases](https://github.com/jtoloui/proto-store/actions/workflows/release.yml/badge.svg)](https://github.com/jtoloui/proto-store/actions/workflows/release.yml) ![Go](https://img.shields.io/github/go-mod/go-version/jtoloui/proto-store?filename=go%2Fgo.mod&style=flat-square) ![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/jtoloui/proto-store?style=flat-square)


## What is proto-store

Proto store is central repo holding packages in multiple languages exporting client and server gRPC instances which can be installed and setup within your servers or client side servers.

Example:

```bash
npm install @jtoloui/proto-store
```

### client
```typescript
// client setup
import { ChannelCredentials } from "@grpc/grpc-js";
import { MoviesServiceClient, CreateMovieRequest } from "@jtoloui/proto-store";


export const client = new MoviesServiceClient(
	"0.0.0.0:50051",
	ChannelCredentials.createInsecure(),
	{},
	{}
);

// client in use

const movieRequest = CreateMovieRequest.create({
	movie: {
		title,
		year,
		director,
	},
});

client.createMovie(movieRequest, (err, response) => {
	if (err) {
		logger.error(err.message);
		return res.status(500).json({ error: err.message });
	}

	return res.status(200).json({
		id: response?.id,
		title: response?.movie?.title,
		year: response?.movie?.year,
		director: response?.movie?.director,
	});
});
```

### server

```typescript
// server setup
import { Server, ServerCredentials } from "@grpc/grpc-js";
import { IMoviesService, moviesServiceDefinition } from "@jtoloui/proto-store";

const server = new Server();

const service: IMoviesService = {
	getMovieById,
	createMovie,
};

connectDB();

server.addService(moviesServiceDefinition, service);
server.bindAsync(
	"localhost:50051",
	ServerCredentials.createInsecure(),
	(err: Error | null, port: number) => {
		const logger = log("server");
		if (err) {
			console.log(err)
		} else {
			server.start();
		}
	}
);
```
