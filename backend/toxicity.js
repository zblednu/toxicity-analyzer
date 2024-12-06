import { pipeline } from "@huggingface/transformers";
import tfjsToxicity from "@tensorflow-models/toxicity"
import { Filter } from "bad-words";

global.bert = await pipeline("sentiment-analysis", "Xenova/toxic-bert");
global.neural = await tfjsToxicity.load();
global.filter = new Filter();

export default async function analyse(message) {
  return {
    bert: await evalBert(message),
    neural: await evalNeural(message),
    dict: evalDict(message)
  };
}

async function evalBert(message) {
  const output = (await bert(message)); 
  const score = output[0].score;

  return Number(score.toFixed(2));
}

async function evalNeural(message) {
  const output = await neural.classify(message);
  const score = output.reduce((highestScore, elem) => {
    const currentScore = elem.results[0].probabilities[1];
    return currentScore > highestScore ? currentScore : highestScore;
  }, 0);

  return Number(score.toFixed(2));
}

function evalDict(message) {
  return filter.isProfane(message) ? 1 : 0;
}
