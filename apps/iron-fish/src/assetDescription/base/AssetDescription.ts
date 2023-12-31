/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Asset } from "../../asset/base/Asset";
import { ValidateNested, IsDate, IsInt, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { Transaction } from "../../transaction/base/Transaction";
import { EnumAssetDescriptionType } from "./EnumAssetDescriptionType";

@ObjectType()
class AssetDescription {
  @ApiProperty({
    required: true,
    type: () => Asset,
  })
  @ValidateNested()
  @Type(() => Asset)
  asset?: Asset;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    type: () => Transaction,
  })
  @ValidateNested()
  @Type(() => Transaction)
  transaction?: Transaction;

  @ApiProperty({
    required: true,
    enum: EnumAssetDescriptionType,
  })
  @IsEnum(EnumAssetDescriptionType)
  @Field(() => EnumAssetDescriptionType, {
    nullable: true,
  })
  type?: "BURN" | "MINT";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  value!: number;
}

export { AssetDescription as AssetDescription };
