# Keith Young | Computer Science Portfolio

This is my academic and professional portfolio, built as part of the Individual Learning Plan requirement for the Computer Science program at California State University Monterey Bay. I’m using it to document my coursework, showcase independent projects, and connect what I learn to my professional goals.

The site will grow throughout the program and continue as my personal portfolio after graduation.

**Live site:** [permarack.github.io/portfolio](https://permarack.github.io/portfolio/)

## What’s included

- A homepage with my background, program overview, goals, and contact information.
- An academic portfolio organized by term, with separate pages for all 15 courses in my ILP.
- Catalog descriptions, final-project placeholders, and space for course reflections.
- An independent AI/Gaming homelab project showcase covering completed work, architecture decisions, lessons learned, and planned development.

## Site structure

| Location | Purpose |
| --- | --- |
| `index.html` | Homepage, bio, goals, and contact section |
| `academic.html` | Course index organized by term |
| `courses/` | Individual course pages |
| `projects.html` | Independent project showcase |
| `assets/style.css` | Shared styling and responsive layouts |
| `assets/site.js` | Course search and mobile navigation behavior |
| `assets/courses.json` | Course titles, term assignments, and short topic summaries |
| `assets/catalog-descriptions.json` | Catalog descriptions and source information |
| `scripts/build.py` | Optional page generator |
| `.nojekyll` | Keeps GitHub Pages from processing the site with Jekyll |

## Maintenance notes

The site uses plain HTML, CSS, and JavaScript without a framework or dependency installation. GitHub Pages publishes the `main` branch from the repository root.

My routine updates are course projects, reflections, independent-project milestones, and contact information. Project entries should distinguish completed work from planned capabilities.

Files and links use relative paths so the site works under its current `/portfolio/` address and can be moved to another host later. Project documents can be kept in `assets/projects/` and linked from the relevant course page.

### Local preview

From the repository root:

```bash
python3 -m http.server 8000
```

The preview is available at [localhost:8000](http://localhost:8000).

### Optional page generation

`scripts/build.py` regenerates the HTML pages and `assets/courses.json`. It also applies the descriptions stored in `assets/catalog-descriptions.json`.

**The generator overwrites manual HTML edits.** Before using it, I need to carry any changes made directly to the pages back into the generator. Direct HTML editing is sufficient for routine maintenance; regeneration is optional.

### Before publishing an update

- Check navigation and relative links.
- Confirm images, styling, and downloads load.
- Check the affected pages on a narrow screen.
- Review project status and contact details for accuracy.
- Commit to `main` and confirm the Pages deployment succeeds.

## Future additions

- Course final projects and reflections.
- The CST 349 Industry Expert Interview Report.
- Additional independent projects and supporting artifacts.
- A professional photo and resume.
- My personal domain, `permarack.com`; its homepage link is currently commented out.

## References

- My Individual Learning Plan for course selection and term scheduling.
- [CSUMB Computer Science Online program](https://csumb.edu/academics/programs-degrees/computer-science-online/)
- [CSUMB 2025–2026 archived program catalog](https://catalog.csumb.edu/preview_program.php?catoid=11&poid=2405&returnto=591)
- [CSUMB course catalog](https://catalog.csumb.edu/)
- [CSUMB logo guidelines](https://csumb.edu/communications/brand-guidelines/logo-guidelines/)

This is my personal student portfolio. The CSUMB logo remains the property of the university.
