export type EosioAuthorizationObject = { actor: string; permission: string };

export type EosioActionObject = {
  account: string;
  name: string;
  authorization: EosioAuthorizationObject[];
  data: any;
};

/* tslint:disable:variable-name */

export class ActionGenerator {
  constructor(readonly contract: string, readonly token_contract: string) {}

  async open(
    authorization: EosioAuthorizationObject[],
    owner: string,
    symbol: string,
    ram_payer: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "open", {
      owner,
      symbol,
      ram_payer,
    });
  }

  async close(
    authorization: EosioAuthorizationObject[],
    owner: string,
    symbol: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "close", {
      owner,
      symbol,
    });
  }

  async create(
    authorization: EosioAuthorizationObject[],
    issuer: string,
    maximum_supply: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "create", {
      issuer,
      maximum_supply,
    });
  }

  async issue(
    authorization: EosioAuthorizationObject[],
    to: string,
    quantity: string,
    memo: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "issue", {
      to,
      quantity,
      memo,
    });
  }

  async retire(
    authorization: EosioAuthorizationObject[],
    quantity: string,
    memo: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "retire", {
      quantity,
      memo,
    });
  }

  async transfer(
    authorization: EosioAuthorizationObject[],
    from: string,
    to: string,
    quantity: string,
    memo: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "transfer", {
      from,
      to,
      quantity,
      memo,
    });
  }

  async mine(
    authorization: EosioAuthorizationObject[]
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "mine", {});
  }

  async addShareholder(
    authorization: EosioAuthorizationObject[],
    account: string,
    value: number
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "addshrholder", {
      account,
      value,
    });
  }

  protected _pack(
    account: string,
    authorization: EosioAuthorizationObject[],
    name: string,
    data: any
  ): EosioActionObject[] {
    return [{ account, name, authorization, data }];
  }
}
