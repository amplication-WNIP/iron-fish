/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, BlockTransaction, Block, Transaction } from "@prisma/client";

export class BlockTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.BlockTransactionCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlockTransactionCountArgs>
  ): Promise<number> {
    return this.prisma.blockTransaction.count(args);
  }

  async findMany<T extends Prisma.BlockTransactionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlockTransactionFindManyArgs>
  ): Promise<BlockTransaction[]> {
    return this.prisma.blockTransaction.findMany(args);
  }
  async findOne<T extends Prisma.BlockTransactionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlockTransactionFindUniqueArgs>
  ): Promise<BlockTransaction | null> {
    return this.prisma.blockTransaction.findUnique(args);
  }
  async create<T extends Prisma.BlockTransactionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlockTransactionCreateArgs>
  ): Promise<BlockTransaction> {
    return this.prisma.blockTransaction.create<T>(args);
  }
  async update<T extends Prisma.BlockTransactionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlockTransactionUpdateArgs>
  ): Promise<BlockTransaction> {
    return this.prisma.blockTransaction.update<T>(args);
  }
  async delete<T extends Prisma.BlockTransactionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlockTransactionDeleteArgs>
  ): Promise<BlockTransaction> {
    return this.prisma.blockTransaction.delete(args);
  }

  async getBlock(parentId: string): Promise<Block | null> {
    return this.prisma.blockTransaction
      .findUnique({
        where: { id: parentId },
      })
      .block();
  }

  async getTransaction(parentId: string): Promise<Transaction | null> {
    return this.prisma.blockTransaction
      .findUnique({
        where: { id: parentId },
      })
      .transaction();
  }
}