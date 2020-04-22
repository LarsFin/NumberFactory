export class ArgumentError extends Error {

  constructor(message) {
      super(message);

      Object.setPrototypeOf(this, ArgumentError.prototype);
  }

}
