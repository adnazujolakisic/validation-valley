# Validation Valley - mirrord Demo Script

## Overview

This demo shows how mirrord enables instant validation of local code changes against real Kubernetes infrastructure, combined with AI-assisted development.

## Prerequisites

1. The voting app deployed to your K8s cluster (cats vs dogs version)
2. mirrord CLI installed
3. Claude Code available

## Demo Flow

### 1. Show the Remote App

"Here's our voting app running in Kubernetes - a simple cats vs dogs poll."

- Open the vote app URL in browser
- Show it works, make a vote
- Show results updating

### 2. Explain the Problem

"Now I want to change this to match our Validation Valley theme - new question, new styling.
Normally I'd have to deploy to test this. But with mirrord..."

### 3. Start Local App with mirrord

```bash
cd demo-app/example-voting-app/vote
mirrord exec --target deployment/vote -- python app.py
```

"Now my local app is handling traffic that would go to the remote vote pod,
and my outgoing Redis connections go to the real Redis in K8s."

### 4. Ask Claude to Theme It (THE KEY MOMENT)

Give this prompt to Claude:

---

**PROMPT TO USE:**

> Theme this voting app to match Validation Valley - an RPG-style presentation about code validation.
>
> Changes needed:
> 1. In `app.py`: Change the poll options from "Cats/Dogs" to "Locally" vs "Wait for CI"
>    (this is about where developers validate their code)
>
> 2. In `templates/index.html`:
>    - Change the title/heading to "Where do you validate?"
>    - Add a subtitle: "The developer's eternal question..."
>
> 3. In `static/stylesheets/style.css`: Apply an RPG dark theme:
>    - Dark background (#1a1a2e)
>    - Purple accent for option A (#756DF3) - this is the "good" choice
>    - Muted grey for option B (#4a5568) - this is the "slow" choice
>    - Add some fantasy styling (maybe a subtle glow, nicer typography)
>    - Gold accent color (#f0c674) for highlights
>
> The files are in: demo-app/example-voting-app/vote/

---

### 5. Watch Claude Make Changes

Claude will edit the three files. The audience sees code changing in real-time.

### 6. Refresh and Show

"Now I just refresh the browser..."

- Themed UI appears immediately
- Make a vote - it works!
- Results app shows the vote (proving end-to-end works)

### 7. The Message

"This is what mirrord enables - validate your changes against real infrastructure, instantly.
No deploy, no waiting. Faster, earlier, cheaper validation."

---

## Color Reference (Validation Valley Theme)

```css
/* Primary purple (MetalBear brand) */
--brand-purple: #756DF3;
--brand-purple-dark: #5B54C4;

/* Dark RPG background */
--bg-dark: #1a1a2e;
--bg-darker: #0f0f1a;

/* Accent gold */
--accent-gold: #f0c674;

/* Muted option */
--muted-grey: #4a5568;
```

---

## Troubleshooting

- If Redis connection fails: Check mirrord is targeting the correct deployment
- If styles don't update: Hard refresh (Cmd+Shift+R)
- If vote doesn't register: Check the worker and PostgreSQL are running in K8s
