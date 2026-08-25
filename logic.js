(function exposeIamGuideLogic(root) {
  function selectSolutionKey(question) {
    const value = String(question || "").toLocaleLowerCase("fi-FI");

    if (value.includes("pim") || value.includes("rooliaktiv")) return "pim";
    if (value.includes("legacy") || value.includes("vanh") || value.includes("protokoll")) return "legacy";
    if (value.includes("review") || value.includes("vieras")) return "review";
    if (value.includes("riski") || value.includes("valvo") || value.includes("loki")) return "monitor";
    if (value.includes("conditional") || value.includes("mfa") || value.includes("todenn")) return "conditional";
    if (value.includes("käyttä") || value.includes("ryhm") || value.includes("identite") || value.includes("hallinnoll")) return "identity";

    return null;
  }

  const api = { selectSolutionKey };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.IamGuideLogic = api;
  }
})(globalThis);
