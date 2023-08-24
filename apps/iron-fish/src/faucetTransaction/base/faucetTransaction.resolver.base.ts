/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateFaucetTransactionArgs } from "./CreateFaucetTransactionArgs";
import { UpdateFaucetTransactionArgs } from "./UpdateFaucetTransactionArgs";
import { DeleteFaucetTransactionArgs } from "./DeleteFaucetTransactionArgs";
import { FaucetTransactionCountArgs } from "./FaucetTransactionCountArgs";
import { FaucetTransactionFindManyArgs } from "./FaucetTransactionFindManyArgs";
import { FaucetTransactionFindUniqueArgs } from "./FaucetTransactionFindUniqueArgs";
import { FaucetTransaction } from "./FaucetTransaction";
import { FaucetTransactionService } from "../faucetTransaction.service";
@graphql.Resolver(() => FaucetTransaction)
export class FaucetTransactionResolverBase {
  constructor(protected readonly service: FaucetTransactionService) {}

  async _faucetTransactionsMeta(
    @graphql.Args() args: FaucetTransactionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [FaucetTransaction])
  async faucetTransactions(
    @graphql.Args() args: FaucetTransactionFindManyArgs
  ): Promise<FaucetTransaction[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => FaucetTransaction, { nullable: true })
  async faucetTransaction(
    @graphql.Args() args: FaucetTransactionFindUniqueArgs
  ): Promise<FaucetTransaction | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => FaucetTransaction)
  async createFaucetTransaction(
    @graphql.Args() args: CreateFaucetTransactionArgs
  ): Promise<FaucetTransaction> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => FaucetTransaction)
  async updateFaucetTransaction(
    @graphql.Args() args: UpdateFaucetTransactionArgs
  ): Promise<FaucetTransaction | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FaucetTransaction)
  async deleteFaucetTransaction(
    @graphql.Args() args: DeleteFaucetTransactionArgs
  ): Promise<FaucetTransaction | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}