#!/usr/bin/env sh

# Assumes `apt` is in path and that `/var/tmp` is writeable

pkgs_req="texlive-latex-base texlive-latex-extra"
sudo apt-get update && sudo apt-get install -y ${pkgs_req}

# Generate the resume
resume_fname_head="resume"
resume_pdf_dir="public/static"
resume_out_tmp_dir="/var/tmp"
resume_tex_dir="misc"
pdflatex \
    -output-directory="${resume_out_tmp_dir}" \
    "${resume_tex_dir}/${resume_fname_head}.tex" || exit 1
mv  "${resume_out_tmp_dir}/${resume_fname_head}.pdf" \
    "${resume_pdf_dir}"

echo "Resume compiled."

exit 0
