# CHB Food Safety Consulting — Build Brief and Copy Deck

Anything in [BRACKETS] is an unconfirmed fact. Leave it as a visible
placeholder in the build. Do not invent a replacement.

---

# PART 1 — BUILD BRIEF

## Stack
- Next.js, App Router
- TypeScript
- Tailwind CSS
- shadcn/ui for components
- Deployed to Vercel
- No CMS. Blog posts are markdown files in the repo.

## Pages
| Page | Route |
|---|---|
| Home | `/` |
| Health Department Czar | `/health-department-czar` |
| Multi-Unit Food Safety | `/multi-unit-food-safety` |
| Food Manufacturing | `/food-manufacturing-consulting` |
| Houston Food Safety Consultant | `/houston-food-safety-consultant` |
| Resources / Blog | `/resources` and `/blog` |
| About | `/about` |
| Contact | `/contact` |

## Design direction
The audience is VPs of Operations and Directors of QA at multi-unit
restaurant, convenience, and grocery brands. The site should read like
a firm, not a personal brand.

- Professional and restrained. Generous whitespace, strong typography,
  minimal color.
- No stock photos of smiling people in aprons.
- No gradients. No animations beyond subtle hover states.
- No exclamation points anywhere in the interface.
- Mobile first, fully responsive.

## Technical requirements
- Per-page metadata via the Next.js Metadata API, using the exact title
  tags and meta descriptions in Part 2
- Open Graph tags on every page: og:title, og:description, og:image at
  1200x630
- Exactly one H1 per page, correct heading hierarchy below it. Service
  names are H2 or H3, never H6.
- Calendly inline embed on Contact, Calendly popup button in the header
- Schema markup: LocalBusiness and Person
- Descriptive alt text on every image
- Accessible: semantic HTML, keyboard navigation, visible focus states
- sitemap.xml and robots.txt

## Build order
Build the homepage first and stop for review before continuing. Then
proceed one page at a time.

## Global elements
Navigation: Home | Services | Multi-Unit | Manufacturing | Resources |
About | Contact

Services is a dropdown: Health Department Czar, Food Safety Audits,
Pre-Opening Consultation, Training.

Right-aligned "Book a call" button in the header on every page, opening
the Calendly popup.

Footer: CHB Food Safety Consulting, Houston, TX. Phone and email. Nav
links. Social icons (Facebook, X, LinkedIn, Instagram).
"© CHB Food Safety Consulting LLC. All rights reserved."
No third-party design credit in the footer.

---

# PART 2 — COPY

## Positioning reference (do not put on the site)

> The only food safety consultant who has been the health inspector, run
> the health department program, and owned food safety for a
> 1,700-location restaurant brand.

Primary buyer: VP of Operations, Director of QA, or Director of Food
Safety at a multi-unit restaurant, convenience store, or grocery brand.
20 to 500+ locations.

Their fear: a bad score at one location becomes a local news story,
becomes a brand problem across every location, becomes a call from the
CEO.

Secondary buyer: QA Manager or Plant Manager at a food manufacturer.
Scope limited to HACCP, food safety plans, SOPs, and regulatory
readiness. No GFSI certification claims anywhere on the site.

Tone: senior, plain, unhurried. He is the most experienced person in the
room and does not need to shout.

---

## HOME

Route: `/`
Title tag: Food Safety Consultant for Multi-Unit Operators | CHB
Meta description: Former health inspector and food safety director for a
1,700-location chain. CHB keeps multi-unit restaurant and retail brands
inspection-ready. Book a 30-minute call.

### Hero

H1: One bad inspection becomes a brand problem across every location.

Subhead:
Chirag and his team keep multi-unit restaurant, convenience, and
grocery operators inspection-ready. Founded by Chirag Bhatt, a former
city health inspector, Health Department Program Chief, and food safety
director for a 1,700-location restaurant brand.

Primary button: Book a 30-minute inspection readiness call
Secondary link: Or send a note

### Section: The credential

H2: He has sat on both sides of the inspection table.

