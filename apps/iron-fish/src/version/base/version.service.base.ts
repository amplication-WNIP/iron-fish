/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Version } from "@prisma/client";

export class VersionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.VersionCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.VersionCountArgs>
  ): Promise<number> {
    return this.prisma.version.count(args);
  }

  async findMany<T extends Prisma.VersionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.VersionFindManyArgs>
  ): Promise<Version[]> {
    return this.prisma.version.findMany(args);
  }
  async findOne<T extends Prisma.VersionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.VersionFindUniqueArgs>
  ): Promise<Version | null> {
    return this.prisma.version.findUnique(args);
  }
  async create<T extends Prisma.VersionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VersionCreateArgs>
  ): Promise<Version> {
    return this.prisma.version.create<T>(args);
  }
  async update<T extends Prisma.VersionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VersionUpdateArgs>
  ): Promise<Version> {
    return this.prisma.version.update<T>(args);
  }
  async delete<T extends Prisma.VersionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.VersionDeleteArgs>
  ): Promise<Version> {
    return this.prisma.version.delete(args);
  }
}
