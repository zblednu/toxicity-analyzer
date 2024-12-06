# models used

## Bert 
Huggingface's pretrained [toxic-bert model](https://huggingface.co/unitary/toxic-bert)
Was trained on [jigsaw unintended bias dataset](https://huggingface.co/datasets/google/jigsaw_unintended_bias)


## Neural
[Tensorflow.js pretrained model](https://github.com/tensorflow/tfjs-models/tree/master/toxicity) based on Universal Sentence Encoder.

Was trained on the [civil comments dataset](https://figshare.com/articles/data_json/7376747)

## Dictionary
[Bad-Words](https://www.npmjs.com/package/bad-words) javascript library


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
