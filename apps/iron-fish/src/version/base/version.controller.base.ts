/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { VersionService } from "../version.service";
import { VersionCreateInput } from "./VersionCreateInput";
import { VersionWhereInput } from "./VersionWhereInput";
import { VersionWhereUniqueInput } from "./VersionWhereUniqueInput";
import { VersionFindManyArgs } from "./VersionFindManyArgs";
import { VersionUpdateInput } from "./VersionUpdateInput";
import { Version } from "./Version";

export class VersionControllerBase {
  constructor(protected readonly service: VersionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Version })
  async create(@common.Body() data: VersionCreateInput): Promise<Version> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        version: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Version] })
  @ApiNestedQuery(VersionFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Version[]> {
    const args = plainToClass(VersionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        version: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Version })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: VersionWhereUniqueInput
  ): Promise<Version | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        version: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Version })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: VersionWhereUniqueInput,
    @common.Body() data: VersionUpdateInput
  ): Promise<Version | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          version: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Version })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: VersionWhereUniqueInput
  ): Promise<Version | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          version: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
