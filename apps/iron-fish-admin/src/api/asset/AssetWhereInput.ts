import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";
import { AssetDescriptionListRelationFilter } from "../assetDescription/AssetDescriptionListRelationFilter";

export type AssetWhereInput = {
  createdTransaction?: TransactionWhereUniqueInput;
  descriptions?: AssetDescriptionListRelationFilter;
};
