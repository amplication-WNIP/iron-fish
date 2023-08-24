import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";
import { AssetDescriptionCreateNestedManyWithoutAssetsInput } from "./AssetDescriptionCreateNestedManyWithoutAssetsInput";

export type AssetCreateInput = {
  createdTransaction: TransactionWhereUniqueInput;
  descriptions?: AssetDescriptionCreateNestedManyWithoutAssetsInput;
  identifier: string;
  metadata: string;
  name: string;
  owner: string;
  supply: number;
  verifiedAt?: Date | null;
};
