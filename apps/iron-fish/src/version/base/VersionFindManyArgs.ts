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
import { VersionWhereInput } from "./VersionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { VersionOrderByInput } from "./VersionOrderByInput";

@ArgsType()
class VersionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => VersionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => VersionWhereInput, { nullable: true })
  @Type(() => VersionWhereInput)
  where?: VersionWhereInput;

  @ApiProperty({
    required: false,
    type: [VersionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [VersionOrderByInput], { nullable: true })
  @Type(() => VersionOrderByInput)
  orderBy?: Array<VersionOrderByInput>;

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

export { VersionFindManyArgs as VersionFindManyArgs };
