import type { NextConfig } from "next";

const CANONICAL_ORIGIN = "https://jsdetailingcolchester.co.uk";

// Hosts that serve this same deployment but must never be indexed as
// separate sites — 308 them to the canonical domain so link equity and
// indexing consolidate on one origin.
const DUPLICATE_HOSTS = [
  "www.jsdetailingcolchester.co.uk",
  "js-car-detailing-2b36.vercel.app",
];

const nextConfig: NextConfig = {
  poweredByHeader: false,

  async redirects() {
    return DUPLICATE_HOSTS.map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: `${CANONICAL_ORIGIN}/:path*`,
      permanent: true,
    }));
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        // Belt-and-braces with the admin layout's robots meta.
        source: "/admin/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/api/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
};

export default nextConfig;
