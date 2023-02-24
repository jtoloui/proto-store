import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
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
export declare class MoviesServiceClient implements IMoviesServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Retrieves the movie with the given title.
     *
     * @generated from protobuf rpc: GetMovieByTitle(movies.v1.GetMovieByTitleRequest) returns (movies.v1.GetMovieByTitleResponse);
     */
    getMovieByTitle(input: GetMovieByTitleRequest, options?: RpcOptions): UnaryCall<GetMovieByTitleRequest, GetMovieByTitleResponse>;
}
