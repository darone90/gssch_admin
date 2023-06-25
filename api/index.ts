import User from "./user";

interface API {
  user: User
}

interface Config {
  api: string
}

class Api implements API {

  readonly user: User

  constructor(config:Config) {
    this.user = new User(config.api);
  }
}

export default Api;