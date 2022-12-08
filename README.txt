# TrueCaller-Home-Assignment-Nikolai-Volodin

## Running this project

1. `npm i`
2. `npm run dev` starts up a hot-reload express webserver on port 8080

## Testing this project

`nmp run test`

### Users API

## Match Lognest prefix

http://localhost:8080/match
Method POST
Required Payload:
1. str

example payload :
{
  "str":"randomString"
}

#CURL

curl -X POST http://localhost:8080/match -H "Content-Type: application/json" -d '{"str": "random_string"}' 