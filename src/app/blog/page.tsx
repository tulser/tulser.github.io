import cstyle from "@/styles/common.module.scss";
import style from "./page.module.scss";

import { StaticImageData } from 'next/image';
import Image from 'next/image';

import { classes } from "@/helpers";
import { StandardLayout } from "@/components/layouts";


export default function Page() {
    return (
        <StandardLayout>
            <article className={classes([style.main_content, cstyle.main_content])}>
                <section id="wip" className={classes([style.title, "flex", "flex-row"])}>
                    <p>Under Construction!</p>
                </section>
            </article>
        </StandardLayout>
    );
}
