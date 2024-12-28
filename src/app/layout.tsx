import "@/styles/globals.css";
import style from "./layout.module.scss";

import { meta } from "@/env";

export const metadata = {
    title: meta.title,
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
