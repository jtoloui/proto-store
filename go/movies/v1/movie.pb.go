// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.29.1
// 	protoc        (unknown)
// source: movies/v1/movie.proto

package moviesv1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// The movie message containing the title, director, and year.
type Movie struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The title of the movie.
	Title string `protobuf:"bytes,1,opt,name=title,proto3" json:"title,omitempty"`
	// The director of the movie.
	Director string `protobuf:"bytes,2,opt,name=director,proto3" json:"director,omitempty"`
	// The year the movie was released.
	Year int32 `protobuf:"varint,3,opt,name=year,proto3" json:"year,omitempty"`
	// The id of the movie.
	Id string `protobuf:"bytes,4,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *Movie) Reset() {
	*x = Movie{}
	if protoimpl.UnsafeEnabled {
		mi := &file_movies_v1_movie_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Movie) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Movie) ProtoMessage() {}

func (x *Movie) ProtoReflect() protoreflect.Message {
	mi := &file_movies_v1_movie_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Movie.ProtoReflect.Descriptor instead.
func (*Movie) Descriptor() ([]byte, []int) {
	return file_movies_v1_movie_proto_rawDescGZIP(), []int{0}
}

func (x *Movie) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *Movie) GetDirector() string {
	if x != nil {
		return x.Director
	}
	return ""
}

func (x *Movie) GetYear() int32 {
	if x != nil {
		return x.Year
	}
	return 0
}

func (x *Movie) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

// The request message containing the movie title.
type GetMovieByIdRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The title of the movie to retrieve.
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetMovieByIdRequest) Reset() {
	*x = GetMovieByIdRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_movies_v1_movie_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetMovieByIdRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetMovieByIdRequest) ProtoMessage() {}

func (x *GetMovieByIdRequest) ProtoReflect() protoreflect.Message {
	mi := &file_movies_v1_movie_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetMovieByIdRequest.ProtoReflect.Descriptor instead.
func (*GetMovieByIdRequest) Descriptor() ([]byte, []int) {
	return file_movies_v1_movie_proto_rawDescGZIP(), []int{1}
}

func (x *GetMovieByIdRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

// The response message containing the movie.
type GetMovieByIdResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The movie with the given title.
	Movie *Movie `protobuf:"bytes,1,opt,name=movie,proto3" json:"movie,omitempty"`
}

func (x *GetMovieByIdResponse) Reset() {
	*x = GetMovieByIdResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_movies_v1_movie_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetMovieByIdResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetMovieByIdResponse) ProtoMessage() {}

func (x *GetMovieByIdResponse) ProtoReflect() protoreflect.Message {
	mi := &file_movies_v1_movie_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetMovieByIdResponse.ProtoReflect.Descriptor instead.
func (*GetMovieByIdResponse) Descriptor() ([]byte, []int) {
	return file_movies_v1_movie_proto_rawDescGZIP(), []int{2}
}

func (x *GetMovieByIdResponse) GetMovie() *Movie {
	if x != nil {
		return x.Movie
	}
	return nil
}

// The request message containing the movie.
type CreateMovieRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The movie to create.
	Movie *Movie `protobuf:"bytes,1,opt,name=movie,proto3" json:"movie,omitempty"`
}

func (x *CreateMovieRequest) Reset() {
	*x = CreateMovieRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_movies_v1_movie_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateMovieRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateMovieRequest) ProtoMessage() {}

func (x *CreateMovieRequest) ProtoReflect() protoreflect.Message {
	mi := &file_movies_v1_movie_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateMovieRequest.ProtoReflect.Descriptor instead.
func (*CreateMovieRequest) Descriptor() ([]byte, []int) {
	return file_movies_v1_movie_proto_rawDescGZIP(), []int{3}
}

func (x *CreateMovieRequest) GetMovie() *Movie {
	if x != nil {
		return x.Movie
	}
	return nil
}

// The response message containing the movie.
type CreateMovieResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The created movie.
	Movie *Movie `protobuf:"bytes,1,opt,name=movie,proto3" json:"movie,omitempty"`
	// The id of the created movie.
	Id string `protobuf:"bytes,2,opt,name=id,proto3" json:"id,omitempty"`
	// example string
	Hello string `protobuf:"bytes,3,opt,name=hello,proto3" json:"hello,omitempty"`
}

func (x *CreateMovieResponse) Reset() {
	*x = CreateMovieResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_movies_v1_movie_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateMovieResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateMovieResponse) ProtoMessage() {}

func (x *CreateMovieResponse) ProtoReflect() protoreflect.Message {
	mi := &file_movies_v1_movie_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateMovieResponse.ProtoReflect.Descriptor instead.
func (*CreateMovieResponse) Descriptor() ([]byte, []int) {
	return file_movies_v1_movie_proto_rawDescGZIP(), []int{4}
}

func (x *CreateMovieResponse) GetMovie() *Movie {
	if x != nil {
		return x.Movie
	}
	return nil
}

func (x *CreateMovieResponse) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *CreateMovieResponse) GetHello() string {
	if x != nil {
		return x.Hello
	}
	return ""
}

// The request message containing the page number and number of movies per page.
type GetMoviesRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The page number to retrieve.
	Page int32 `protobuf:"varint,1,opt,name=page,proto3" json:"page,omitempty"`
	// The number of movies to retrieve per page.
	PerPage int32 `protobuf:"varint,2,opt,name=per_page,json=perPage,proto3" json:"per_page,omitempty"`
}

func (x *GetMoviesRequest) Reset() {
	*x = GetMoviesRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_movies_v1_movie_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetMoviesRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetMoviesRequest) ProtoMessage() {}

func (x *GetMoviesRequest) ProtoReflect() protoreflect.Message {
	mi := &file_movies_v1_movie_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetMoviesRequest.ProtoReflect.Descriptor instead.
func (*GetMoviesRequest) Descriptor() ([]byte, []int) {
	return file_movies_v1_movie_proto_rawDescGZIP(), []int{5}
}

func (x *GetMoviesRequest) GetPage() int32 {
	if x != nil {
		return x.Page
	}
	return 0
}

func (x *GetMoviesRequest) GetPerPage() int32 {
	if x != nil {
		return x.PerPage
	}
	return 0
}

// The response message containing the movies.
type GetMoviesResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The movies.
	Movies []*Movie `protobuf:"bytes,1,rep,name=movies,proto3" json:"movies,omitempty"`
	// The total number of movies.
	Total int32 `protobuf:"varint,2,opt,name=total,proto3" json:"total,omitempty"`
}

func (x *GetMoviesResponse) Reset() {
	*x = GetMoviesResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_movies_v1_movie_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetMoviesResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetMoviesResponse) ProtoMessage() {}

func (x *GetMoviesResponse) ProtoReflect() protoreflect.Message {
	mi := &file_movies_v1_movie_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetMoviesResponse.ProtoReflect.Descriptor instead.
func (*GetMoviesResponse) Descriptor() ([]byte, []int) {
	return file_movies_v1_movie_proto_rawDescGZIP(), []int{6}
}

func (x *GetMoviesResponse) GetMovies() []*Movie {
	if x != nil {
		return x.Movies
	}
	return nil
}

func (x *GetMoviesResponse) GetTotal() int32 {
	if x != nil {
		return x.Total
	}
	return 0
}

var File_movies_v1_movie_proto protoreflect.FileDescriptor

var file_movies_v1_movie_proto_rawDesc = []byte{
	0x0a, 0x15, 0x6d, 0x6f, 0x76, 0x69, 0x65, 0x73, 0x2f, 0x76, 0x31, 0x2f, 0x6d, 0x6f, 0x76, 0x69,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x09, 0x6d, 0x6f, 0x76, 0x69, 0x65, 0x73, 0x2e,
	0x76, 0x31, 0x22, 0x5d, 0x0a, 0x05, 0x4d, 0x6f, 0x76, 0x69, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x74,
	0x69, 0x74, 0x6c, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c,
	0x65, 0x12, 0x1a, 0x0a, 0x08, 0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x12, 0x12, 0x0a,
	0x04, 0x79, 0x65, 0x61, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x79, 0x65, 0x61,
	0x72, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69,
	0x64, 0x22, 0x25, 0x0a, 0x13, 0x47, 0x65, 0x74, 0x4d, 0x6f, 0x76, 0x69, 0x65, 0x42, 0x79, 0x49,
	0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x3e, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x4d,
	0x6f, 0x76, 0x69, 0x65, 0x42, 0x79, 0x49, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x26, 0x0a, 0x05, 0x6d, 0x6f, 0x76, 0x69, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x10, 0x2e, 0x6d, 0x6f, 0x76, 0x69, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x6f, 0x76, 0x69,
	0x65, 0x52, 0x05, 0x6d, 0x6f, 0x76, 0x69, 0x65, 0x22, 0x3c, 0x0a, 0x12, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x4d, 0x6f, 0x76, 0x69, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x26,
	0x0a, 0x05, 0x6d, 0x6f, 0x76, 0x69, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e,
	0x6d, 0x6f, 0x76, 0x69, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x6f, 0x76, 0x69, 0x65, 0x52,
	0x05, 0x6d, 0x6f, 0x76, 0x69, 0x65, 0x22, 0x63, 0x0a, 0x13, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x4d, 0x6f, 0x76, 0x69, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x26, 0x0a,
	0x05, 0x6d, 0x6f, 0x76, 0x69, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x6d,
	0x6f, 0x76, 0x69, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x6f, 0x76, 0x69, 0x65, 0x52, 0x05,
	0x6d, 0x6f, 0x76, 0x69, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x22, 0x41, 0x0a, 0x10, 0x47,
	0x65, 0x74, 0x4d, 0x6f, 0x76, 0x69, 0x65, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x12, 0x0a, 0x04, 0x70, 0x61, 0x67, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x70,
	0x61, 0x67, 0x65, 0x12, 0x19, 0x0a, 0x08, 0x70, 0x65, 0x72, 0x5f, 0x70, 0x61, 0x67, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x07, 0x70, 0x65, 0x72, 0x50, 0x61, 0x67, 0x65, 0x22, 0x53,
	0x0a, 0x11, 0x47, 0x65, 0x74, 0x4d, 0x6f, 0x76, 0x69, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x28, 0x0a, 0x06, 0x6d, 0x6f, 0x76, 0x69, 0x65, 0x73, 0x18, 0x01, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x6d, 0x6f, 0x76, 0x69, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e,
	0x4d, 0x6f, 0x76, 0x69, 0x65, 0x52, 0x06, 0x6d, 0x6f, 0x76, 0x69, 0x65, 0x73, 0x12, 0x14, 0x0a,
	0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x74, 0x6f,
	0x74, 0x61, 0x6c, 0x32, 0xfc, 0x01, 0x0a, 0x0d, 0x4d, 0x6f, 0x76, 0x69, 0x65, 0x73, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x48, 0x0a, 0x09, 0x47, 0x65, 0x74, 0x4d, 0x6f, 0x76, 0x69,
	0x65, 0x73, 0x12, 0x1b, 0x2e, 0x6d, 0x6f, 0x76, 0x69, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x47,
	0x65, 0x74, 0x4d, 0x6f, 0x76, 0x69, 0x65, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x1c, 0x2e, 0x6d, 0x6f, 0x76, 0x69, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x4d,
	0x6f, 0x76, 0x69, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12,
	0x51, 0x0a, 0x0c, 0x47, 0x65, 0x74, 0x4d, 0x6f, 0x76, 0x69, 0x65, 0x42, 0x79, 0x49, 0x64, 0x12,
	0x1e, 0x2e, 0x6d, 0x6f, 0x76, 0x69, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x4d,
	0x6f, 0x76, 0x69, 0x65, 0x42, 0x79, 0x49, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x1f, 0x2e, 0x6d, 0x6f, 0x76, 0x69, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x4d,
	0x6f, 0x76, 0x69, 0x65, 0x42, 0x79, 0x49, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x22, 0x00, 0x12, 0x4e, 0x0a, 0x0b, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x4d, 0x6f, 0x76, 0x69,
	0x65, 0x12, 0x1d, 0x2e, 0x6d, 0x6f, 0x76, 0x69, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x4d, 0x6f, 0x76, 0x69, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x1e, 0x2e, 0x6d, 0x6f, 0x76, 0x69, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x4d, 0x6f, 0x76, 0x69, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x22, 0x00, 0x42, 0x96, 0x01, 0x0a, 0x0d, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x6f, 0x76, 0x69, 0x65,
	0x73, 0x2e, 0x76, 0x31, 0x42, 0x0a, 0x4d, 0x6f, 0x76, 0x69, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f,
	0x50, 0x01, 0x5a, 0x34, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6a,
	0x74, 0x6f, 0x6c, 0x6f, 0x75, 0x69, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2d, 0x73, 0x74, 0x6f,
	0x72, 0x65, 0x2f, 0x67, 0x6f, 0x2f, 0x6d, 0x6f, 0x76, 0x69, 0x65, 0x73, 0x2f, 0x76, 0x31, 0x3b,
	0x6d, 0x6f, 0x76, 0x69, 0x65, 0x73, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x4d, 0x58, 0x58, 0xaa, 0x02,
	0x09, 0x4d, 0x6f, 0x76, 0x69, 0x65, 0x73, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x09, 0x4d, 0x6f, 0x76,
	0x69, 0x65, 0x73, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x15, 0x4d, 0x6f, 0x76, 0x69, 0x65, 0x73, 0x5c,
	0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02,
	0x0a, 0x4d, 0x6f, 0x76, 0x69, 0x65, 0x73, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_movies_v1_movie_proto_rawDescOnce sync.Once
	file_movies_v1_movie_proto_rawDescData = file_movies_v1_movie_proto_rawDesc
)

func file_movies_v1_movie_proto_rawDescGZIP() []byte {
	file_movies_v1_movie_proto_rawDescOnce.Do(func() {
		file_movies_v1_movie_proto_rawDescData = protoimpl.X.CompressGZIP(file_movies_v1_movie_proto_rawDescData)
	})
	return file_movies_v1_movie_proto_rawDescData
}

var file_movies_v1_movie_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_movies_v1_movie_proto_goTypes = []interface{}{
	(*Movie)(nil),                // 0: movies.v1.Movie
	(*GetMovieByIdRequest)(nil),  // 1: movies.v1.GetMovieByIdRequest
	(*GetMovieByIdResponse)(nil), // 2: movies.v1.GetMovieByIdResponse
	(*CreateMovieRequest)(nil),   // 3: movies.v1.CreateMovieRequest
	(*CreateMovieResponse)(nil),  // 4: movies.v1.CreateMovieResponse
	(*GetMoviesRequest)(nil),     // 5: movies.v1.GetMoviesRequest
	(*GetMoviesResponse)(nil),    // 6: movies.v1.GetMoviesResponse
}
var file_movies_v1_movie_proto_depIdxs = []int32{
	0, // 0: movies.v1.GetMovieByIdResponse.movie:type_name -> movies.v1.Movie
	0, // 1: movies.v1.CreateMovieRequest.movie:type_name -> movies.v1.Movie
	0, // 2: movies.v1.CreateMovieResponse.movie:type_name -> movies.v1.Movie
	0, // 3: movies.v1.GetMoviesResponse.movies:type_name -> movies.v1.Movie
	5, // 4: movies.v1.MoviesService.GetMovies:input_type -> movies.v1.GetMoviesRequest
	1, // 5: movies.v1.MoviesService.GetMovieById:input_type -> movies.v1.GetMovieByIdRequest
	3, // 6: movies.v1.MoviesService.CreateMovie:input_type -> movies.v1.CreateMovieRequest
	6, // 7: movies.v1.MoviesService.GetMovies:output_type -> movies.v1.GetMoviesResponse
	2, // 8: movies.v1.MoviesService.GetMovieById:output_type -> movies.v1.GetMovieByIdResponse
	4, // 9: movies.v1.MoviesService.CreateMovie:output_type -> movies.v1.CreateMovieResponse
	7, // [7:10] is the sub-list for method output_type
	4, // [4:7] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_movies_v1_movie_proto_init() }
func file_movies_v1_movie_proto_init() {
	if File_movies_v1_movie_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_movies_v1_movie_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Movie); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_movies_v1_movie_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetMovieByIdRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_movies_v1_movie_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetMovieByIdResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_movies_v1_movie_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateMovieRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_movies_v1_movie_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateMovieResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_movies_v1_movie_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetMoviesRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_movies_v1_movie_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetMoviesResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_movies_v1_movie_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_movies_v1_movie_proto_goTypes,
		DependencyIndexes: file_movies_v1_movie_proto_depIdxs,
		MessageInfos:      file_movies_v1_movie_proto_msgTypes,
	}.Build()
	File_movies_v1_movie_proto = out.File
	file_movies_v1_movie_proto_rawDesc = nil
	file_movies_v1_movie_proto_goTypes = nil
	file_movies_v1_movie_proto_depIdxs = nil
}
