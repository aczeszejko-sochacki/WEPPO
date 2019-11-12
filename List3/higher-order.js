function map(a, f) {
  const [hd, ...tl] = a;

  if (typeof(a) !== 'undefined' && a.length > 0) return [f(hd)].concat(map(tl, f))
  else return []
}

function forEach (a, f) {
  const [hd, ...tl] = a;

  if (Array.isArray(tl) && tl.length) {
    f(hd);
    forEach(tl, f)
  } else {
    f(hd)
  }
}

function filter (a, f) {
  const [hd, ...tl] = a;

  if (typeof(a) !== 'undefined' && a.length > 0) {
    if (f(hd)) return [hd].concat(filter(tl, f))
    else return filter(tl, f)
  } else {
    return []
  }
}
var a = [1, 2, 3, 4]
console.log(map(a, _ => _ * 2))
forEach(a, _ => console.log(_))
console.log(filter(a, _ => _ % 2 == 0))