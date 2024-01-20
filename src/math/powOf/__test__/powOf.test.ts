import { powOf } from "../powOf";

describe("powOf", ()=> {
    it("should calculate pow of", () => {
        expect(powOf(2, 2)).toBe(4);
        expect(powOf(2, 10)).toBe(1024);
        expect(powOf(8, 2)).toBe(64);
        expect(powOf(3, 3)).toBe(27);
        expect(powOf(4, 2)).toBe(16);
        expect(powOf(7, 2)).toBe(49);
        expect(powOf(2, 0)).toBe(1);
        expect(powOf(3, 1)).toBe(3);
        expect(powOf(-2, 2)).toBe(4);
        expect(powOf(-3, 3)).toBe(-27);
    })
})