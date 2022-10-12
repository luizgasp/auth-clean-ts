import { DomainError } from "src/core/shared/errors/domain-error";

import { Either, left, right } from "../../../../../core/shared/logic/Either";
import { JWTAuthService } from "../../../../../core/shared/services/auth/jwt-auth-service";

import { InvalidEmailOrPasswordError } from "../../errors/invalid-email-or-password-error";
import { IUserRepository } from "../../repositories/i-user-repository";
import { BCryptCryptographyServiceImpl } from "../../../../../core/shared/services/cryptography/bcrypt-cryptography-service-impl";

type IRequest = {
  email: string;
  password: string;
}

type TokenResponse = {
  token: string;
}

export class AuthenticateUsecase {
  constructor(
    private userRepository: IUserRepository
  ) { }

  async execute({ email, password }: IRequest): Promise<Either<DomainError, TokenResponse>> {
    const user = await this.userRepository.findUser({ email });

    if (!user) {
      return left(new InvalidEmailOrPasswordError());
    }

    const isPasswordValid = new BCryptCryptographyServiceImpl().compare(user.props.password.value, password);

    if (!isPasswordValid) {
      return left(new InvalidEmailOrPasswordError());
    }

    const { token } = JWTAuthService.auth(user);

    return right({ token: token });
  }
}