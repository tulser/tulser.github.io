import cstyle from "@/styles/common.module.scss";

import type { ReactNode } from "react";

import { classes } from "@/helpers";

import { Header } from "./partials"


export function StandardLayout(args: {
    children: ReactNode,
}) {
    return (
        <main className={classes([cstyle.main])}>
            <Header></Header>
            {args.children}
        </main>
    );
}
