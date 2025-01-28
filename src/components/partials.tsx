import style from "@/styles/partials.module.scss";

import { StaticImageData } from 'next/image';
import Image from 'next/image';

import { header } from "@/env";
import { classes } from "@/helpers";


// For layout creation
export function Header() {
    return (
        <header className={classes([style.header])}>
            <nav className={style.navbar}>
                <div className={style.navbar_left}>
                    <div className={style.title}>
                        <a href="/">{header.title}</a>
                    </div>
                </div>
                <div className={style.navbar_right}>
                    <div className={style.main_links}>
                        <a href="/projects">Projects</a>
                        <a href="/blog">Blog</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export function Footer() {
    return (
        <div className="prefooter">
            <footer className="footer">
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


// For `/projects`
export interface ProjectInfoBoxArgs {
    title: string;
    description: string;
    target_url?: string;
}

export function ProjectInfoBox(args: ProjectInfoBoxArgs) {
    return (
        <div className={classes([style.ctr_common, "grow"])}>
            <a className="block px-8 py-5" href={args.target_url}>
                <h2 className="mb-3 text-lg">{args.title}</h2>
                <p>{args.description}</p>
            </a>
        </div>
    );
}