Most food safety consultants have worked in operations. A few have
worked in regulation. Chirag Bhatt has spent nearly four decades doing
both.

He began as a health inspector with the City of Houston public health
agency and advanced to Health Department Program Chief. He then helped
implement technology and data management solutions for public health
agencies in Washington DC, Chicago, San Antonio, and Tulsa. He went on
to serve as
Regulatory Affairs Manager, Technical Services Director, and Food Safety
and QA Director for Bloomin' Brands, a publicly traded restaurant company
with 1,700 locations; Sysco, a national distribution company; and
Buc-ee's, one of the largest convenience store chains in the country.

A manager at that restaurant company introduced him as the person who
speaks Health Departmanese.

That is the whole value. He knows what the inspector is looking for,
because he used to be the one looking. And he knows what it costs to fix
it, because he has carried that budget.

### Section: Three ways he works

Three cards, each linking to its page.

Card 1 — Health Department Czar
A retained relationship. He handles your health department directly:
interpreting findings, negotiating reasonable remedies, and heading off
the inspection that ends up on the local news.

Card 2 — Food Safety Audits and Self-Inspection Systems
A custom audit built around your SOPs and your real violation history,
plus the training that teaches your managers to run it themselves
between visits.

Card 3 — Pre-Opening Consultation
A walkthrough before you sign. The same idea as a home inspection before
a mortgage, applied to the space you are about to commit to.

### Section: Who he works with

H2: Built for operators with more than one location.

Single-location problems are usually training problems. Multi-location
problems are system problems, and they compound. Chirag builds the
systems: standard operating procedures customized for your organization,
self-inspection programs, and Active Managerial Control practices that
hold up across every shift, every store, and every inspector in every
jurisdiction you operate in. Create your own food safety culture!

He also works with food manufacturers on HACCP plans, food safety plans,
and regulatory readiness.

Two links: "For multi-unit operators" and "For food manufacturers"

### Section: Proof

> "He has a superb background in food safety, regulatory laws, audit
> schemes, and compliance."
> — [NAME], [TITLE], [COMPANY]

### Closing CTA

H2: Thirty minutes will tell you whether this is worth a longer
conversation.

No pitch deck and no obligation. Bring your last three inspection
reports and he will tell you what he sees.

Calendly inline embed.

---

## HEALTH DEPARTMENT CZAR

Route: `/health-department-czar`
Title tag: Health Department Consulting for Restaurant Groups | CHB
Meta description: Retained health department representation for
multi-unit operators. A former inspector and program chief handles your
regulatory relationships and protects your brand.

H1: Health Department Czar
Subhead: Retained regulatory representation for multi-unit brands.

### The problem

You have seen the segment. A local news team runs an inspection report
from one of your locations, the violations sound worse than they were,
and by the evening the story is attached to your brand and not to that
one store.

Most of those stories were preventable. Not by scoring better, but by
understanding what the inspector was actually documenting and resolving
it before it became a public record.

That requires someone who can talk to both sides. Very few people can.

### What he does

- Reviews inspection reports across your portfolio and identifies the
  patterns your internal team is too close to see
- Speaks directly with health departments on your behalf, in their
  language and within their process
- Translates findings into remedies your operators can actually execute
- Prepares your team for reinspections and complaint-driven visits
- Advises on jurisdictional differences when you operate across city,
  county, and state lines
- Serves as your on-call subject matter expert when something goes wrong
  at 9pm on a Friday

### Why him

He was the inspector. Then he was the Program Chief who supervised
inspectors. Then he was the food safety director on the receiving end of
those inspections at 1,700 locations.

He has never wanted to be a food safety cop. Operators he regulated used
to say you would not get a favor from him, but you would get an
explanation of exactly how to get your place into compliance. That
approach is why health departments take his calls now.

### Engagement shape

Retainers are scoped to the size of your portfolio and the depth of
support you need. Most retained clients work with Chirag and his team on a
monthly basis
over a six to twelve month engagement.

DO NOT DISPLAY PRICING ANYWHERE ON THE SITE.

