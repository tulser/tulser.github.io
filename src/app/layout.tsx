import "@/styles/globals.css";
import style from "./layout.module.scss";

import type { Metadata } from "next";

import { meta } from "@/env";

export const metadata: Metadata = {
    title: meta.title,
    description: meta.description,
};

export default function RootLayout(arg: {
    children: React.ReactNode
}) {
    return (
        <html lang="en-us">
            <body className={style.body}>
                {arg.children}
            </body>
        </html>
    );
}
