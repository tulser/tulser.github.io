import "@/styles/globals.css";
import style from "./layout.module.scss";

import type { Metadata } from "next";

import { pagemeta } from "@/meta";

export const metadata: Metadata = {
    title: pagemeta.title,
    description: pagemeta.description,
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
