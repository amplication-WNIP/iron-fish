/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BlockDailyWhereInput } from "./BlockDailyWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BlockDailyOrderByInput } from "./BlockDailyOrderByInput";

@ArgsType()
class BlockDailyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BlockDailyWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BlockDailyWhereInput, { nullable: true })
  @Type(() => BlockDailyWhereInput)
  where?: BlockDailyWhereInput;

  @ApiProperty({
    required: false,
    type: [BlockDailyOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BlockDailyOrderByInput], { nullable: true })
  @Type(() => BlockDailyOrderByInput)
  orderBy?: Array<BlockDailyOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BlockDailyFindManyArgs as BlockDailyFindManyArgs };
