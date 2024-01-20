/**
 * Given a time in -hour AM/PM format, convert it to military (24-hour) time.

    Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
    - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

    https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true
 */


/**
 *
 * @param str ex: 07:05:45PM
 * @returns ex: 19:05:45
 */
export const timeConversion = (str: string) => {
    const isPM = str.includes("PM");
    let [hours, minutes, seconds] = str.replace(/PM|AM/g, "").split(":");
  
    hours =
      hours === "12" && !isPM
        ? "00"
        : isPM && hours !== "12"
        ? `${parseInt(hours, 10) + 12}`.padStart(2, "0")
        : hours;
  
    return `${hours}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
  };
  