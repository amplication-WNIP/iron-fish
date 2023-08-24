import { BlockWhereUniqueInput } from "../block/BlockWhereUniqueInput";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type BlockTransactionWhereInput = {
  block?: BlockWhereUniqueInput;
  transaction?: TransactionWhereUniqueInput;
};
