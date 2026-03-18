# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # install dependencies (first time only)
npm test             # run tests once then exit
npm run test:watch   # run tests in watch mode
```

To run a single test file:
```bash
npm t
```

## Repository Structure

This is a pair programming workshop starter repo using ping-pong TDD.

| File | Purpose |
|---|---|
| `index.js` / `fizzbuzz.test.js` | Facilitator demo exercise |

## Using Claude as a Pair Partner

Claude can play either role in ping-pong TDD. Decide who drives before each cycle, and swap every cycle.

---

### Role 1: You navigate, Claude drives

You decide what behavior to test next. Claude writes the failing test, then writes only enough code to pass it. You review and approve before moving on.

**Prompts to use:**

> "We're doing ping-pong TDD. Your turn to drive. Write a failing test for: [describe the behavior]. Do not write any implementation yet. Run the test mentally and confirm it would fail."

After reviewing the test:

> "The test looks good. Now write the minimum code to make it pass. Do not add anything the test doesn't require."

After it passes:

> "All tests are green. Your turn to write the next failing test. Suggest what behavior we should test next, then write it."

---

### Role 2: Claude navigates, you drive

You write the tests and the code. Claude watches, catches issues, and tells you what to test next — but does not touch the keyboard.

**Prompts to use:**

> "We're doing ping-pong TDD. You're navigating, I'm driving. I'm about to write a failing test for [behavior]. Review my test before I write any code — does it capture the right behavior?"

After your test is red:

> "Test is failing (red). I'm writing the minimum code to pass it. Review what I write — stop me if I'm adding more than the test demands."

After all tests are green:

> "All tests are green. What should we test next? Don't write the test — just tell me the direction."

---

### Refactoring (either role)

Only refactor when all tests are green. Use this prompt:

> "All tests are green. Review the current implementation for refactoring opportunities. Identify duplication, poor naming, or structural improvements — but do not suggest changes that require new tests."

---

## The Red–Green–Refactor Protocol

1. **Red** — write a failing test. Run it. Confirm it fails before writing any code. If it passes, the test is wrong.
2. **Green** — write the minimum code to make it pass. Hardcoding is fine. The next test will force generalization.
3. **Refactor** — clean up with confidence. Tests are your safety net.

Swap the keyboard after every green. Either person can initiate a refactor, but only when green.

**Hard rules:**
- No code without a failing test demanding it
- No test skipping — a passing test you didn't earn is a lie
- Navigator states direction, not keystrokes
