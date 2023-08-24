import { BlockTransaction } from "../blockTransaction/BlockTransaction";

export type Block = {
  blocksTransactions?: Array<BlockTransaction>;
  createdAt: Date;
  difficulty: number | null;
  graffiti: string;
  hash: string;
  id: number;
  main: boolean;
  networkVersion: number;
  previousBlockHash: string;
  sequence: number;
  size: number | null;
  timeSinceLastBlockMs: number | null;
  timestamp: Date;
  transactionsCount: number;
  updatedAt: Date;
  work: number | null;
};
