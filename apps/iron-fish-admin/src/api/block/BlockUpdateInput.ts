import { BlockTransactionUpdateManyWithoutBlocksInput } from "./BlockTransactionUpdateManyWithoutBlocksInput";

export type BlockUpdateInput = {
  blocksTransactions?: BlockTransactionUpdateManyWithoutBlocksInput;
  difficulty?: number | null;
  graffiti?: string;
  hash?: string;
  main?: boolean;
  networkVersion?: number;
  previousBlockHash?: string;
  sequence?: number;
  size?: number | null;
  timeSinceLastBlockMs?: number | null;
  timestamp?: Date;
  transactionsCount?: number;
  work?: number | null;
};
