# 🟣 PurplePath

> Your smart guide to navigating the University of Sheffield Careers website — without the hassle.

---

## What is PurplePath?

PurplePath is a conversational chatbot built for students at the **University of Sheffield**. It helps students quickly find the right careers resources, links, and support without having to dig through the university website themselves.

Whether you're writing your first CV, looking for a placement year, preparing for interviews, or exploring what to do after graduation — PurplePath points you in the right direction instantly.

---

## Why PurplePath?

The University of Sheffield Careers website has a wealth of resources, but it can be overwhelming to navigate. PurplePath solves this by:

- Presenting all career topics in a clean, structured menu
- Letting students select exactly what they need in two clicks
- Returning direct links to the most relevant Sheffield Careers pages and videos
- Saving students time so they can focus on what matters

---

## Features

- 🗂️ **Topic-based navigation** — 10 main career topic areas drawn directly from Sheffield Careers
- 🔗 **Direct resource links** — every response includes verified links to Sheffield Careers pages and video guides
- 💬 **Friendly tone** — warm, encouraging responses suited to students at any stage of their career journey
- 🔄 **Fallback support** — if PurplePath can't help, it directs students to a careers adviser or Career Connect
- 📱 **Simple UI** — designed to be easy to use on desktop and mobile

---

## Topic Areas Covered

PurplePath covers all major areas of the Sheffield Careers website:

| # | Topic | Example Subtopics |
|---|-------|-------------------|
| 1 | 📄 CVs, Cover Letters and Applications | CV writing, AI in applications, CV feedback, STARR method |
| 2 | 🧭 Getting Started and Exploring Options | Starting point, what to do with your degree, further study, starting a business |
| 3 | 💼 Finding Jobs (Part Time and Graduate) | Graduate roles, part-time work, regional opportunities, LinkedIn, networking |
| 4 | 🏢 Finding Placements and Work Experience | Placement year, internships, volunteering, virtual experience, job shadowing, mentoring |
| 5 | 🎯 Recruitment Processes | Interviews & assessment centres, online tests |
| 6 | 📚 Further Study | Masters, PhD, funding, applications |
| 7 | 🛠️ Skills and Personal Development | Sheffield Graduate Attributes, MySkills, study skills, extra curricular |
| 8 | 🤝 Support from Careers Service | Hubs, events, appointments, interview clothing, myJobshop, support by cohort |
| 9 | ⚖️ Equity, Diversity and Inclusion | Equality Act, disability support, disclosing to employers |
| 10 | 💻 Online Tools | Career Connect, Sheffield Connect, CareerSet, Graduates First, Shortlist Me |

---

## How It Works

## Contributing / Updating

I've written this section specifically for the **University of Sheffield Careers Team**. If the careers website changes, or you want to add new topics and resources, follow the steps I've laid out below. Everything can be done directly through GitHub.

### How to Edit the Data File on GitHub

All of PurplePath's content lives in one file: `purplepath_data.json`. This is the only file you'll ever need to edit.

**Step 1 — Open the file on GitHub**

1. Go to the PurplePath GitHub repository
2. Click on the file called `purplepath_data.json`
3. Click the pencil icon in the top right corner of the file view
4. This opens the file in GitHub's built-in editor — you won't need to install anything on your computer

**Step 2 — Understand the structure**

I've built PurplePath so that every topic follows the exact same pattern. Here's a real example so you can see how it works:

```json
"CVs, Cover Letters and Applications": {
  "icon": "📄",
  "greeting": "Let's get your application materials sorted!",
  "options": {
    "Writing a CV": {
      "response": "Here are the best Sheffield Careers resources for writing your CV.",
      "links": [
        {
          "title": "CV Writing Guide",
          "description": "A step-by-step guide to writing a strong CV.",
          "url": "https://students.sheffield.ac.uk/careers/applications/cvs"
        }
      ]
    }
  }
}
```

Think of it this way:
- The **topic** is the main menu option a student sees first (e.g. CVs)
- The **subtopic** (inside `options`) is what they pick next
- The **links** are what PurplePath shows them at the end

**Step 3 — Update an existing link**

If a URL on the Sheffield Careers website has changed, here's how to update it:
1. Find the relevant topic and subtopic in the file
2. Look for the `"url"` field inside `"links"`
3. Replace the old URL with the new one
4. Make sure the new URL starts with `https://` and has no spaces

