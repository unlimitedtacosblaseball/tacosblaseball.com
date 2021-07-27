const { default: next } = require("next");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  trailingSlash: true,
  pageExtensions: ["js", "jsx", "md", "mdx"]
})