### Add-on: AI systems for food safety operations

Once the program is built, Chirag and his team can automate the parts of it
your team
currently runs on paper.

- Digital self-inspection checklists managers complete on a phone, with
  photo capture and automatic escalation when something fails
- SOPs and corrective action plans that generate from your program and
  stay current as menus, equipment, and procedures change
- Pattern detection across locations that flags recurring risk before it
  appears in an official inspection
- Custom AI-native tools built around how your operation actually runs,
  instead of bending your process to fit off-the-shelf software

Every build is different. Scope and pricing are set per project based on
the size of your operation and what you need built.

CTA for this block: Talk through what this would look like for your
operation

### Testimonial

> "Chirag has been a leader in promoting a positive food safety culture
> and implementing sustainable food safety programs."
> — [NAME], [TITLE], [COMPANY]

Page CTA: Book a 30-minute call to scope a retainer

---

## MULTI-UNIT FOOD SAFETY

Route: `/multi-unit-food-safety`
Title tag: Multi-Unit Restaurant Food Safety Consulting | CHB
Meta description: Food safety systems for restaurant, convenience, and
grocery brands with multiple locations. SOPs, self-inspection programs,
audits, and manager training.

H1: Food safety systems for multi-unit operators
Subhead: Consistency across every location, every shift, and every
jurisdiction.

### The problem

Food safety is not a certificate someone carries. It is what your team
practices when nobody is watching.

At one location you can manage that with a good general manager. At
forty, you cannot. What you get instead is a range: three locations that
are excellent, thirty that are acceptable, and seven that are one
inspection away from a headline. The seven are not a training problem.
They are a system problem.

### What he builds

Food Safety Management Systems
A documented program built on Active Managerial Control principles,
designed around your menu, your equipment, and your actual staffing
model. Not a binder that sits on a shelf.

Custom Standard Operating Procedures
Most operator SOPs are inherited, outdated, and written by someone in HR
rather than a food safety professional. HR documents do not address
foodborne illness risk factors. These do.

Self-Inspection Programs
The highest-return work he does. Managers learn to inspect their own
shift against the same criteria a health inspector uses. Done properly,
the official inspection stops producing surprises.

Food Safety Audits
Different from a health inspection. Built around your SOPs and your
known critical violations, so it drives the specific behaviors your
operation needs rather than a generic checklist.

Manager and Staff Training
Delivered on site, anywhere in the US. Food safety is culture, and
culture does not transfer through a PDF. Teach and coach, in person, in
your kitchen.

New Openings and Menu Review
Regulatory-focused review of new locations and menu changes before they
create a compliance problem you have to unwind later.

### Short AI block

Two lines plus a link to the full section on the Health Department Czar
page.

Chirag and his team can also automate your self-inspection checklists and SOP
maintenance, and build custom AI tooling around how your operation
actually runs. Scoped per project.

### Testimonial

> "Chirag considers all the facts and doesn't overlook a single detail
> while at the same time he thoroughly grasps the big picture, business,
> and the current food safety issues."
> — Former R&D Director

CTA: Book a 30-minute call

---

## FOOD MANUFACTURING

Route: `/food-manufacturing-consulting`
Title tag: HACCP and Food Safety Plan Consulting | CHB
Meta description: HACCP plans, food safety plans, SOPs, and FDA and USDA
regulatory readiness for food manufacturers and processors. HACCP
certified consultant.

H1: HACCP and regulatory consulting for food manufacturers
Subhead: Plans that hold up to inspection, written by someone who used
to run the inspections.

### Scope

Chirag and his team work with food manufacturers and processors, large and
small, on:

- HACCP plan development, validation, and revision
- Food safety plans and hazard analysis
- Standard operating procedures and corrective action planning
- FDA, USDA, and state regulatory inspection readiness
- Mock inspections and gap assessments
- Executive-level reporting and updates
- Custom training for QA and production teams

Chirag Bhatt is HACCP certified and has consulted for manufacturing
operations at both ends of the size range, in addition to nearly four
decades in regulatory and multi-unit food safety leadership.

