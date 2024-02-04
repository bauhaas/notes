---
title: Code Review
layout: doc
outline: deep
---

# Code Review

Following notes are based on personal experience and i've also used [roadmap.sh/best-practices](https://roadmap.sh/best-practices/code-review) as a reference.

## Notes

## Personal Notes

- Code review is one of the most effective ways to learn and improve your skills/knowledges.
- Take it as a learning opportunity, not as a personal attack.
- Stay objective and focus on the code, treat every review with the same expectations.
- Nitpicking is debatable, but it's important to keep the codebase clean and consistent. (most of them should be solvable by following guidelines and automation tools).

  Depending on the team,find a way keep the balance between nitpicking and keeping the codebase clean. Nitpicking can be a problem when it's not consistent and keep in mind that's subjective based on the reviewer. The one exception for me is about naming.

  **Naming is important and should be consistent and meaningful.** On the longterm, it can lead to a lot of confusion and time loss.

  Solution to implement:

  - Establish better code review and code guidelines
  - Use automated tools (git hooks, static code analysis, compilers check, linting, etc.)
  - When nitpicking, provide a solution or a reference to the guideline. Bring it in a light way, it's nit after all.

  Logaf (Level of give a fuck) scale is a funny idea. Allowing to adjust the tone of comments for nits easily. <Badge text="need to give it a try" type="warning"/>

## Links

- [Code Review Best Practices](https://roadmap.sh/best-practices/code-review)
- [Avoid nitpicking in code reviews](https://blog.joetr.com/avoid-nitpicking-in-code-reviews)
- [Stop nitpicking in code reviews](https://blog.danlew.net/2021/02/23/stop-nitpicking-in-code-reviews/)
- [The logaf scale](https://blog.danlew.net/2020/04/15/the-logaf-scale/)
