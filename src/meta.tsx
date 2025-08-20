function computeNameFull(name_parts: string[]): string {
    let full = "";
    let np = name_parts;
    let trunc = np.forEach((element, index) => {
        full += ` ${element}`;
    });
    return full;
}

function computeNameTrunc(name_parts: string[]): string {
    var full = "";
    let np = name_parts;
    let trunc = np.forEach((element, index) => {
        if (index == 0) {
            full += `${element[0]}.`;
        } else {
            full += ` ${element}`;
        }
    });
    return full;
}

// Common information
const bio_name_parts = ["Wanlace", "Connor", "Yates"];
const bio_name_trunc = computeNameTrunc(bio_name_parts);
const bio_name_full = computeNameFull(bio_name_parts);

export const info = {
    bio_name_parts: bio_name_parts,
    bio_name_trunc: bio_name_trunc,
    bio_name_full: bio_name_full,
    bio_name_pref: bio_name_parts[1],
    bio_title: "Software Developer",
    bio_email: "self@wcyates.xyz",
}

export const pagemeta = {
    title: info.bio_name_trunc,
    description: `Homepage for ${bio_name_trunc}`,
};

export const header = {
    title: pagemeta.title,
}

// Links (`/`)
import { BioLinkInfo } from "@/components/partials";

import img_github from "public/static/images/links/github/github-mark-white.svg";
import img_youtube from "public/static/images/links/youtube-white.svg";


export const links: BioLinkInfo[] = [
    {
        target_title: `${info.bio_name_pref}'s Github`,
        target_url: "https://github.com/tulser",
        image_src: img_github,
    },
    {
        target_title: `${info.bio_name_pref}'s Youtube Channel`,
        target_url: "https://youtube.com/@tlser",
        image_src: img_youtube,
    },
];

// Projects (`/projects`)
import { ProjectInfo } from "@/app/projects/page";

import Rania from "markdown/rania.md";


export const projects: ProjectInfo[] = [
    {
        title: "RANIA Fall Detection System (rania-fds)",
        short_description: "A capstone project for detecting incapacitated users in the home.",
        md_description: ( <Rania /> ),
        target_url: "https://github.com/tulser/rania-fds",
    },
];
