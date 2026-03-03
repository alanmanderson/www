---
title: "Building This Website with Claude Code"
description: "How I used Claude Code's agentic workflow — planning mode, CLAUDE.md, tools, and execution — to build a personal site from scratch with Astro and Tailwind CSS."
date: 2026-03-02
tags: ["claude-code", "astro", "tailwind", "ai"]
---

I built this entire website in a single session using [Claude Code](https://docs.anthropic.com/en/docs/claude-code), Anthropic's agentic command-line tool. Not by copying and pasting snippets from a chatbot — by working alongside an AI agent that could read files, write code, run builds, and commit to git, all from my terminal. Here's how that worked and what I learned.

## What is Claude Code?

Claude Code is an agentic coding tool that runs in your terminal. Unlike a traditional chat interface where you copy-paste code back and forth, Claude Code operates directly in your project. It can read your files, edit them, run shell commands, search your codebase, and interact with git — all while maintaining context about what it's doing and why.

The key distinction is _agency_. You describe what you want, and Claude Code figures out how to get there, asking for approval along the way. It's less like pair programming and more like working with a junior developer who happens to have encyclopedic knowledge of every framework you might use.

## The CLAUDE.md File

Every Claude Code project can include a `CLAUDE.md` file at the repository root. This file contains project-level instructions that persist across sessions — think of it as a brief for your AI collaborator.

For this site, the CLAUDE.md started minimal, just identifying the project. But in larger projects, this is where you'd document coding conventions, architecture decisions, deployment procedures, and anything else you'd want a new team member to know on day one. Claude Code reads this file automatically at the start of every session, so your preferences carry forward without repeating yourself.

## Planning Mode

Before writing a single line of code, we started in planning mode. This is where Claude Code explores the problem space: reading existing files, researching approaches, and designing an architecture for your approval.

For this site, planning mode is where we made the key decisions:

- **Astro v5** for the framework — static-first, content-focused, fast by default
- **Tailwind CSS v4** for styling — utility-first, integrated via the Vite plugin
- **Content Collections** for blog posts — typed markdown with schema validation
- **GitHub Pages** for hosting — free, simple, and close to the code

Claude Code presented these choices with rationale, and I could approve, adjust, or redirect before any code was generated. This is the crucial part — planning mode means you're reviewing a design, not undoing an implementation you didn't ask for.

## Execution Mode and Tools

Once the plan was approved, Claude Code switched to execution mode. This is where the agent's toolset comes into play. Rather than dumping a wall of code for me to wire up manually, Claude Code used its built-in tools to do the work directly:

- **Write** and **Edit** to create and modify source files — layouts, pages, components, config
- **Bash** to run shell commands — `npm create astro`, `npm install`, `npm run build`
- **Read** to inspect files and verify the current state of things
- **Glob** and **Grep** to search the codebase when it needed to find specific patterns or files

The workflow felt like watching someone work in an IDE at high speed. Create the Astro config. Write the base layout. Build out the page templates. Add the content collections schema. Wire up the blog routing. Each step was a tool call I could see and approve.

What made this effective wasn't just speed — it was coherence. Because Claude Code maintained context throughout the session, every file it created was consistent with every other file. The Tailwind classes in the layout matched the design system in the components. The content collection schema matched the frontmatter in the markdown files. The build config matched the deployment target.

## Skills

Claude Code also supports skills — slash commands that encapsulate common workflows. The one I used most was `/commit`, which handles the full git commit flow: staging changes, generating a descriptive commit message based on the actual diff, and creating the commit.

This sounds minor, but it eliminates a real source of friction. Instead of context-switching to think about what changed and how to summarize it, you just type `/commit` and review the result.

## The Workflow in Practice

Here's roughly how the session went:

1. **Plan** — Discussed goals, explored options, settled on Astro + Tailwind + Content Collections + GitHub Pages
2. **Scaffold** — Claude Code initialized the Astro project, installed dependencies, and configured Tailwind
3. **Build** — Created the layout, pages, components, and content collections one by one
4. **Verify** — Ran `npm run build` after each major step to catch issues early
5. **Commit** — Used `/commit` to save progress at logical checkpoints
6. **Deploy** — Set up the GitHub Actions workflow for automatic deployment to GitHub Pages

The entire site — home page, blog listing, individual post pages, personal blog, project showcase, responsive navigation — came together in one continuous session. Not because AI is magic, but because the agentic workflow removes the overhead that normally slows development down: looking up API docs, debugging typos in config files, remembering the right CLI flags, writing boilerplate you've written a hundred times before.

## Reflections

Working with Claude Code changed how I think about the build-versus-buy spectrum for personal projects. The things that usually kill personal sites — yak-shaving the toolchain, bikeshedding the design, losing momentum between sessions — mostly disappeared. The agent handled the tedious parts while I focused on the decisions that actually matter: what content to write, how to organize it, what the site should feel like.

That said, it's not autopilot. The best results came from being specific about what I wanted and reviewing each step carefully. Claude Code is a powerful tool, but the person at the keyboard still needs to know what good looks like.

If you're curious about Claude Code, the [documentation](https://docs.anthropic.com/en/docs/claude-code) is the best place to start. And if you're reading this post on a fast, clean website that works well — now you know how it was built.
