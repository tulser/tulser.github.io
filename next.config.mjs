import { join, dirname } from "path";

import createMDX from '@next/mdx';

const __dirname = dirname(import.meta.filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx'],
    reactStrictMode: true,
    typedRoutes: true,
    turbopack: {
        resolveAlias: {
            "next-mdx-import-source-file": "./mdx-components.ts",
        },
    },
    sassOptions: {
        loadPaths: [
            join(__dirname, 'styles'),
        ],
    },
};

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
    mdxRs: true
});

export default withMDX(nextConfig);
