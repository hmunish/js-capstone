import { moviesCounter } from "../modules/counters.js";

document.body.innerHTML = `<div class='item-box'></div><div class='item-box'></div><div class='item-box'></div>`;

describe("Check number of movies counter", () => {
  test("Should return 3 number of movies loaded", () => {
    expect(moviesCounter()).toBe(3);
  });
});
