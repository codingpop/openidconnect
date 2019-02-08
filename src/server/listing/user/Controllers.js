class Controllers {
  static async getUser(ctx) {
    ctx.status = 200;
    ctx.body = {
      message: 'I am a user',
    };
  }

  static async getUsers(ctx) {
    ctx.status = 200;
    ctx.body = {
      message: 'We are users',
    };
  }
}

module.exports = Controllers;
