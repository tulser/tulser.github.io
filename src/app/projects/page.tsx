import cstyle from "@/styles/common.module.scss";
import style from "./page.module.scss";

import { classes } from "@/helpers";
import { StandardLayout } from "@/components/layouts";
import { ProjectInfoBox, ProjectInfoBoxArgs } from "@/components/partials";


let projects: ProjectInfoBoxArgs[] = [
    {
        title: "RANIA Fall Detection System (rania-fds)",
        description: `\
            rania-fds was a capstone project designed in Fall 2023 and developed \
            in Spring 2024 by myself and two other peers. Despite having a fairly \
            comprehensive vision and design, it was largely unfinished due to \
            overestimation of our team's capabilities, particularly in writing \
            the software. We had aimed to use 2d/planar LIDAR for detecting \
            outlines of persons when they were on the floor and then using a kNN \
            trained on (transformed) outlines to make a determination of the fall \
            state.\
            `,
        target_url: "https://github.com/tulser/rania-fds",
    },
];

// TODO: Try using `flex-wrap` with single div container for multiple entries. 
function ProjectInfoBoxCtr(args: ProjectInfoBoxArgs[]) {
    var boxrow_key_iter = 0;
    var boxrow_ctr_key_iter = 0;
    var boxes: JSX.Element[] = [];
    while (boxrow_key_iter != args.length) {
        let row_maxitems = 2;
        let boxrow = args.slice(boxrow_key_iter, boxrow_key_iter + row_maxitems).map((entry, ix) => {
            const ret = (<ProjectInfoBox key={boxrow_key_iter}
                    title={entry.title}
                    description={entry.description}
                    target_url={entry.target_url}
                />);
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
