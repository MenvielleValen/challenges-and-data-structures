import { countApplesAndOranges } from "../appleAndOrange";

describe("appleAndOrange", () => {
    it("sould return  number of apples and oranges that fell on the house", () => {
        let s = 7;
        let t = 10;
        let a = 4;
        let b = 12;


        expect(countApplesAndOranges(s,t,a,b, [2,3,-4], [3,-2,-4])).toEqual({
            applesCount: 1,
            orangeCount: 2
        });

        s = 7;
        t = 11;
        a = 5;
        b = 15;

        expect(countApplesAndOranges(s,t,a,b, [-2,2,-1], [5,-6])).toEqual({
            applesCount: 1,
            orangeCount: 1
        });
    });
});