### What he does not do

He does not prepare facilities for GFSI certification schemes such as
SQF, BRCGS, or FSSC 22000. If certification is your objective, you want
a certified practitioner in that specific scheme, and he will tell you
that in the first conversation rather than the third month.

What he does bring is the regulatory side: what an inspector will look
for, how a finding gets documented, and how to close it out cleanly.

### Testimonial

> "In addition to Food Safety, he also has vast experience with creating
> standard operating procedures and corrective action planning, as well
> as providing executive updates."
> — Former Supply Chain SVP

CTA: Book a 30-minute call

---

## HOUSTON FOOD SAFETY CONSULTANT

Route: `/houston-food-safety-consultant`
Title tag: Houston Food Safety Consultant | Restaurants and Retail
Meta description: Houston-based food safety consulting for restaurants,
convenience stores, grocery, and food manufacturers. Former City of
Houston health inspector. On-site across Texas.

H1: Houston food safety consultant
Subhead: Based in Houston. On site anywhere in the US.

Chirag Bhatt is based in Houston, Texas, where he began his career as a
health inspector with the City of Houston public health agency and
advanced to Health Department Program Chief.

That matters locally in a way it does not anywhere else. He knows how
Houston Health Department inspections are conducted, how findings are
documented, and who to talk to when something needs to be resolved
rather than escalated. He has the same working knowledge of Harris
County and surrounding jurisdictions.

Chirag and his team serve operators throughout the Houston metro, including
Katy, Sugar
Land, The Woodlands, Pearland, Cypress, Spring, Baytown, and the
Heights, as well as brands operating across Texas in Dallas, Austin, San
Antonio, and Fort Worth.

For multi-unit clients, on-site work is available anywhere in the US.

### Local services block

Repeat the three core offerings with Houston framing. Link each to its
main page. Keep it short. This page exists to rank and to route.

CTA: Book a 30-minute call

---

## RESOURCES AND BLOG

Route: `/resources` and `/blog`
Title tag: Food Safety Resources for Operators | CHB
Meta description: Practical food safety tools, guides, and commentary
for multi-unit operators and food manufacturers. Free self-inspection
checklist.

H1: Food safety resources
Subhead: Practical tools that bridge regulatory theory and daily
operations.

### Lead magnet

The Pre-Inspection Self-Audit Checklist

A one-page checklist your managers can run before every shift, built
from the violations that actually shut restaurants down. Free.

Email capture form: email address and company name only. Two fields.
Nothing else.

### Blog

Posts are markdown files under `/content/blog`. Each post needs
frontmatter for title, description, date, and slug. Build an index page
and a dynamic post route.

Posts to migrate from the old WordPress site. Preserve these slugs or
301 redirect them:

- /cyclospora-outbreak/
- /2027-presidential-budget-food-safety/
- /the-digital-revolution-transforming-food-safety/
- /public-health-agency-and-robust-technology/
- /food-safety-culture-recipe/
- /cost-to-closing-your-business-for-foodborne-illness-outbreak/

Planned posts (titles only, copy to come):

1. FSMA 204: the compliance date moved to July 20, 2028, and most
   guidance online is still wrong
2. What a health inspector is actually looking for in the first five
   minutes
3. Your bad inspection score is about to be public. What to do in the
   next 48 hours
4. Why your SOP binder is not protecting you
5. Self-inspection: how to teach a GM to catch it before the inspector
   does

---

## ABOUT

Route: `/about`
Title tag: About Chirag Bhatt | CHB Food Safety Consulting
Meta description: Nearly four decades in food safety across regulatory
agencies, multi-unit restaurant brands, and food manufacturing. Former
health inspector and Health Department Program Chief.

H1: About Chirag Bhatt

Expand the homepage credential section into a full career narrative.
Structure it as a timeline or as sections by era:

1. Regulatory. City of Houston public health agency, health inspector
   through Health Department Program Chief. Implemented technology
   solutions for the city.
