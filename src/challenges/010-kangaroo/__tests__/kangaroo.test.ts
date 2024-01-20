import { kangaroo } from "../kangaroo";

describe("kangaroo", () => {
    it("both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO", () => {
        let x1 = 0;
        let v1 = 3;
        let x2 = 4;
        let v2 = 2;

        expect(kangaroo(x1,v1,x2,v2)).toStrictEqual("YES");


        x1 = 0;
        v1 = 2;
        x2 = 5;
        v2 = 3;

        expect(kangaroo(x1,v1,x2,v2)).toStrictEqual("NO");
    });
});