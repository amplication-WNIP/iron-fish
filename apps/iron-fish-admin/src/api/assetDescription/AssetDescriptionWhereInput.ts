import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type AssetDescriptionWhereInput = {
  asset?: AssetWhereUniqueInput;
  transaction?: TransactionWhereUniqueInput;
};
