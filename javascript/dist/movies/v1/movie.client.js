"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesServiceClient = void 0;
const movie_1 = require("./movie");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
/**
 * The movies service definition.
 *
 * @generated from protobuf service movies.v1.MoviesService
 */
class MoviesServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = movie_1.MoviesService.typeName;
        this.methods = movie_1.MoviesService.methods;
        this.options = movie_1.MoviesService.options;
    }
    /**
     * Retrieves the movie with the given title.
     *
     * @generated from protobuf rpc: GetMovieByTitle(movies.v1.GetMovieByTitleRequest) returns (movies.v1.GetMovieByTitleResponse);
     */
    getMovieByTitle(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
}
exports.MoviesServiceClient = MoviesServiceClient;
