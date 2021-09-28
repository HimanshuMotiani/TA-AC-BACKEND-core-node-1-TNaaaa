function areaSquare(a){
    return a*a
}
function areaRectangle(l,w){
    return l*w
}
function areaCircle(r){
    return Math.PI * r * r
}
module.exports = {
    areaSquare:areaSquare,
    areaRectangle:areaRectangle,
    areaCircle:areaCircle
}
