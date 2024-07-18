const loader = require('./_common/loader');

module.exports = class RoutersLoader {
  constructor({ versions }) {
    this.routers = {};
    this.versions = versions;
    this._load();
  }

  _load() {
    this.versions.forEach((v) => {
      this.routers[v] = loader(`/routes/${v}/**/*.router.js`);
    });
  }

  getRouters(v = 'all') {
    if (v === 'all') return this.routers;
    return this.routers[v];
  }
};
