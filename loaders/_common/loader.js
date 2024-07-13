const path = require("path");
const glob = require("glob");
const { rootPath } = require("../../config/env.config");

module.exports = (pattern) => {
  const modules = [];
  const patternPath = path.join(rootPath, pattern);
  glob(patternPath, (err, files) => {
    if (err) {
      console.error(
        `Error finding the file that match the pattern ${pattern}`,
        err
      );
      return;
    }
    files.forEach((file) => {
      modules.push(file);
    });
  });
  return modules;
};
