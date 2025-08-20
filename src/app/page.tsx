import cstyle from "@/styles/common.module.scss";
import style from "./page.module.scss";

import { ReactNode } from "react";
import Image from "next/image";

import { info, links } from "@/meta";
import { classes } from "@/helpers";
import { StandardLayout } from "@/components/layouts";
import { LinkButton, BioLinkInfo } from "@/components/partials";

import Bio from "markdown/bio.md";

import portrait from "public/static/images/portrait.webp";
import lotus from "public/static/images/lotus.webp";


function BioLinkBoard(args: BioLinkInfo[]): ReactNode {
    var key_iter = 0;
    return (
        <div className={classes(["flex flex-row justify-center", style.link_board])}>
            {args.map((link) => {
                const ret = (<LinkButton key={key_iter} target_title={link.target_title} target_url={link.target_url} image_src={link.image_src} />)
                key_iter += 1;
                return ret;
            })}
        </div>
    );
}

export default function Page() {
    return (
        <StandardLayout>
            <article className={classes([style.main_content, cstyle.main_content, cstyle.led_font])}>
                <section id="profile" className={style.sec_profile}>
                    <div className={classes([style.profile_ctr, "flex flex-col"])}>
                        <div className={style.portrait}>
                            <Image src={portrait} fill={true} alt="Personal headshot" priority={true}/>
                        </div>
                        <div className={style.portrait_below}>
                            <span className="w-full text-center block">
                                <a href={`mailto:${info.bio_email}`} target="_blank">{ info.bio_email }</a>    
                            </span>
                            <h1 className="w-full text-center">{ info.bio_name_full }</h1>
                            <p className="w-full text-center mb-4">{ info.bio_title }</p>
                            { BioLinkBoard(links) }
                        </div>
                    </div>
                </section>
                <section id="bio" className={classes([style.sec_bio, "flex", "flex-row"])}>
                    <div className={classes([style.left_ss, "grow basis-[80%]"])}>
                        <div className={classes([cstyle.markdown_base])}><Bio /></div>
                    </div>
                    <div className={classes([style.right_ss])}>
                        <div className={classes([style.right_lotusimg_ctr])}>
                            <Image src={lotus} fill={false} alt="Picture of lotuses" priority={true} style={{objectFit:"contain"}}/>
                        </div>
                    </div>
                </section>
            </article>
        </StandardLayout>
    );
}
