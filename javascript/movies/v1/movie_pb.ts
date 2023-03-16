/* eslint-disable */
// @generated by protobuf-ts 2.8.2 with parameter long_type_string,add_pb_suffix,ts_nocheck,eslint_disable,server_grpc1,client_grpc1
// @generated from protobuf file "movies/v1/movie.proto" (package "movies.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
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
    /**
     * The id of the movie.
     *
     * @generated from protobuf field: string id = 4;
     */
    id: string;
}
/**
 * The request message containing the movie title.
 *
 * @generated from protobuf message movies.v1.GetMovieByIdRequest
 */
export interface GetMovieByIdRequest {
    /**
     * The title of the movie to retrieve.
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * The response message containing the movie.
 *
 * @generated from protobuf message movies.v1.GetMovieByIdResponse
 */
export interface GetMovieByIdResponse {
    /**
     * The movie with the given title.
     *
     * @generated from protobuf field: movies.v1.Movie movie = 1;
     */
    movie?: Movie;
}
/**
 * The request message containing the movie.
 *
 * @generated from protobuf message movies.v1.CreateMovieRequest
 */
export interface CreateMovieRequest {
    /**
     * The movie to create.
     *
     * @generated from protobuf field: movies.v1.Movie movie = 1;
     */
    movie?: Movie;
}
/**
 * The response message containing the movie.
 *
 * @generated from protobuf message movies.v1.CreateMovieResponse
 */
export interface CreateMovieResponse {
    /**
     * The created movie.
     *
     * @generated from protobuf field: movies.v1.Movie movie = 1;
     */
    movie?: Movie;
    /**
     * The id of the created movie.
     *
     * @generated from protobuf field: string id = 2;
     */
    id: string;
    /**
     * example string
     *
     * @generated from protobuf field: string hello = 3;
     */
    hello: string;
}
/**
 * The request message containing the page number and number of movies per page.
 *
 * @generated from protobuf message movies.v1.GetMoviesRequest
 */
export interface GetMoviesRequest {
    /**
     * The page number to retrieve.
     *
     * @generated from protobuf field: int32 page = 1;
     */
    page: number;
    /**
     * The number of movies to retrieve per page.
     *
     * @generated from protobuf field: int32 per_page = 2;
     */
    perPage: number;
}
/**
 * The response message containing the movies.
 *
 * @generated from protobuf message movies.v1.GetMoviesResponse
 */
export interface GetMoviesResponse {
    /**
     * The movies.
     *
     * @generated from protobuf field: repeated movies.v1.Movie movies = 1;
     */
    movies: Movie[];
    /**
     * The total number of movies.
     *
     * @generated from protobuf field: int32 total = 2;
     */
    total: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class Movie$Type extends MessageType<Movie> {
    constructor() {
        super("movies.v1.Movie", [
            { no: 1, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "director", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "year", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Movie>): Movie {
        const message = { title: "", director: "", year: 0, id: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Movie>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Movie): Movie {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string title */ 1:
                    message.title = reader.string();
                    break;
                case /* string director */ 2:
                    message.director = reader.string();
                    break;
                case /* int32 year */ 3:
                    message.year = reader.int32();
                    break;
                case /* string id */ 4:
                    message.id = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Movie, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string title = 1; */
        if (message.title !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.title);
        /* string director = 2; */
        if (message.director !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.director);
        /* int32 year = 3; */
        if (message.year !== 0)
            writer.tag(3, WireType.Varint).int32(message.year);
        /* string id = 4; */
        if (message.id !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message movies.v1.Movie
 */
export const Movie = new Movie$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetMovieByIdRequest$Type extends MessageType<GetMovieByIdRequest> {
    constructor() {
        super("movies.v1.GetMovieByIdRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetMovieByIdRequest>): GetMovieByIdRequest {
        const message = { id: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetMovieByIdRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetMovieByIdRequest): GetMovieByIdRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetMovieByIdRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message movies.v1.GetMovieByIdRequest
 */
export const GetMovieByIdRequest = new GetMovieByIdRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetMovieByIdResponse$Type extends MessageType<GetMovieByIdResponse> {
    constructor() {
        super("movies.v1.GetMovieByIdResponse", [
            { no: 1, name: "movie", kind: "message", T: () => Movie }
        ]);
    }
    create(value?: PartialMessage<GetMovieByIdResponse>): GetMovieByIdResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetMovieByIdResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetMovieByIdResponse): GetMovieByIdResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* movies.v1.Movie movie */ 1:
                    message.movie = Movie.internalBinaryRead(reader, reader.uint32(), options, message.movie);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetMovieByIdResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* movies.v1.Movie movie = 1; */
        if (message.movie)
            Movie.internalBinaryWrite(message.movie, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message movies.v1.GetMovieByIdResponse
 */
export const GetMovieByIdResponse = new GetMovieByIdResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateMovieRequest$Type extends MessageType<CreateMovieRequest> {
    constructor() {
        super("movies.v1.CreateMovieRequest", [
            { no: 1, name: "movie", kind: "message", T: () => Movie }
        ]);
    }
    create(value?: PartialMessage<CreateMovieRequest>): CreateMovieRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CreateMovieRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateMovieRequest): CreateMovieRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* movies.v1.Movie movie */ 1:
                    message.movie = Movie.internalBinaryRead(reader, reader.uint32(), options, message.movie);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateMovieRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* movies.v1.Movie movie = 1; */
        if (message.movie)
            Movie.internalBinaryWrite(message.movie, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message movies.v1.CreateMovieRequest
 */
export const CreateMovieRequest = new CreateMovieRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateMovieResponse$Type extends MessageType<CreateMovieResponse> {
    constructor() {
        super("movies.v1.CreateMovieResponse", [
            { no: 1, name: "movie", kind: "message", T: () => Movie },
            { no: 2, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "hello", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<CreateMovieResponse>): CreateMovieResponse {
        const message = { id: "", hello: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CreateMovieResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateMovieResponse): CreateMovieResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* movies.v1.Movie movie */ 1:
                    message.movie = Movie.internalBinaryRead(reader, reader.uint32(), options, message.movie);
                    break;
                case /* string id */ 2:
                    message.id = reader.string();
                    break;
                case /* string hello */ 3:
                    message.hello = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateMovieResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* movies.v1.Movie movie = 1; */
        if (message.movie)
            Movie.internalBinaryWrite(message.movie, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string id = 2; */
        if (message.id !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.id);
        /* string hello = 3; */
        if (message.hello !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.hello);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message movies.v1.CreateMovieResponse
 */
export const CreateMovieResponse = new CreateMovieResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetMoviesRequest$Type extends MessageType<GetMoviesRequest> {
    constructor() {
        super("movies.v1.GetMoviesRequest", [
            { no: 1, name: "page", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "per_page", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<GetMoviesRequest>): GetMoviesRequest {
        const message = { page: 0, perPage: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetMoviesRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetMoviesRequest): GetMoviesRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 page */ 1:
                    message.page = reader.int32();
                    break;
                case /* int32 per_page */ 2:
                    message.perPage = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetMoviesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 page = 1; */
        if (message.page !== 0)
            writer.tag(1, WireType.Varint).int32(message.page);
        /* int32 per_page = 2; */
        if (message.perPage !== 0)
            writer.tag(2, WireType.Varint).int32(message.perPage);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message movies.v1.GetMoviesRequest
 */
export const GetMoviesRequest = new GetMoviesRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetMoviesResponse$Type extends MessageType<GetMoviesResponse> {
    constructor() {
        super("movies.v1.GetMoviesResponse", [
            { no: 1, name: "movies", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Movie },
            { no: 2, name: "total", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<GetMoviesResponse>): GetMoviesResponse {
        const message = { movies: [], total: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetMoviesResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetMoviesResponse): GetMoviesResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated movies.v1.Movie movies */ 1:
                    message.movies.push(Movie.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 total */ 2:
                    message.total = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetMoviesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated movies.v1.Movie movies = 1; */
        for (let i = 0; i < message.movies.length; i++)
            Movie.internalBinaryWrite(message.movies[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* int32 total = 2; */
        if (message.total !== 0)
            writer.tag(2, WireType.Varint).int32(message.total);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message movies.v1.GetMoviesResponse
 */
export const GetMoviesResponse = new GetMoviesResponse$Type();
/**
 * @generated ServiceType for protobuf service movies.v1.MoviesService
 */
export const MoviesService = new ServiceType("movies.v1.MoviesService", [
    { name: "GetMovies", options: {}, I: GetMoviesRequest, O: GetMoviesResponse },
    { name: "GetMovieById", options: {}, I: GetMovieByIdRequest, O: GetMovieByIdResponse },
    { name: "CreateMovie", options: {}, I: CreateMovieRequest, O: CreateMovieResponse }
]);
