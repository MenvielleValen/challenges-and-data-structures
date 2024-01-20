import { degreeToRadian } from "../degreeToRadian";

describe("degreeToRadian", ()=> {
    it("should calculate radian from degree", () => {
        expect(degreeToRadian(0)).toEqual(0);
        expect(degreeToRadian(45)).toEqual(Math.PI / 4);
        expect(degreeToRadian(270)).toEqual((3 * Math.PI) / 2);
        expect(degreeToRadian(360)).toEqual(2 * Math.PI);
        expect(degreeToRadian(90)).toEqual(Math.PI / 2);
        expect(degreeToRadian(180)).toEqual(Math.PI);
    })
})