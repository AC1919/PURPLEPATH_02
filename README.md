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

1. The student is greeted by PurplePath
2. They select a **main topic** (e.g. "CVs, Cover Letters and Applications")
3. They select a **subtopic** (e.g. "Getting Feedback on Your CV")
4. PurplePath responds with a helpful message and direct links to the relevant Sheffield Careers resources

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
