.PHONY: all
all: mod lint break-check fmt proto-gen vendor

.PHONY: get-buf
get-buf:
	brew tap bufbuild/buf
	brew install buf

.PHONY: break-check
break-check:
	buf breaking protobuf --against "ssh://git@github.com/cshep4/proto-registry.git#branch=main,subdir=protobuf"

.PHONY: lint
lint:
	buf lint protobuf

.PHONY: fmt
fmt:
	buf format -w protobuf

.PHONY: mod
mod:
	buf dep update protobuf

.PHONY: proto-gen
proto-gen:
	buf generate protobuf

.PHONY: vendor
vendor:
	go mod tidy
	go mod vendor