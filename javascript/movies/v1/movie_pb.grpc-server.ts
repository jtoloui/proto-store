/* eslint-disable */
// @generated by protobuf-ts 2.8.2 with parameter optimize_code_size,long_type_string,add_pb_suffix,ts_nocheck,eslint_disable,server_grpc1
// @generated from protobuf file "movies/v1/movie.proto" (package "movies.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
import { GetMovieByTitleResponse } from "./movie_pb";
import { GetMovieByTitleRequest } from "./movie_pb";
import type * as grpc from "@grpc/grpc-js";
/**
 * The movies service definition.
 *
 * @generated from protobuf service movies.v1.MoviesService
 */
export interface IMoviesService extends grpc.UntypedServiceImplementation {
    /**
     * Retrieves the movie with the given title.
     *
     * @generated from protobuf rpc: GetMovieByTitle(movies.v1.GetMovieByTitleRequest) returns (movies.v1.GetMovieByTitleResponse);
     */
    getMovieByTitle: grpc.handleUnaryCall<GetMovieByTitleRequest, GetMovieByTitleResponse>;
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
    getMovieByTitle: {
        path: "/movies.v1.MoviesService/GetMovieByTitle",
        originalName: "GetMovieByTitle",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => GetMovieByTitleResponse.fromBinary(bytes),
        requestDeserialize: bytes => GetMovieByTitleRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(GetMovieByTitleResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(GetMovieByTitleRequest.toBinary(value))
    }
};
