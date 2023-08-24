import { AssetDescriptionListRelationFilter } from "../assetDescription/AssetDescriptionListRelationFilter";
import { BlockTransactionListRelationFilter } from "../blockTransaction/BlockTransactionListRelationFilter";
import { AssetListRelationFilter } from "../asset/AssetListRelationFilter";

export type TransactionWhereInput = {
  assetDescriptions?: AssetDescriptionListRelationFilter;
  blocksTransactions?: BlockTransactionListRelationFilter;
  createdAssets?: AssetListRelationFilter;
};
