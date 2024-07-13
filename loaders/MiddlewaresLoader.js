const loader = require("./_common/loader");

module.exports = class MiddlewareLoader {
  constructor() {
    this.mws = {};
    this._load();
  }

  _load() {
    loader("./mw/**/*.mw.js");
  }

  getMiddlewares() {
    return this.mws;
  }

  applyMiddlwares() {}
};
