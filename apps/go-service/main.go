package main

import (
	"fmt"
	"log"
	"net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
	name := r.URL.Query().Get("name")
	if name == "" {
		name = "World"
	}
	w.Header().Set("Content-Type", "application/json")
	fmt.Fprintf(w, `{"greeting": "Hello, %s!"}` , name)
}

func main() {
	http.HandleFunc("/hello", helloHandler)
	log.Println("Go service listening on :4000")
	log.Fatal(http.ListenAndServe(":4000", nil))
}
