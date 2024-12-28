export function classes(strarr: string[]) {
    var out: string = strarr[0];
    if (out == undefined) {
        out = "";
    }
    for (var i = 1; i < strarr.length; ++i) {
        out = out.concat(" ".concat(strarr[i]));
    }
    return out;
}
