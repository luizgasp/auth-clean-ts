import { prisma } from "../../../../core/infra/prisma/client";

import { Maybe } from "../../../../core/shared/logic/maybe";

import { CreateAccountTokenDTO } from "../../domain/dtos/create-account-token-dto";
import { AccountTokenEntity } from "../../domain/entities/account-token-entity";
import { IAccountTokenRepository } from "../../domain/repositories/i-account-token-repository";
import { AccountTokenEntityMapper } from "../mappers/account-token-entity-mapper";

export class AccountTokenRepositoryImpl implements IAccountTokenRepository {
  async create(data: CreateAccountTokenDTO): Promise<AccountTokenEntity> {
    const { accountId, refreshToken } = data;

    const accountToken = await prisma.accountsTokens.create({
      data: { account_id: accountId, refresh_token: refreshToken }
    });

    return AccountTokenEntityMapper.toDomain(accountToken);
  }

  async findByRefreshToken(refresh_token: string): Promise<Maybe<AccountTokenEntity>> {
    const accountToken = await prisma.accountsTokens.findFirst({ where: { refresh_token } });

    if (!accountToken) return null;

    return AccountTokenEntityMapper.toDomain(accountToken);
  }

  async deleteById(id: string): Promise<void> {
    await prisma.accountsTokens.delete({ where: { id } });
  }
} 