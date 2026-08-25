# IAM Scenario Guide

A small Finnish-language study app for Microsoft Entra and identity topics.

The app contains six local IAM scenarios. A user can choose an example or write a few keywords, and the app opens the closest matching study path with practical steps and Microsoft Learn links.

🌐 [Open the live IAM Scenario Guide](https://shelovestechy.github.io/IAM-cheatsheet-app/)

This is a static learning tool. It is not an AI assistant, it does not connect to a Microsoft tenant and it does not make production changes. The answers are written into the application. Very calm technology, which is sometimes exactly what an IAM lab needs.

## What works now

- six IAM scenarios in Finnish
- keyword matching for PIM, legacy authentication, access reviews, identity risks, Conditional Access, users and groups
- four topic cards
- practical notes before implementation
- direct Microsoft Learn sources
- light and dark themes
- keyboard support with `Ctrl + Enter`
- a random quick exercise
- eight automated tests for the matching logic

The scenarios use the fictional **Ankkalinna Identity Lab Oy** environment that also appears in my [Identity Lab](https://github.com/shelovestechy/identity-lab).

## Current scenarios

1. PIM role activation
2. Blocking legacy authentication
3. Guest access reviews
4. Risky sign-in monitoring
5. Users and groups
6. Conditional Access rollout

If the app does not recognize the question, it asks the user to choose a topic instead of confidently showing an unrelated answer. That felt like a useful feature.

## Run locally

No packages are required. Open `index.html` in a browser or start a small local server:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

Run the matching tests with Node.js 22 or newer:

```powershell
npm test
```

## Important limitation

This repository shows how I currently understand the scenarios. It is not production guidance.

Microsoft Entra features, licences and portal paths change. Always check the linked Microsoft Learn documentation and your own organization's change process before making a real configuration change. Emergency access accounts are especially poor places for improvisation.

## Next things I want to improve

- add more Ankkalinna cases and less generic wording
- show when each source was last reviewed
- separate design decisions from portal instructions
- add small knowledge-check questions
- add automated tests for the matching logic

The project is intentionally small, but it is working software rather than a collection of screenshots.
