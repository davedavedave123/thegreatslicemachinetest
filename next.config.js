const withTM = require("next-transpile-modules")(["next-slicezone"]);

module.exports = withTM();
module.exports = {
  images: {
    domains: ["images.prismic.io"],
  },
};
