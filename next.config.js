module.exports = {
  reactStrictMode: true,
}

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"]
});