import { Adapter } from "src/core/shared/contracts/Adapter";

import { Users } from "@prisma/client";
import { UserEntity } from "../../domain/entities/UserEntity";

class UserEntityAdapter implements Adapter<Users, UserEntity> {
  fromDb(object: Users): UserEntity {
    return new UserEntity(
      object.username,
      object.email,
      object.password,
      object.admin,
      object.created_at,
      object.updated_at,
      object.id
    );
  }
}

export { UserEntityAdapter };