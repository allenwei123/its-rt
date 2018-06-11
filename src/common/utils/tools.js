
export function sendUrl() {
    let o = arguments[0];
    let flag = 0;
    let str ;
    if(JSON.stringify(o) !== "{}") {
        for (const key in o) {
            if (o.hasOwnProperty(key)) {
                const value = o[key];
                if(flag) {
                    str += `&${key}=${encodeURI(value)}`
                }else {
                    str = `?${key}=${encodeURI(value)}`
                }
            }
            flag++;
        }
    }
    return str;
}

export function formatchUrl() {
    let str = arguments[0];
    let o = {};
    if(str) {
        let arr = str.replace('?','').split('&');
        arr.forEach(item => {
            let a = item.split('=');
            o[a[0]] = decodeURIComponent(a[1]);
        })
    }
    return o;
}