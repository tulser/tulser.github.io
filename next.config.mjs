import { join, dirname } from "path";

import createMDX from '@next/mdx'

const __dirname = dirname(import.meta.filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx'],
    reactStrictMode: true,
    experimental: {
        typedRoutes: true,
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
