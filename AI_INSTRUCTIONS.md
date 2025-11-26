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

## Styling and Theming

### Technology Stack
- **Tailwind CSS v4**: The project uses Tailwind CSS v4 with the new `@import "tailwindcss"` syntax
- **DaisyUI v5**: Component library for pre-built UI components
- **PostCSS**: Using `@tailwindcss/postcss` plugin

### **CRITICAL: Theme Configuration Workaround**

> ⚠️ **Important Compatibility Note**: Due to compatibility issues between Tailwind CSS v4 and DaisyUI v5, the theme configuration does NOT work from `tailwind.config.ts`. All theme colors MUST be defined directly in `app/globals.css` using the `@theme` directive.

#### Theme Color Management

**WHERE TO DEFINE THEME COLORS:**
- ❌ **DO NOT** modify theme colors in `tailwind.config.ts` - they will not be applied
- ✅ **DO** modify theme colors in `app/globals.css` within the `@theme` block

**Current Theme Colors (Mella Theme):**
```css
@theme {
  /* DaisyUI Mella Theme Colors */
  --color-primary: #FFCB74;
  --color-primary-content: #111111;
  --color-secondary: #2F2F2F;
  --color-secondary-content: #F6F6F6;
  --color-accent: #FFCB74;
  --color-accent-content: #111111;
  --color-base-100: #fbfbfb;
  --color-base-200: #2F2F2F;
  --color-base-content: #111111;
}
```

#### Typography Management

**Centralized Typography Classes:**
All typography styles are managed in `app/globals.css` within the `@layer components` block to allow for easy global updates.

**Available Typography Classes:**
- `.text-product-title` - Product page headings (3xl, serif, bold)
- `.text-product-body` - Product descriptions (extralight, sm)
- `.text-product-caption` - Small captions (xs, gray-400)
- `.btn-primary-text` - Button text styling (bold, tracking-widest)

**When to Create New Typography Classes:**
- If a font style is used in multiple places across the application
- When a specific text style is part of the brand/design system
- To avoid inline Tailwind classes for commonly repeated patterns

**How to Add New Typography Classes:**
1. Define the class in `app/globals.css` within the `@layer components` section
2. Use `@apply` to compose Tailwind utilities
3. Update this documentation with the new class name and purpose

#### File Structure Overview

**`app/globals.css`** - Main stylesheet containing:
```css
@import "tailwindcss";
@config "../tailwind.config.ts";

@theme {
  /* Theme colors defined here */
}

@layer utilities {
  /* Custom utility classes */
}

@layer components {
  /* Reusable component classes like typography */
}
```

**`tailwind.config.ts`** - Configuration for:
- Font families (Inter, Cormorant Garamond)
- Custom font sizes
- Theme extensions
- DaisyUI plugin (theme colors are NOT loaded from here)

**`app/layout.tsx`** - Root layout with:
- Font variable definitions
- `data-theme="mella"` attribute on `<html>`
- `bg-base-100` class on `<body>` for global background

### Styling Best Practices

1. **Use Semantic Color Classes**: Use DaisyUI's semantic classes (`bg-primary`, `text-base-content`) instead of arbitrary colors when possible
2. **Typography**: Use the centralized typography classes for consistent branding
3. **Avoid Inline Styles**: Use Tailwind classes or custom CSS classes instead of inline `style` attributes
4. **Theme Colors**: Always refer to `app/globals.css` when checking or modifying theme colors

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

### Brainstorming Workflow

**Trigger:** User asks to "brainstorm on [topic]".

**Procedure:**
1.  **Explore Brainstorming Context:** Review the contents of the `brainstorm/` folder to understand previous ideas and the general direction of the project.
2.  **Engage in Brainstorming:** Start a collaborative brainstorming session with the user on the specified topic. Ask clarifying questions to explore the topic thoroughly.
3.  **Await Documentation Command:** Continue the brainstorming session until the user signals that they are ready to document the results (e.g., "let's document this").
4.  **Document the Outcome:**
    -   Create a new markdown file in the `documentation/` folder. The filename should be descriptive of the brainstorming topic (e.g., `[Topic]_Brainstorm_Summary.md`).
    -   Summarize the key points, decisions, and outcomes of the brainstorming session in the new file.
    -   Ask for clarification if you are unsure how to structure the document or what to include.
5.  **Confirmation:** Inform the user that the documentation has been created and provide the path to the new file.

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