For example, I'd change this:
```json
"url": "https://students.sheffield.ac.uk/careers/old-page"
```
to this:
```json
"url": "https://students.sheffield.ac.uk/careers/new-page"
```

**Step 4 — Add a new subtopic**

If Sheffield Careers has published a new resource and you'd like PurplePath to cover it, here's what I'd like you to do:
1. Find the relevant topic (e.g. `"Finding Jobs"`)
2. Inside its `"options"` section, add a new block at the end using this format:

```json
"Name of New Subtopic": {
  "response": "Write a short, friendly sentence describing what this resource is.",
  "links": [
    {
      "title": "Name of the page or resource",
      "description": "One sentence explaining what the student will find there.",
      "url": "https://paste-the-full-url-here.com"
    }
  ]
}
```

One thing to watch out for — make sure you add a **comma** after the closing `}` of the subtopic above it, unless it's the very last item in the list.

**Step 5 — Add a brand new topic**

If Sheffield Careers has launched a completely new section that I haven't covered yet, you can add it yourself like this:
1. Scroll to the end of the `"categories"` section in the file
2. Paste in a new block using this format:

```json
"Name of New Topic": {
  "icon": "replace with an appropriate icon",
  "greeting": "Write a short welcome message for students entering this topic.",
  "options": {
    "First Subtopic": {
      "response": "Friendly description of this resource.",
      "links": [
        {
          "title": "Page Title",
          "description": "What the student will find here.",
          "url": "https://full-url-here.com"
        }
      ]
    }
  }
}
```

Again, make sure you add a **comma** after the closing `}` of the topic above it before pasting this in.

**Step 6 — Save your changes on GitHub**

Once you're happy with your edits, here's how to save them:
1. Scroll to the bottom of the GitHub editor
2. You'll see a box called **"Commit changes"**
3. In the short description field, write something brief like: `Updated CV links` or `Added new internship subtopic`
4. Click **"Commit changes"**
5. That's it — your changes are saved and PurplePath will reflect them straight away

### A Few Things to Watch Out For
- **Do not delete any commas, brackets, or quotation marks** that were already in the file — removing these can break everything
- **Every `"` must be a straight quote** — not a curly quote, which some text editors insert automatically
- If you're unsure whether your edit looks right, paste the full file into [jsonlint.com](https://jsonlint.com) — it will highlight any errors and tell you exactly where they are
- If something goes wrong or you're not sure, feel free to reach out to me directly

---

## Data Source

All topics, subtopics, and links are sourced directly from the **University of Sheffield Careers Service** website:

- 🌐 Main site: [sheffield.ac.uk/careers](https://sheffield.ac.uk/careers)
- 🎓 Student portal: [students.sheffield.ac.uk/careers](https://students.sheffield.ac.uk/careers)
- 📅 Events & bookings: [Career Connect](https://sheffield.ac.uk/careers/support/services/career-connect)

---

## Project Structure

```
purplepath/
├── purplepath_data.json      # All topics, subtopics, responses and links
├── README.md                 # You're reading it
```

The core of the project is `purplepath_data.json`, which contains:

```json
{
  "bot_name": "PurplePath",
  "university": "The University of Sheffield",
  "greeting": "...",
  "categories": {
    "Topic Name": {
      "icon": "emoji",
      "greeting": "...",
      "options": {
        "Subtopic Name": {
          "response": "...",
          "links": [
            {
              "title": "...",
              "description": "...",
              "url": "..."
            }
          ]
        }
      }
    }
  },
  "fallback_message": "...",
  "fallback_links": []
}
```

---

## Built For

- 🎓 University of Sheffield students — undergraduate, postgraduate, and researchers
- 📍 Designed around the official Sheffield Careers Service content
- 🟣 Named after Sheffield's iconic colour — **purple**

---

## Contributing / Updating

If Sheffield Careers updates their website, links, or adds new resources:

1. Open `purplepath_data.json`
2. Find the relevant topic and subtopic
3. Update the `url` field with the new link, or add a new option under the relevant category
4. Keep the structure consistent with the existing format

---

## Disclaimer

PurplePath is a student navigation tool. It is not an official University of Sheffield product. All links and resources point to the official Sheffield Careers Service website. For personalised advice, students should book a 1:1 appointment via [Career Connect](https://sheffield.ac.uk/careers/support/services/appointments).

---

*Made with 🟣 for Sheffield students*
