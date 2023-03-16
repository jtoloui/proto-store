# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [movies/v1/movie.proto](#movies_v1_movie-proto)
    - [CreateMovieRequest](#movies-v1-CreateMovieRequest)
    - [CreateMovieResponse](#movies-v1-CreateMovieResponse)
    - [GetMovieByIdRequest](#movies-v1-GetMovieByIdRequest)
    - [GetMovieByIdResponse](#movies-v1-GetMovieByIdResponse)
    - [GetMoviesRequest](#movies-v1-GetMoviesRequest)
    - [GetMoviesResponse](#movies-v1-GetMoviesResponse)
    - [Movie](#movies-v1-Movie)
  
    - [MoviesService](#movies-v1-MoviesService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="movies_v1_movie-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## movies/v1/movie.proto



<a name="movies-v1-CreateMovieRequest"></a>

### CreateMovieRequest
The request message containing the movie.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| movie | [Movie](#movies-v1-Movie) |  | The movie to create. |






<a name="movies-v1-CreateMovieResponse"></a>

### CreateMovieResponse
The response message containing the movie.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| movie | [Movie](#movies-v1-Movie) |  | The created movie. |
| id | [string](#string) |  | The id of the created movie. |
| hello | [string](#string) |  | example string |






<a name="movies-v1-GetMovieByIdRequest"></a>

### GetMovieByIdRequest
The request message containing the movie title.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | The title of the movie to retrieve. |






<a name="movies-v1-GetMovieByIdResponse"></a>

### GetMovieByIdResponse
The response message containing the movie.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| movie | [Movie](#movies-v1-Movie) |  | The movie with the given title. |






<a name="movies-v1-GetMoviesRequest"></a>

### GetMoviesRequest
The request message containing the page number and number of movies per page.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| page | [int32](#int32) |  | The page number to retrieve. |
| per_page | [int32](#int32) |  | The number of movies to retrieve per page. |






<a name="movies-v1-GetMoviesResponse"></a>

### GetMoviesResponse
The response message containing the movies.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| movies | [Movie](#movies-v1-Movie) | repeated | The movies. |
| total | [int32](#int32) |  | The total number of movies. |






<a name="movies-v1-Movie"></a>

### Movie
The movie message containing the title, director, and year.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | The title of the movie. |
| director | [string](#string) |  | The director of the movie. |
| year | [int32](#int32) |  | The year the movie was released. |
| id | [string](#string) |  | The id of the movie. |





 

 

 


<a name="movies-v1-MoviesService"></a>

### MoviesService
The movies service definition.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetMovies | [GetMoviesRequest](#movies-v1-GetMoviesRequest) | [GetMoviesResponse](#movies-v1-GetMoviesResponse) | Retrieves a list of movies. |
| GetMovieById | [GetMovieByIdRequest](#movies-v1-GetMovieByIdRequest) | [GetMovieByIdResponse](#movies-v1-GetMovieByIdResponse) | Retrieves the movie with the given title. |
| CreateMovie | [CreateMovieRequest](#movies-v1-CreateMovieRequest) | [CreateMovieResponse](#movies-v1-CreateMovieResponse) | Creates a movie. |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

