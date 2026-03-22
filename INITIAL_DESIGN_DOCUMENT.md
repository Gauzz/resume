# Design System Document: Technical Precision & Editorial Depth

## 1. Overview & Creative North Star: "The Architectural Blueprint"
This design system moves beyond the standard "dark mode" resume. Our Creative North Star is **The Architectural Blueprint**. We are treating the digital canvas not as a flat screen, but as a high-fidelity technical schematic. 

The aesthetic is rooted in **Engineer Brutalism**—where every pixel must justify its existence. We achieve a premium feel not through "decoration," but through extreme typographic rigor, intentional asymmetry, and a sophisticated layering of charcoal surfaces. This is an editorial take on technical documentation: high-contrast, ultra-clean, and undeniably professional.

---

## 2. Colors: The Charcoal & Cobalt Spectrum
We utilize a monochromatic base of deep charcols to create a sense of infinite depth, punctuated by a surgical application of `primary` (#3b82f6) to draw the eye to key technical achievements.

### Surface Hierarchy & Nesting
To achieve a high-end feel, we prohibit the "flat" look. We use **Tonal Nesting** to define importance:
- **Global Canvas:** `surface` (#131313). This is the "void" upon which the resume is built.
- **Section Containers:** `surface_container_low` (#1c1b1b). Use this for large logical groupings (e.g., Experience, Education).
- **Interactive/Focus Cards:** `surface_container` (#201f1f). Use this for individual project cards or skill chips to make them "lift" from the section.
- **Accent Highlighting:** Use `primary_container` (#4d8eff) at 10% opacity for subtle background washes behind technical keywords.

### The "No-Line" Rule
While the initial brief requested 1px strokes, to achieve a truly premium "Senior Director" level aesthetic, **prohibit 1px solid high-contrast borders for sectioning.** 
- Boundaries must be defined by background shifts (e.g., a `surface_container_low` section sitting on a `surface` background).
- **The Ghost Border Exception:** If a container requires a stroke for definition, use `outline_variant` (#424754) at **20% opacity**. This creates a "technical whisper" rather than a hard box.

---

## 3. Typography: The Inter Geometric Scale
We use **Inter** exclusively. Its geometric neutrality mimics the clean lines of a CAD drawing.

*   **Display-LG (3.5rem):** Reserved for the Name/Identity. Use `on_surface` with `-0.04em` letter spacing for a "compressed" high-fashion look.
*   **Headline-SM (1.5rem):** Section titles. Use `primary` (#adc6ff) to create a clear scan-path for recruiters.
*   **Title-SM (1rem):** Job titles or Project names. Bold weight (`font-weight: 600`).
*   **Body-MD (0.875rem):** The workhorse. All descriptions and bullets. Set line-height to `1.6` to ensure technical jargon remains readable.
*   **Label-SM (0.6875rem):** Metadata (Dates, Tech Stack tags). Uppercase with `0.05em` letter spacing to mimic blueprint annotations.

---

## 4. Elevation & Depth: Tonal Layering
In this system, depth is a function of light, not shadows.

*   **The Layering Principle:** Stack `surface_container_lowest` on top of `surface_container_high` to create an "inset" look, useful for code snippets or technical sidebars.
*   **Ambient Shadows:** We avoid traditional drop shadows. If an element must float, use a 24px blur with `0%` spread and 4% opacity of `on_secondary_fixed_variant` (#304671). This creates a cool-toned, "technological" glow.
*   **Glassmorphism:** For floating skill tags or "Contact Me" overlays, use `surface_container_highest` at 60% opacity with a `20px` backdrop-blur. This mimics frosted technical glass.

---

## 5. Components: The Engineering Kit

### Buttons (The "Action" Primitives)
- **Primary:** `primary` (#adc6ff) background with `on_primary` text. Use `rounded-md` (0.375rem). No shadow.
- **Secondary:** Transparent background with a `Ghost Border` (20% opacity `outline_variant`). 
- **States:** On hover, shift background to `primary_container`. Transitions must be `200ms ease-in-out`.

### Technical Chips (The "Skill" Primitives)
- **Style:** No borders. Background: `surface_container_high`. Text: `on_surface_variant`. 
- **Layout:** Use `padding: 0.35rem 0.85rem` (Spacing 1 and 2.5). 
- **Visual Soul:** Add a 4px dot of `primary` (#3b82f6) to the left of the text for "active" skills to denote proficiency.

### Cards & Lists (The "Experience" Primitives)
- **Forbid Divider Lines:** Separate job roles using `spacing-8` (2.75rem) of vertical whitespace. 
- **The "Accent Gutter":** Use a vertical 2px strip of `primary_container` on the far left of the "Current Role" to denote the present timeline.

### Input Fields (For "Contact" or "Search")
- **Base:** `surface_container_lowest`. 
- **Border:** `outline_variant` at 20%. 
- **Focus:** Border transitions to `primary` (#3b82f6) with a 2px outer "glow" (not shadow) using the `primary` color at 10% opacity.

---

## 6. Do’s and Don’ts

### Do:
- **Embrace Asymmetry:** Align contact info to the far right while the experience stays left. This breaks the "Word Template" feel.
- **Use Micro-Spacing:** Use `spacing-0.5` (0.175rem) for the gap between a Label and its associated Body text. Precision is key.
- **Leverage the Primary Color:** Use `#3b82f6` sparingly—only for links, bullet points, or "Expert" level skill markers.

### Don't:
- **Don't use Pure White:** Never use #FFFFFF. Use `on_surface` (#e5e2e1) to reduce eye strain and maintain the "Charcoal" atmosphere.
- **Don't use Rounded-Full:** Avoid pill-shaped buttons unless they are tiny tags. The `0.375rem` (md) radius maintains the architectural "squareness" of the system.
- **Don't use Standard Dividers:** Never use a solid 100% opacity line to separate sections. It kills the "high-fidelity" depth we’ve built with surface tiers.