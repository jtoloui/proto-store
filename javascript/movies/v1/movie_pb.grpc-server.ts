/* eslint-disable */
// @generated by protobuf-ts 2.8.2 with parameter long_type_string,add_pb_suffix,ts_nocheck,eslint_disable,server_grpc1,client_grpc1
// @generated from protobuf file "movies/v1/movie.proto" (package "movies.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
import { CreateMovieResponse } from "./movie_pb";
import { CreateMovieRequest } from "./movie_pb";
import { GetMovieByIdResponse } from "./movie_pb";
import { GetMovieByIdRequest } from "./movie_pb";
import { GetMoviesResponse } from "./movie_pb";
import { GetMoviesRequest } from "./movie_pb";
import type * as grpc from "@grpc/grpc-js";
/**
 * The movies service definition.
 *
 * @generated from protobuf service movies.v1.MoviesService
 */
export interface IMoviesService extends grpc.UntypedServiceImplementation {
    /**
     * Retrieves a list of movies.
     *
     * @generated from protobuf rpc: GetMovies(movies.v1.GetMoviesRequest) returns (movies.v1.GetMoviesResponse);
     */
    getMovies: grpc.handleUnaryCall<GetMoviesRequest, GetMoviesResponse>;
    /**
     * Retrieves the movie with the given title.
     *
     * @generated from protobuf rpc: GetMovieById(movies.v1.GetMovieByIdRequest) returns (movies.v1.GetMovieByIdResponse);
     */
    getMovieById: grpc.handleUnaryCall<GetMovieByIdRequest, GetMovieByIdResponse>;
    /**
     * Creates a movie.
     *
     * @generated from protobuf rpc: CreateMovie(movies.v1.CreateMovieRequest) returns (movies.v1.CreateMovieResponse);
     */
    createMovie: grpc.handleUnaryCall<CreateMovieRequest, CreateMovieResponse>;
}
/**
 * @grpc/grpc-js definition for the protobuf service movies.v1.MoviesService.
 *
 * Usage: Implement the interface IMoviesService and add to a grpc server.
 *
 * ```typescript
 * const server = new grpc.Server();
 * const service: IMoviesService = ...
 * server.addService(moviesServiceDefinition, service);
 * ```
 */
export const moviesServiceDefinition: grpc.ServiceDefinition<IMoviesService> = {
    getMovies: {
        path: "/movies.v1.MoviesService/GetMovies",
        originalName: "GetMovies",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => GetMoviesResponse.fromBinary(bytes),
        requestDeserialize: bytes => GetMoviesRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(GetMoviesResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(GetMoviesRequest.toBinary(value))
    },
    getMovieById: {
        path: "/movies.v1.MoviesService/GetMovieById",
        originalName: "GetMovieById",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => GetMovieByIdResponse.fromBinary(bytes),
        requestDeserialize: bytes => GetMovieByIdRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(GetMovieByIdResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(GetMovieByIdRequest.toBinary(value))
    },
    createMovie: {
        path: "/movies.v1.MoviesService/CreateMovie",
        originalName: "CreateMovie",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => CreateMovieResponse.fromBinary(bytes),
        requestDeserialize: bytes => CreateMovieRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(CreateMovieResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(CreateMovieRequest.toBinary(value))
    }
};
