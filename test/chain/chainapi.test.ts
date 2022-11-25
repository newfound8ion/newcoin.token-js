import { doesNotMatch } from "assert";
import { expect } from "chai";
import fetch from "node-fetch";
import { ChainApi } from "../../src/api";

// tslint:disable-next-line:no-var-requires

describe("Chain API", () => {
  const api = new ChainApi("https://testnet.newcoin.org", "eosio.token", fetch);

  it("Get Shareholder", async () => {
    const response = await api.getShareholder("alice");
    const json = await response.json();
    console.log(json);
  }).timeout(2000);

  it("Get Last Mining Test", async () => {
    const response = await api.getLastMining();
    const json = await response.json();
    console.log(json);
  }).timeout(2000);
});
