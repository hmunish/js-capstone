import { moviesCounter } from "../modules/counters.js";

document.body.innerHTML = `<div class='item-box'></div><div class='item-box'></div><div class='item-box'></div>`;

describe("Check number of movies counter", () => {
  test("Should return 3 number of movies loaded", () => {
    expect(moviesCounter()).toBe(3);
  });
});

describe('commentCount', () => {
  test('returns the correct count of comments', () => {
    // Arrange
    document.body.innerHTML = `
    <div class="comments-text">Comment (1)</div>
    <div class="comments-text">Comment (2)</div>
    <div class="comments-text">Comment (3)</div>
    `;

    // Act
    const count = commentsCount();

    // Assert
    expect(count).toBe(3);
  });

  test('returns 0 when no comments are present', () => {
    // Arrange
    document.body.innerHTML = '';

    // Act
    const count = commentsCount();

    // Assert
    expect(count).toBe(0);
  });
});
