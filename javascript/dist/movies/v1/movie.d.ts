import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * The movie message containing the title, director, and year.
 *
 * @generated from protobuf message movies.v1.Movie
 */
export interface Movie {
    /**
     * The title of the movie.
     *
     * @generated from protobuf field: string title = 1;
     */
    title: string;
    /**
     * The director of the movie.
     *
     * @generated from protobuf field: string director = 2;
     */
    director: string;
    /**
     * The year the movie was released.
     *
     * @generated from protobuf field: int32 year = 3;
     */
    year: number;
}
/**
 * The request message containing the movie title.
 *
 * @generated from protobuf message movies.v1.GetMovieByTitleRequest
 */
export interface GetMovieByTitleRequest {
    /**
     * The title of the movie to retrieve.
     *
     * @generated from protobuf field: string title = 1;
     */
    title: string;
}
/**
 * The response message containing the movie.
 *
 * @generated from protobuf message movies.v1.GetMovieByTitleResponse
 */
export interface GetMovieByTitleResponse {
    /**
     * The movie with the given title.
     *
     * @generated from protobuf field: movies.v1.Movie movie = 1;
     */
    movie?: Movie;
}
declare class Movie$Type extends MessageType<Movie> {
    constructor();
}
/**
 * @generated MessageType for protobuf message movies.v1.Movie
 */
export declare const Movie: Movie$Type;
declare class GetMovieByTitleRequest$Type extends MessageType<GetMovieByTitleRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message movies.v1.GetMovieByTitleRequest
 */
export declare const GetMovieByTitleRequest: GetMovieByTitleRequest$Type;
declare class GetMovieByTitleResponse$Type extends MessageType<GetMovieByTitleResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message movies.v1.GetMovieByTitleResponse
 */
export declare const GetMovieByTitleResponse: GetMovieByTitleResponse$Type;
/**
 * @generated ServiceType for protobuf service movies.v1.MoviesService
 */
export declare const MoviesService: ServiceType;
export {};
