function solve(inputArray) {
    
    let rects = [];

    for (let [width, height] of inputArray) {
        let currRect = createRect(width, height);
        rects.push(currRect);
    }

    function createRect(width, height) {

        let rect = {
            width: width,
            height: height,
            area: function () {
                return this.width * this.height;
            },
            compareTo: function (other) {
                let result = other.area() - rect.area();
                return result || (other.width - rect.width);
            }
        };

        return rect;
    }

    rects.sort((a, b) => a.compareTo(b));
    return rects;
}

console.log(solve([[10,5],[5,12]]));