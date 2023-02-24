// @generated by protobuf-ts 2.8.2 with parameter generate_dependencies,use_proto_field_name
// @generated from protobuf file "movies/v1/movie.proto" (package "movies.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { MoviesService } from "./movie";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { GetMovieByTitleResponse } from "./movie";
import type { GetMovieByTitleRequest } from "./movie";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * The movies service definition.
 *
 * @generated from protobuf service movies.v1.MoviesService
 */
export interface IMoviesServiceClient {
    /**
     * Retrieves the movie with the given title.
     *
     * @generated from protobuf rpc: GetMovieByTitle(movies.v1.GetMovieByTitleRequest) returns (movies.v1.GetMovieByTitleResponse);
     */
    getMovieByTitle(input: GetMovieByTitleRequest, options?: RpcOptions): UnaryCall<GetMovieByTitleRequest, GetMovieByTitleResponse>;
}
/**
 * The movies service definition.
 *
 * @generated from protobuf service movies.v1.MoviesService
 */
export class MoviesServiceClient implements IMoviesServiceClient, ServiceInfo {
    typeName = MoviesService.typeName;
    methods = MoviesService.methods;
    options = MoviesService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Retrieves the movie with the given title.
     *
     * @generated from protobuf rpc: GetMovieByTitle(movies.v1.GetMovieByTitleRequest) returns (movies.v1.GetMovieByTitleResponse);
     */
    getMovieByTitle(input: GetMovieByTitleRequest, options?: RpcOptions): UnaryCall<GetMovieByTitleRequest, GetMovieByTitleResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetMovieByTitleRequest, GetMovieByTitleResponse>("unary", this._transport, method, opt, input);
    }
}
