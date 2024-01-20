import { timeConversion } from "../timeConversion";

describe("timeConversion", () => {
    it("should given a time in -hour AM/PM format, convert it to military (24-hour) time.", () => {
        expect(timeConversion("10:05:55AM")).toStrictEqual("10:05:55");

        expect(timeConversion("10:05:55PM")).toStrictEqual("22:05:55");

        expect(timeConversion("00:05:55AM")).toStrictEqual("00:05:55");

        expect(timeConversion("12:05:55PM")).toStrictEqual("12:05:55");

    });
});