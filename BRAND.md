# BRAND.md — Tangison Technologies

## Design character

Restrained authority. The site communicates competence through precision, not decoration. Dark surfaces, deliberate spacing, sharp edges. Information arrives with purpose. No embellishment without reason.

## Visual idea

A dark workshop where signals are received, processed, and transmitted. The interface is a control surface: every element exists because it serves a measurable purpose. Light text on dark backgrounds is the default. Accent colours appear only when they carry meaning.

## Layout boldness

High. Large type for headlines. Generous negative space. Asymmetric compositions. Zero border-radius. Content leads, not cards. Avoid centred layouts on every section; vary composition while keeping type, spacing, and colour logic coherent.

## Motion intensity

Medium-low. Motion serves hierarchy, continuity, feedback, and spatial change. Never spectacle. Scroll reveals use subtle vertical displacement with opacity shifts. Hover states use colour transitions, not bouncing or scaling. Page transitions are brief opacity and vertical shifts. Duration range: 200ms to 800ms. Easing: cubic-bezier(0.16, 1, 0.3, 1) for reveals, ease-out for interactions. Stagger delays: 50ms to 150ms between sequential items.

### Motion system specification

- Page entry: opacity 0 to 1, translateY 8px to 0, duration 800ms, easing cubic-bezier(0.16, 1, 0.3, 1)
- Section reveals: opacity 0 to 1, translateY 20px to 0, duration 600ms, easing cubic-bezier(0.16, 1, 0.3, 1), triggered by IntersectionObserver
- Hover/focus: colour transition 300ms ease-out, no scale/bounce transforms
- Loading states: subtle shimmer or opacity pulse
- Reduced-motion fallback: all animations replaced by instant state changes (opacity 1, translateY 0). Animation-duration: 0.01ms. Transition-duration: 0.01ms.
- Cleanup: all IntersectionObserver instances disconnected on unmount. All CSS animations respect prefers-reduced-motion.
- Performance budget: no layout-thrashing properties in animation (avoid animating width, height, top, left). Prefer transform and opacity only.
- Primary motion engine: CSS-native (keyframes, transitions, IntersectionObserver). Framer-motion for route transitions and modal overlays. No additional runtime animation library required for this scope.

## Information density

Medium. Headlines are large. Body text is readable at 15px to 17px. Sections have clear visual separation. No walls of text. Each page has at most 4 to 6 distinct content sections. Card grids appear only when items have genuinely different content, not as default layout.

## Typography

- Headings: Cabinet Grotesk (800, 700, 500 weights). Uppercase with generous tracking (0.05em to 0.3em). Size range: 24px to 72px.
- Body: Satoshi (400, 500, 700 weights). Normal case. Size range: 14px to 17px. Line-height: 1.5 to 1.65.
- Labels and metadata: JetBrains Mono (400 weight). Uppercase with extreme tracking (0.15em to 0.3em). Size range: 8px to 12px.
- No Inter, Roboto, Arial, or generic system font.

## Colour roles and tokens

### Dark theme (default)

| Token | Hex | Role |
|-------|-----|------|
| atlantic-black | #111315 | Primary background |
| terminal-black | #0A0B0C | Deepest background |
| steel-shadow | #1C1E22 | Elevated surface |
| skeleton-bone | #F6F4EF | Primary text on dark |
| fog-gray | #D9D7D2 | Secondary text on dark |
| rust-signal | #C56A4A | Primary accent (action, link, emphasis) |
| rust-light | #D4896F | Hover state for rust |
| rust-muted | rgba(197, 106, 74, 0.15) | Background tint for rust |
| signal-teal | #2CB5B4 | Secondary accent (status, proof) |
| signal-teal-light | #3DCCC8 | Hover state for teal |
| signal-teal-muted | rgba(44, 181, 180, 0.12) | Background tint for teal |
| white/30 | rgba(255,255,255,0.3) | Muted text |
| white/15 | rgba(255,255,255,0.15) | Faint text, borders |
| white/06 | rgba(255,255,255,0.06) | Surface borders |

### Light theme (available)

| Token | Hex | Role |
|-------|-----|------|
| warm-white | #FAFAF8 | Primary background |
| warm-gray | #F0EDE8 | Elevated surface, card |
| sand-gray | #E8E5DF | Secondary surface |
| ink | #111315 | Primary text |
| ink-light | #3D3F44 | Secondary text |
| ink-muted | #6B6860 | Muted text |
| rust-signal | #C56A4A | Primary accent |
| signal-teal | #2CB5B4 | Secondary accent |

### Functional colours

| Token | Hex | Role |
|-------|-----|------|
| success | #3D7A5F | Positive states |
| error | #C54444 | Error states |

## Zero border-radius

Every element, component, card, button, input, dialog, and container uses border-radius: 0. This is a core Tangison design-language decision, not an accident. Override shadcn/ui defaults to enforce zero radius.

## Image direction

- No stock photography of staged handshakes, people laughing at laptops, or generic office scenes
- Abstract geometric patterns and subtle gradients as decorative backgrounds
- Tangison logo in SVG or high-quality WebP, never rasterised to blurry PNG
- Icons: Lucide icon set, used for function not decoration
- Subtle background textures: fine grid overlay, gradient orbs at very low opacity

## Recurring motif

The horizontal line. Accent lines (1px) divide sections, underline headings, and mark transitions. Lines are rust-signal coloured at varying opacity. They animate from left to right (scaleX 0 to 1) on section entry.

## Component and spacing rules

- Section padding: 80px to 120px vertical on desktop, 48px to 64px on mobile
- Content max-width: 1200px (home hero can extend wider)
- Grid gaps: 16px to 24px for card grids
- Button height: 44px minimum touch target
- Input height: 44px minimum touch target
- Label-to-input spacing: 8px
- Section-to-section spacing: 80px minimum
- Font-size scale: 8px (metadata) / 10px (labels) / 14-17px (body) / 24-72px (headings)

## Footer credit

"Made by Tangison Studio" appears on every public page footer, linked to https://studio.tangison.com. Visible, accessible, sufficient contrast, same-tab navigation.

## Forbidden patterns

- Interchangeable gradient heroes
- Endless rounded cards
- Glass panels without purpose
- Floating badges and pills everywhere
- Decorative dashboard charts with fake figures
- Generic icon packs used as decoration
- Centred layouts on every section
- Stock photographs of staged handshakes or people laughing at laptops
- Unsupported claims and invented social proof
- Em dashes in copy
- "Revolutionise", "unlock", "next generation", "cutting edge", "seamless", "game changing"
