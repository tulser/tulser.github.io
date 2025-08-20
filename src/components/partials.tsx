import style from "@/styles/partials.module.scss";

import { StaticImageData } from 'next/image';
import Image from 'next/image';

import { header } from "@/meta";
import { classes } from "@/helpers";


// For layout creation
export function Header() {
    return (
        <header className={classes([style.header])}>
            <nav className={style.navbar}>
                <div className={style.navbar_left}>
                    <div className={style.title}>
                        <a href="/">{ header.title }</a>
                    </div>
                </div>
                <div className={style.navbar_right}>
                    <div className={style.main_links}>
                        <a href="/projects">Projects</a>
                        {/*<a href="/blog">Blog</a>*/}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export function Footer() {
    return (
        <div className={style.footer_ctr}>
            <footer className={style.footer}>
            </footer>
        </div>
    );
}


// For `/`
export interface BioLinkInfo {
    target_title: string;
    target_url: string;
    image_src: string | StaticImageData;
}

export function LinkButton(args: BioLinkInfo) {
    return (
        <div className={style.lb_img_ctr}>
            <a href={args.target_url}>
                <Image src={args.image_src} fill={true} alt={args.target_title} />
            </a>
        </div>
    );
}

