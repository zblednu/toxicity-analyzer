# backend

## to run:
```shell
uitoxic/backend$ npm install
uitoxic/backend$ node server.js
```
It will take a while setting up first time

## to use:
- request example:
```shell
curl -X POST http://localhost:8080 \
     -H "Content-Type: application/json" \
     -d '{"message":"its about time you start talking, cock-sucker"}'
```
- response:
```
{
    "bert": 0.98,
    "neural": 0.93,
    "dict": 1
}
```
