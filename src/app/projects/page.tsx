import cstyle from "@/styles/common.module.scss";
import style from "./page.module.scss";

import { ReactNode } from "react";

import { classes } from "@/helpers";
import { StandardLayout } from "@/components/layouts";

import { projects } from "@/meta";

export interface ProjectInfo {
    title: string;
    short_description: string;
    md_description?: ReactNode;
    target_url?: string;
}

// TODO: Try using `flex-wrap` with single div container for multiple entries. 
function ProjectInfoBoxCtr(args: ProjectInfo[]): ReactNode {
    var boxrow_key_iter = 0;
    var boxrow_ctr_key_iter = 0;
    var boxes: JSX.Element[] = [];
    while (boxrow_key_iter != args.length) {
        let row_maxitems = 2;
        let boxrow = args.slice(boxrow_key_iter, boxrow_key_iter + row_maxitems).map((entry, ix) => {
            const ret = (
                <div key={boxrow_key_iter} className={classes([cstyle.ctr_common, "grow px-8 py-5"])}>
                    <h2 className="mb-1 text-lg"><a href={entry.target_url}>{entry.title}</a></h2>
                    <p className="mb-4 font-bold italic">{entry.short_description}</p>
                    <div className={classes([cstyle.markdown_base])}>
                        { entry.md_description }
                    </div>
                </div>
            );
            boxrow_key_iter += 1;
            return ret;
        });
        let boxrow_ctr: JSX.Element = (
            <div key={boxrow_ctr_key_iter} className="mx-10 flex gap-x-5">
                {boxrow}
            </div>
        );
        boxrow_ctr_key_iter += 1;
        boxes.push(boxrow_ctr);
    }
    return boxes;
}

export default function Page() {
    return (
        <StandardLayout>
            <article className={classes([style.main_content, cstyle.main_content, cstyle.led_font])}>
                <section id="projects" className={style.sec_projects}>
                    <div className={classes([style.projects_title, "pt-8 pb-8 mb-10 text-center"])}>
                        <h1 className="text-4xl">Original Projects</h1>
                    </div>
                    { ProjectInfoBoxCtr(projects) }
                </section>
            </article>
        </StandardLayout>
    );
}
