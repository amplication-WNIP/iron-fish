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
import { AssetDescriptionService } from "../assetDescription.service";
import { AssetDescriptionCreateInput } from "./AssetDescriptionCreateInput";
import { AssetDescriptionWhereInput } from "./AssetDescriptionWhereInput";
import { AssetDescriptionWhereUniqueInput } from "./AssetDescriptionWhereUniqueInput";
import { AssetDescriptionFindManyArgs } from "./AssetDescriptionFindManyArgs";
import { AssetDescriptionUpdateInput } from "./AssetDescriptionUpdateInput";
import { AssetDescription } from "./AssetDescription";

export class AssetDescriptionControllerBase {
  constructor(protected readonly service: AssetDescriptionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AssetDescription })
  async create(
    @common.Body() data: AssetDescriptionCreateInput
  ): Promise<AssetDescription> {
    return await this.service.create({
      data: {
        ...data,

        asset: {
          connect: data.asset,
        },

        transaction: {
          connect: data.transaction,
        },
      },
      select: {
        asset: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        transaction: {
          select: {
            id: true,
          },
        },

        type: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AssetDescription] })
  @ApiNestedQuery(AssetDescriptionFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<AssetDescription[]> {
    const args = plainToClass(AssetDescriptionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        asset: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        transaction: {
          select: {
            id: true,
          },
        },

        type: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AssetDescription })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: AssetDescriptionWhereUniqueInput
  ): Promise<AssetDescription | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        asset: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        transaction: {
          select: {
            id: true,
          },
        },

        type: true,
        updatedAt: true,
        value: true,
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
  @swagger.ApiOkResponse({ type: AssetDescription })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: AssetDescriptionWhereUniqueInput,
    @common.Body() data: AssetDescriptionUpdateInput
  ): Promise<AssetDescription | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          asset: {
            connect: data.asset,
          },

          transaction: {
            connect: data.transaction,
          },
        },
        select: {
          asset: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          transaction: {
            select: {
              id: true,
            },
          },

          type: true,
          updatedAt: true,
          value: true,
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
  @swagger.ApiOkResponse({ type: AssetDescription })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: AssetDescriptionWhereUniqueInput
  ): Promise<AssetDescription | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          asset: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          transaction: {
            select: {
              id: true,
            },
          },

          type: true,
          updatedAt: true,
          value: true,
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
