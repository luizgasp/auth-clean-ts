import { AccountRepositoryImpl } from "../../../../../../modules/account/application/repositories/account-repository-impl";
import { DeleteAccountUsecase } from "../../../../../../modules/account/domain/usecases/delete-account-usecase";
import { DeleteAccountController } from "../../../../../../modules/account/presentation/controllers/delete-account-controller";

export class DeleteAccountControllerFactory {
  static instance(): DeleteAccountController {
    const accountRepository = new AccountRepositoryImpl();

    const deleteAccountUsecase = new DeleteAccountUsecase(accountRepository);

    const deleteAccountController = new DeleteAccountController(deleteAccountUsecase);

    return deleteAccountController;
  }
}