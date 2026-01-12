import withMarkdoc from "@markdoc/next.js"

const nextConfig = {
  output: "export" as const,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdoc"],
  turbopack: {},
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default withMarkdoc()(nextConfig)
