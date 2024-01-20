import { radianToDegree } from "../radianToDegree"

describe("radianToDegree", ()=> {
    it("should calculate degree from radian", () => {
        expect(radianToDegree(0)).toBe(0);
        expect(radianToDegree(Math.PI / 4)).toBe(45);
        expect(radianToDegree((3 * Math.PI) / 2)).toBe(270);
        expect(radianToDegree(2 * Math.PI)).toBe(360);
        expect(radianToDegree(Math.PI / 2)).toBe(90);
        expect(radianToDegree(Math.PI)).toBe(180);
    })
})