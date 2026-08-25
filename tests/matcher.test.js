const test = require("node:test");
const assert = require("node:assert/strict");

const { selectSolutionKey } = require("../logic.js");

const examples = [
  ["Miten otan PIM-rooliaktivoinnin käyttöön?", "pim"],
  ["Miten estän vanhat tunnistautumisprotokollat?", "legacy"],
  ["Miten teen vieraskäyttäjien access review'n?", "review"],
  ["Miten valvon riskialttiita kirjautumisia?", "monitor"],
  ["Miten suunnittelen Conditional Access -käyttöönoton?", "conditional"],
  ["Miten hallitsen käyttäjiä ja ryhmiä?", "identity"]
];

for (const [question, expected] of examples) {
  test(`matches ${expected}`, () => {
    assert.equal(selectSolutionKey(question), expected);
  });
}

test("matching ignores letter case", () => {
  assert.equal(selectSolutionKey("PIM JA ROOLIAKTIVOINTI"), "pim");
});

test("unknown questions do not receive a guessed answer", () => {
  assert.equal(selectSolutionKey("Miksi kahvi loppui?"), null);
});
