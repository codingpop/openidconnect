class Controllers {
  static async registerUser(ctx) {
    ctx.status = 201;
    ctx.body = {
      message: 'You are now registered',
    };
  }

  static async updateUser(ctx) {
    ctx.status = 200;
    ctx.body = {
      message: 'You are updated',
    };
  }
}

module.exports = Controllers;
