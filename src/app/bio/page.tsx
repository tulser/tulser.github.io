import cstyle from "@/styles/common.module.scss";
import style from "./page.module.scss";

import { StaticImageData } from 'next/image';
import Image from 'next/image';

import { info } from "@/env";
import { classes } from "@/helpers";
import { StandardLayout } from "@/components/layouts";

import Bio from "@/res/bio.md";


export default function Page() {
    return (
        <StandardLayout>
            <article className={classes([style.main_content, cstyle.main_content])}>
                <section id="bio" className={classes([style.title, "flex", "flex-row"])}>
                    <div className={classes([style.left_ss, "grow"])}>
                        <Bio />
                    </div>
                    <div className={classes([style.right_ss, "flex-none"])}>
                        <div className={classes([style.portrait_ctr])}>
                        </div>
                        <div className={classes([style.caption])}>
                            <h1>{ info.bio_name_full }</h1>
                            <h2>{ info.bio_title }</h2>
                        </div>
                    </div>
                </section>
                <section id="wip" className={classes([style.info, "flex"])}>
                </section>
            </article>
        </StandardLayout>
    );
}
