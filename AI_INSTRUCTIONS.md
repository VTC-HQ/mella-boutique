# AI Instructions for Mella Boutique Website

This file provides guidance to AI assistants when working with the code in this repository. This is the single source of truth for all AI instructions.

## Project Overview



## Session Startup Procedure

To ensure you have the necessary context before starting any task, you must begin each session by reviewing the following documentation in order:

1.  **Core Instructions**: Read this file (`AI_INSTRUCTIONS.md`) in its entirety.
2.  **Component & Design Guides**: Review the main documentation files:
    - `documentation/COMPONENT_LIST.md`: For a high-level overview of all available components.
    - `documentation/DESIGN_INTEGRATION_PROCEDURE.md`: To understand the workflow for implementing new designs.
3.  **Live Design System**: Examine the interactive design system hub located within the `src/app/docs/` directory. This will provide a practical understanding of the visual styling, typography, icons, and component behavior.

This startup procedure is mandatory to ensure all your work aligns with the project's established conventions and architecture.

## Frameworks and Libraries
- **daisyUI**: When creating components and layouts, reference the daisyUI framework library at https://daisyui.com/llms.txt. This is a text file, if the `web_fetch` tool fails, use `curl` to access it.

## Essential Commands

```bash
# Development
npm run dev

# Build & Production
npm run build
npm run start

# Testing
npm run test

# Code Quality
npm run lint
npm run type-check

```



## Component Development Workflow

When creating a new component, follow these steps to ensure consistency and proper documentation:

1.  **File Placement**: Place the new component file in a logical subdirectory within `src/components/`. For example, a new UI element would go in `src/components/ui/`, and a component specific to the learning interface would go in `src/components/learning/`.
2.  **Documentation**: After creating the component, you **must** create a documentation page for it within the Design System Hub.
    - Create a new route directory for your component, e.g., `src/app/docs/components/new-component-name/`.
    - Inside this directory, create a `page.tsx` file to serve as its documentation and showcase. This page should provide examples, code snippets, and a props reference.
3.  **Update Component List**: Add a link to your new component's documentation page in the main component list located at `src/app/docs/components/page.tsx`.



## Architecture Overview

### Next.js App Router Structure
The application uses Next.js App Router for organization.

## Workflows

### Daily Development Log Generation Workflow

**Trigger:** User asks to "generate a dev log."

**Procedure:**
1.  **Determine Filename:** Get the current date and format it as `Boutique Log_MM_DD_YYYY.md`.
2.  **Create File Path:** Construct the full path: `Dev log/Boutique Log_MM_DD_YYYY.md`.
3.  **Check for Existing File:** Before writing, check if a file at that path already exists. If it does, **stop and ask the user** if they want to overwrite the existing file or create a new one with a different name (e.g., `_v2`). Do not proceed without user confirmation.
4.  **Generate Content:** Create the file with the following template, which is based on the existing logs in the project.
5.  **Action:** Use the `write_file` tool to create the new log file.
6.  **Confirmation:** Inform the user that the log has been created and provide the path.

**⚠️ CRITICAL MISTAKE TO AVOID:** 
When asked to "create a dev log" or "update dev log" - always check if a Boutique Log file for the current date already exists first. If it exists, **update the existing file** rather than creating a new one. The project maintains a single continuous log per day in the Boutique Log format. Creating duplicate files causes confusion and breaks the project's logging convention.


**Log File Template:**

````markdown
## [HH:MM AM/PM] Update

### 📋 Summary
[Provide a high-level summary of the changes made during this session.]

### 📁 File Changes
#### New Files
- [List any new files created, e.g., `src/components/NewComponent.tsx` - A brief description.]

#### Modified Files  
- [List modified files, e.g., `src/app/page.tsx` - refactor: A brief description of the change.]

#### Deleted Files
- [List any deleted files and the reason, e.g., `src/old-component.tsx` - reason: Replaced by NewComponent.]

### 🔧 Detailed Changes
- [Provide a more detailed, bulleted list of the specific changes and their purpose.]

### 📦 Dependencies & External Changes
- [List any changes to `package.json` or other external configurations.]

### ⚠️ Impact Assessment
**Breaking Changes:**
- [Note any changes that will break existing functionality.]

**Performance Notes:**
- [Describe any potential performance impacts.]

**Security Considerations:**
- [Mention any security-related changes or considerations.]

### 🐛 Bug Tracking
**Resolved Issues:**
- [List any bugs that were fixed during this session.]

**New Issues Identified:**
- [List any new bugs that were discovered.]

### 🎯 Decisions & Context
**Architectural Decisions:**
- [Explain any significant architectural choices made.]

**Trade-offs Made:**
- [Describe any trade-offs that were considered and made.]

**Future Considerations:**
- [Note any potential future work or improvements related to these changes.]

### 👥 Team Notes
**For Other Developers:**
- [Provide any notes or instructions for other team members.]

**Onboarding Context:**
- [Add any context that would be helpful for new developers.]

### 🔗 Git Context
**Branch:** [Current Git Branch]
**Last Commit:** [Last Commit Hash]
**Staged Files:** [List of staged files, if any]

**Update completed at: [HH:MM AM/PM] on [MM-DD-YYYY]**
````

## Git Workflow & Standards

All code contributions, including commits and pull requests, must adhere to the project-wide guidelines outlined in the root `CONTRIBUTING.md` file.

Before making any commits, you must review this file to ensure your branch names and commit messages follow the established conventions.


## Mandatory Pre-Implementation Protocol

To prevent premature work and ensure all actions are aligned with user intent, the following protocol is mandatory for any task that involves creating or modifying code, files, or project structure.

1.  **Assume Ideation, Not Instruction:** When a feature or task is first mentioned, treat it as an idea for discussion, not an immediate command to begin implementation.
2.  **Clarify and Understand:** Your first step is to ask clarifying questions to fully understand the user's goals, requirements, and the context of the request. The objective is to understand the "what" and the "why" before proceeding.
3.  **Propose a Plan and Await Approval:** After the discussion, formulate a clear, step-by-step implementation plan. Present this plan to the user and explicitly ask for their approval to proceed (e.g., "Should I proceed with this plan?").
4.  **Require Explicit Confirmation:** Do not begin any implementation (writing code, creating files, editing files, running commands) until you receive an explicit confirmation from the user (e.g., "Yes," "Proceed," "Approved").

This protocol ensures the user remains in full control of the development process and prevents work on unapproved or misunderstood specifications.