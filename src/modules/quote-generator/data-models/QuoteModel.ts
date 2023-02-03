// !!! In real world app, I'd generate a new library where I'd put all of the data modules
// which can be reused across the app

export type QuoteModel = {
  quote_id: number;
  quote: string;
  character: string;
};

export type QuotesModel = ReadonlyArray<QuoteModel>;
