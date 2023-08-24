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
import { CreateVersionArgs } from "./CreateVersionArgs";
import { UpdateVersionArgs } from "./UpdateVersionArgs";
import { DeleteVersionArgs } from "./DeleteVersionArgs";
import { VersionCountArgs } from "./VersionCountArgs";
import { VersionFindManyArgs } from "./VersionFindManyArgs";
import { VersionFindUniqueArgs } from "./VersionFindUniqueArgs";
import { Version } from "./Version";
import { VersionService } from "../version.service";
@graphql.Resolver(() => Version)
export class VersionResolverBase {
  constructor(protected readonly service: VersionService) {}

  async _versionsMeta(
    @graphql.Args() args: VersionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Version])
  async versions(
    @graphql.Args() args: VersionFindManyArgs
  ): Promise<Version[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Version, { nullable: true })
  async version(
    @graphql.Args() args: VersionFindUniqueArgs
  ): Promise<Version | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Version)
  async createVersion(
    @graphql.Args() args: CreateVersionArgs
  ): Promise<Version> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Version)
  async updateVersion(
    @graphql.Args() args: UpdateVersionArgs
  ): Promise<Version | null> {
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

  @graphql.Mutation(() => Version)
  async deleteVersion(
    @graphql.Args() args: DeleteVersionArgs
  ): Promise<Version | null> {
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