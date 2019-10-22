function fibIter(n) {
    let fL = 0, fR = 1

    for (let i = 0; i < n; i++) {
        [fL, fR] = [fR, fL + fR]
    }

    return fR
}

function fibRec(n) {
    if (n == 0 || n == 1) return 1
    else return fibRec(n-1) + fibRec(n-2)
}

for (let i = 10; i < 20; i++) {
    console.time("Time fibIter")
    console.log(fibIter(i))
    console.timeEnd("Time fibIter")

    console.time("Time fibRec")
    console.log(fibRec(i))
    console.timeEnd("Time fibRec")
}