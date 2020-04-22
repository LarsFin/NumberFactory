export class ArgumentError extends Error {

  name: string;

  constructor(message) {
      super(message);
      this.name = "ArgumentError";
  }

}
