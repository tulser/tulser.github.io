#!/usr/bin/env sh

# Assumes the execution environment is a Debian-like system, i.e:
# `apt` is in path and that `/var/tmp` is writeable.
# Also assumes Debian/Ubuntu packages `texlive-latex-base texlive-latex-extra`
# are installed.

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
