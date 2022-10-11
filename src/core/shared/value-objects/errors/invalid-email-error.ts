import { ValueObjectError } from "../../errors/value-object-error";

export class InvalidEmailError extends ValueObjectError {
  constructor() {
    super('Invalid email');
  }
}