2. Public health technology. Client consultant to a software provider,
   delivering custom inspection platforms for public health agencies in
   Washington DC, Chicago, San Antonio, and Tulsa.
3. Industry. Regulatory Affairs Manager, Technical Services Director,
   and Food Safety and QA Director across a publicly traded restaurant
   company with 1,700 locations, a national distribution company, and
   one of the largest convenience store chains in the US.
4. Consulting. CHB Food Safety Consulting.

Credentials block: HACCP certified, RS (Registered Sanitarian), CCFS
(Certified in Comprehensive Food Safety), and PCQI (FSMA).

Philosophy pull quote: He has never wanted to be a food safety cop.
Education first, every time.

Speaking: He presents on food safety topics at industry and regulatory
forums, including the National Environmental Health Association and its
regional affiliates, AFDO and its regional affiliates, the National
Restaurant Association, the Conference for Food Protection, and many
others. [ADD SPEAKING PHOTOS]

### Owner-provided About Us copy (uploaded About_Us_website.docx)

NOTE: This copy names specific former employers and clients (Bloomin'
Brands, Buc-ee's, Sysco, First Watch). The original brief (Part 4, item
6) flagged confirming whether these may be published named. Confirm
before this goes live.

> About Us – CHB Food Safety Consulting
>
> Turn Food Safety Compliance into a Competitive Advantage
>
> In the food industry, regulations aren't just checkboxes but they're
> your shield against costly fines, shutdowns, brand damage, and
> lawsuits. At CHB Food Safety Consulting, we help restaurant groups,
> convenience store chains, distributors, and foodservice operators
> achieve Best-in-Class food safety without the usual friction, fear, or
> operational disruption.
>
> Meet Chirag Bhatt — 40+ Years Bridging the Gap Between Regulators and
> Operators
>
> I've spent my career on both sides of the table:
>
> - As a senior regulator with the City of Houston, where I led with an
>   "Education First" approach for 26 years.
> - As Global Regulatory Compliance Manager for Bloomin' Brands (1,700+
>   locations).
> - As Director of Food Safety & QA for Buc-ee's and in top-tier food
>   distribution company – Sysco Corporation.
> - As a trusted advisor helping public health agencies in Washington
>   D.C., Chicago, San Antonio, and beyond modernize their systems.
>
> That rare perspective lets me translate complex "Health Departmanese"
> into practical, actionable steps your teams actually understand and
> follow.
>
> The Rainman of the Food Code — My teams nicknamed me the "Rainman of
> the Food Code" for my deep regulatory knowledge. Operators called me
> the person who speaks Health Departmanese - and more importantly,
> translates it so everyone gets on board.
>
> I don't show up as the "food safety cop." I show up as your partner
> who believes: If you can see it, you can fix it. My goal is to replace
> resentment with collaboration, turning compliance into a culture that
> protects your customers, your brand, and your bottom line.
>
> Why Partner with CHB Food Safety Consulting?
>
> - Proven Results Across the Supply Chain: From manufacturing and
>   distribution to multi-unit restaurants and high-volume convenience
>   operations.
> - Practical, Not Punitive: I build systems that work in real kitchens
>   with real teams under real pressure.
> - Regulatory Insight Others Lack: Deep understanding of FDA Food Code,
>   local/state/federal expectations, and how to influence positive
>   outcomes with inspectors.
> - End-to-End Expertise: Risk assessments, program development, audit
>   preparation, corrective action plans, SOPs, technology
>   implementation, training, and executive reporting.
>
> Whether you're a growing regional chain facing scaling challenges, a
> large operator preparing for aggressive growth, or a company
> recovering from a compliance issue, I deliver solutions tailored to
> your operation.
>
> What Clients Say
>
> "Chirag has a superb background in food safety, regulatory laws, audit
> schemes, and compliance. He is extremely friendly and uses a
> collaborative approach to problem solving." — Former Manager
>
> "He related very well to operators and health department officials
> across the country." — Former Concept President
>
> "Chirag is a consummate professional… always willing to volunteer his
> time to help others improve their food safety programs, sharing best
> practices and leading new ideas for regulatory improvements." — Public
> Health Expert and Industry Leader
>
> Additional clients include executives from First Watch and other
> leading hospitality and retail food brands.
>
> Let's Build a Safer, Stronger Operation Together
>
> If you're ready to move beyond "passing inspections" to building a
> truly robust food safety culture that supports growth, I'd love to
> speak with you.
>
> Services Include:
>
> - Comprehensive food safety program development & gap assessments
> - Audit readiness (internal, third-party, regulatory)
> - Corrective action planning and sustained compliance
> - Team training and culture transformation
> - Regulatory interpretation and agency liaison support
> - SOP development and operational excellence initiatives
> - Keynote speaking and leadership presentations
>
> Contact Chirag Bhatt today to schedule a no-obligation consultation.
> Let's discuss your specific challenges and explore how 40 years of
> hard-won expertise can deliver measurable results for your business.
>
> [Contact Us / Schedule a Call Button]

