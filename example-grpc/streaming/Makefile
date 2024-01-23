.PHONY: all
all: get-protoc-plugins proto-gen

.PHONY: get-protoc-plugins
get-protoc-plugins:
	go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.32
	go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2

.PHONY: proto-gen
proto-gen:
	protoc --go_out=. --go_opt=paths=source_relative \
		--go-grpc_out=. --go-grpc_opt=paths=source_relative \
		proto/streaming.proto

run-server:
	go run cmd/server/main.go

run-client:
	go run cmd/client/main.go

run-download-client:
	go run cmd/download-client/main.go