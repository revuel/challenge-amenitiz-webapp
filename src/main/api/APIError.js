/**
 * Class to wrap Errors caught at the API module
 */
export class APIError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
  }
}