---

## CONTACT

Route: `/contact`
Title tag: Contact CHB Food Safety Consulting
Meta description: Book a 30-minute inspection readiness call, or send a
note. Houston-based food safety consulting for multi-unit operators and
manufacturers.

H1: Let's talk

Thirty minutes is usually enough to tell whether this is worth pursuing.
Bring your last few inspection reports if you have them.

Two paths side by side, stacking on mobile.

Left — Calendly inline embed
- Event: 30-Minute Inspection Readiness Call
- Duration: 30 minutes, 15-minute buffer after
- Booking fields: name, work email, company, number of locations, what
  prompted you to reach out
- Confirmation and reminder emails enabled

Right — short form
Four fields: name, company, number of locations, message. Only name and
email required.

Do not include a required "Title" field. Do not include a "How did you
hear about me?" field. Both were on the old site and both add friction.

---

# PART 3 — SEO CHECKLIST

Each item corrects a specific defect found in the audit of the existing
site.

- [ ] Unique title tag on every page, under 60 characters, keyword first
- [ ] Unique hand-written meta description on every page, 150 to 160
      characters, never auto-generated
- [ ] Exactly one H1 per page, matching the page subject
- [ ] Correct heading hierarchy: H1, then H2, then H3. Service names are
      never H6.
- [ ] og:title, og:description, og:image on every page. The old homepage
      had an empty og:title, so every share rendered blank.
- [ ] og:image at 1200x630, not a 150x150 logo
- [ ] Descriptive alt text on every image
- [ ] Real anchor text on all links. Never render a raw URL as visible
      link text. The old homepage did this five times.
- [ ] Target keywords in body copy: food safety consultant, multi-unit,
      restaurant food safety, health department, HACCP, food safety
      plan, SOP, Houston
- [ ] LocalBusiness and Person schema
- [ ] sitemap.xml and robots.txt
- [ ] 301 redirects from every old URL to its new equivalent

---

# PART 4 — OPEN ITEMS (owner tasks, not build tasks)

The site can be built without these but should not launch without them.

1. Domain registrar access. Run a WHOIS lookup on chbconsulting.us and
   confirm the registrar account is controlled by the owner, not the
   2019 agency. Only item that can block a launch.
2. Testimonial attributions. Names, titles, companies for all three
   quotes.
3. Result-based testimonials. Ask two or three former clients: "What was
   the problem you brought me in for, and what changed afterward?"
4. Professional headshot. The existing one is a 150x150 thumbnail from
   2019.
5. Speaking photos at original resolution from the old WordPress media
   library.
6. Confirm the 1,700-location claim is safe to publish unnamed, and
   whether any former client will permit attribution.
7. Social handle cleanup. Facebook, X, and LinkedIn point at
   MyHealthInspector. Instagram is chbfoodsafety. Rename all four to CHB
   Food Safety Consulting.
8. Google Search Console verified before launch, for a traffic baseline.
9. Google Business Profile created with a Houston service area, linked
   to the Houston page.
