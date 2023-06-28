import { moviesCounter } from "../modules/counters.js";

document.body.innerHTML =
  '<div class="item-box"></div><div class="item-box"></div><div class="item-box"></div>';

test("should return number of movies on the page", () => {
  expect(moviesCounter()).toBe(3);
});
