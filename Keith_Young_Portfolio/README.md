# Keith Young — Computer Science Portfolio

A static portfolio for CSUMB's ILP assignment and continued professional use. Includes a homepage, academic index, 15 individual course pages, and a project index. No package installation or framework is needed.

## Publish with GitHub Pages

1. Create a public repository named `portfolio` (or use `YOUR-USERNAME.github.io` for your main personal site).
2. Upload the **contents** of this folder to the repository root, including `index.html`, `assets/`, `courses/`, and `.nojekyll`.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then select **main** and **/(root)** and save.
5. Wait for the Pages deployment to finish. Settings → Pages will display the actual live address. Verify it while signed out before submitting it to your course roster.

## Local preview

Run `python3 -m http.server 8000` in this folder and open http://localhost:8000.

## Edit the portfolio

- Homepage: `index.html` (bio, program summary, goals).
- Academic index: `academic.html`.
- Course pages: `courses/cst-300.html`, etc.
- Styling: `assets/style.css`.
- Course search: `assets/site.js`.
- Add project files to `assets/projects/` and link them from the appropriate course page using relative paths.
- GitHub's file editor can make changes; commit each update to publish it.

The optional `scripts/build.py` generator creates all HTML pages and `assets/courses.json`. **Running it overwrites manual HTML changes.** Either edit the generated HTML directly and stop using the generator, or make content changes in the generator and rerun it.

## Content still needed

- Replace provisional topic summaries with verified official CSUMB catalog descriptions. The catalog returned HTTP 403 during preparation; the summaries are not official catalog wording.
- Add the CST 349 Industry Expert Interview Report before submitting the assignment.
- Review the drafted bio and professional goals for accuracy.
- Optional professional photo, resume, and chosen public contact information.
- Final projects and reflections as courses finish. CST 499 is a future capstone placeholder.

## Course scope

Only the 15 courses scheduled in the supplied ILP are included. Completed prerequisites and requirements marked needed are excluded. CST 315 is selected in the ILP; CST 325 and CST 383 are not scheduled. The ILP lists CST 499 in Spring 2028 B and expected graduation in Summer 2028.

The private ILP itself is intentionally not included in the public website.

## Sources

- ILP supplied by Keith Young (course selection and term plan).
- CSUMB Computer Science Online program: https://csumb.edu/academics/programs-degrees/computer-science-online/
- CSUMB curriculum: https://csumb.edu/scd/cs-course-curriculum/
- Official catalog: https://catalog.csumb.edu/
- Logo guidelines: https://csumb.edu/communications/brand-guidelines/logo-guidelines/
- Official logo asset: https://csumb.edu/media/csumb/legacy/legacy-site-images/section-editors/university-communications/updated-branding/Logo_Primary-Full-color.jpg

The homepage learning goals are a portfolio summary, not a verbatim list of university major learning outcomes. University marks remain the property of CSUMB. This is a personal student portfolio.
