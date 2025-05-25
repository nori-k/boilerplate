# syntax=docker/dockerfile:1
# --- Builder stage ---
FROM golang:1.22-slim AS builder
WORKDIR /app
COPY . .
RUN go mod tidy && go build -o app main.go

# --- Test stage ---
FROM golang:1.22-slim AS test
WORKDIR /app
COPY --from=builder /app /app
RUN go test ./...

# --- Production stage ---
FROM gcr.io/distroless/base-debian12 AS production
WORKDIR /app
COPY --from=builder /app/app ./app
EXPOSE 4000
CMD ["/app/app"]
