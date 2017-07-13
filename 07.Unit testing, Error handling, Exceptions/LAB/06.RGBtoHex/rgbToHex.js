function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

let expect = require('chai').expect;

describe("Tests for RGB to HEX", () => {

    it("Should return #FF9EAA for (255, 158, 170)", () => {
        expect(rgbToHexColor(255, 158, 170)).to.be.equal('#FF9EAA');
    });

    it("Should return #000000 for (0, 0, 0)", () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });

    it("Should return #000000 for (0, 0, 0)", () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });

    it("Should return undefined for (-1, 0, 0)", () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    });

    it("Should return undefined for (0, -1, 0)", () => {
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    });

    it("Should return undefined for (0, 0, -1)", () => {
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });

    it("Should return undefined for ('5', [3], {8:9})", () => {
        expect(rgbToHexColor(("5", [3], {8:9}))).to.be.undefined;
    });

    it("Should return undefined for (256, 0, 0)", () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    });

    it("Should return undefined for (0, 256, 0)", () => {
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    });

    it("Should return undefined for (0, 0, 256)", () => {
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });
});