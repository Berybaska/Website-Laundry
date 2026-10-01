---
name: Nocturne Precision
colors:
  surface: '#060e3b'
  surface-dim: '#060e3b'
  surface-bright: '#2e3663'
  surface-container-lowest: '#010836'
  surface-container-low: '#0f1743'
  surface-container: '#141b48'
  surface-container-high: '#1f2653'
  surface-container-highest: '#2a315e'
  on-surface: '#dee0ff'
  on-surface-variant: '#ccc6b9'
  inverse-surface: '#dee0ff'
  inverse-on-surface: '#252d59'
  outline: '#959085'
  outline-variant: '#4a473d'
  surface-tint: '#d0c6a7'
  primary: '#ffffff'
  on-primary: '#36301a'
  primary-container: '#ede2c2'
  on-primary-container: '#6b644a'
  inverse-primary: '#655e45'
  secondary: '#b2c5ff'
  on-secondary: '#152e63'
  secondary-container: '#31477e'
  on-secondary-container: '#a1b7f5'
  tertiary: '#ffffff'
  on-tertiary: '#00297a'
  tertiary-container: '#dbe1ff'
  on-tertiary-container: '#365dc8'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ede2c2'
  primary-fixed-dim: '#d0c6a7'
  on-primary-fixed: '#201b07'
  on-primary-fixed-variant: '#4d472f'
  secondary-fixed: '#dae2ff'
  secondary-fixed-dim: '#b2c5ff'
  on-secondary-fixed: '#001848'
  on-secondary-fixed-variant: '#2e457b'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b5c4ff'
  on-tertiary-fixed: '#00174d'
  on-tertiary-fixed-variant: '#053da9'
  background: '#060e3b'
  on-background: '#dee0ff'
  surface-variant: '#2a315e'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: 4rem
    letterSpacing: -0.03em
  display-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: 2.5rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: '0'
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: 1.5rem
    letterSpacing: '0'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.6rem
    letterSpacing: '0'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.4rem
    letterSpacing: '0'
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: 1.2rem
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.6875rem
    fontWeight: '700'
    lineHeight: 0.875rem
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system targets commercial operators, multi-unit facility directors, and enterprise industrial logistics teams. It combines the rigorous operational reliability of modern B2B platforms with the visual luxury of an executive control room.

The aesthetic philosophy fuses **Modern Corporate SaaS** with **Subtle Luminous Glassmorphism**:
- Deep atmospheric grounds establish stability and minimize eye strain in high-density monitoring environments.
- High-contrast warm metallic illumination guides decision-making and marks mission-critical operational thresholds.
- Structure is enforced through disciplined geometric lines, structured micro-surfaces, and clear visual density over playful ornamentation.
- The interface delivers a calm, authoritative, and frictionless command experience.

## Colors

The palette establishes an inverted luminance architecture designed for prolonged tactical usage:

- **Deep Midnight Navy (`#010736`):** The foundational substrate (Root canvas, backdrop layers, and outer app shell).
- **Navy Slate / Surface Tier (`#0D1C42`):** Elevates data tables, inspection panels, machine grids, and module cards above the dark void.
- **Royal Indigo Blue (`#22396F`):** Used for structural boundary strokes, secondary actions, active tabs, and interactive hover planes.
- **Warm Cream / Soft Champagne (`#FCF1D0`):** The primary visual focal point. Used sparingly for high-impact action triggers, metric milestones, real-time status badges, and primary key text elements requiring absolute legibility.
- **Supporting Roles:**
  - *Text Dominance:* Primary text renders in `#FCF1D0` (or `rgba(252, 241, 208, 0.96)`), secondary text in `rgba(252, 241, 208, 0.65)`, and disabled/metadata in `rgba(252, 241, 208, 0.38)`.
  - *System States:* Semantic alerts leverage calibrated tones (Emerald `#2DD4BF`, Amber `#F59E0B`, Rose `#FB7185`) paired with tinted `#0D1C42` backdrops.

## Typography

Plus Jakarta Sans is applied uniformly across the system to maintain modern, crisp, and humanist geometry with operational clarity.

- **Numerics & Operational Data:** High-density telemetry displays, machine telemetry readouts, and revenue figures employ tabular number formatting (`font-variant-numeric: tabular-nums`) to maintain alignment across fluctuating data points.
- **Labels & Micro-copy:** Uppercase styling is reserved exclusively for `label-sm` and `label-md` when rendering machine states, hardware protocols, and metadata headers, coupled with elevated letter-spacing (`+0.04em` to `+0.06em`) for readability at micro scales.

## Layout & Spacing

The architecture operates on an 8pt base grid with a 12-column adaptive system:

- **Desktop (1200px+):** 12 columns, `1.5rem` gutters, `2rem` outer canvas padding. Maximum content boundary capped at `1600px` for ultra-wide command monitors.
- **Tablet (768px - 1199px):** 8 columns, `1rem` gutters, `1.5rem` canvas padding. Data grids compress secondary columns into accordion-style inline drawers.
- **Mobile (<768px):** 4 columns, `0.75rem` gutters, `1rem` canvas margins. Complex tables shift into vertical machine status cards.
- **Component Padding Density:**
  - Tight spatial rhythm (`space-xs` and `space-sm`) governs metric pairs, badge interiors, and sub-action bars.
  - Standard container spacing (`space-md` and `space-lg`) bounds dashboards, telemetry cards, and form blocks.

## Elevation & Depth

Visual hierarchy uses a dual-axis strategy: **Tonal Step Progression** combined with **Low-Contrast Luminous Borders**:

- **Layer 0 (Canvas):** Pure `#010736`. Ground zero for global navigation bars and application scaffolding.
- **Layer 1 (Card & Module Surfaces):** Solid `#0D1C42` combined with a hairline outline (`1px solid rgba(34, 57, 111, 0.45)`).
- **Layer 2 (Floating & Interactive Panels):** Linear background gradient from `#0D1C42` to `#132554`, bounded by a `1px` border of `rgba(34, 57, 111, 0.80)` with an ambient drop-shadow: `0 8px 24px -4px rgba(0, 0, 0, 0.5)`.
- **Layer 3 (Modals & Critical Overlays):** Deep navy base with a refined champagne accent rim: `1px solid rgba(252, 241, 208, 0.25)`, elevated by an ambient glow shadow: `0 20px 40px -8px rgba(0, 0, 0, 0.7)`.

## Shapes

The interface embraces a structured, architectural corner radius (Level 1 - Soft):
- **Base Components:** Inputs, standard buttons, tabs, and table rows use `0.25rem` (4px).
- **Enclosures:** Cards, machine diagnostic monitors, and modal containers use `0.5rem` (8px).
- **Status Pills:** Badges, operational tags, and micro-toggles use full pill rounding to contrast cleanly against rigid rectangular layouts.

## Components

### Buttons
- **Primary:** Solid Warm Cream (`#FCF1D0`) fill with Midnight Navy (`#010736`) text. Bold weight, `0.25rem` radius. On hover: Subtle champagne brightness shift (`#FFFFFF`) with a micro-glow (`0 0 12px rgba(252, 241, 208, 0.3)`).
- **Secondary:** Surface background (`#0D1C42`), border `1px solid #22396F`, text Warm Cream (`#FCF1D0`). Hover elevates surface to `#22396F`.
- **Destructive/Critical:** Tinted crimson background (`rgba(251, 113, 133, 0.1)`), border `1px solid rgba(251, 113, 133, 0.4)`, text `#FB7185`.

### Input Fields & Controls
- **Text Inputs:** Canvas base (`#010736`), perimeter stroke `1px solid #22396F`, text `#FCF1D0`. Placeholder rendered in `rgba(252, 241, 208, 0.3)`. Focus state introduces a crisp champagne focus ring: `0 0 0 1.5px #FCF1D0`.
- **Checkboxes & Radios:** `#010736` base, stroke `1.5px solid #22396F`. Active/Checked state fills with `#FCF1D0` using `#010736` check indicators.

### Cards & Modules
- Structured `#0D1C42` foundation, `1px solid rgba(34, 57, 111, 0.6)` border. Card headers separate content with an internal hairline divider line (`rgba(34, 57, 111, 0.3)`).

### Status Chips & Badges
- Constructed with semi-transparent dark bases (`rgba(13, 28, 66, 0.8)`), wrapped in low-opacity contextual strokes (`1px solid`).
- Operational status indicators: Active/Wash Running (Emerald rim and dot), Paused/Idle (Warm Cream `#FCF1D0`), Maintenance/Error (Rose `#FB7185`).

### Operational Telemetry Display (Domain Specific)
- Cycle timers, load capacity bars, and power monitors render numbers in tabular `display-sm` with `#FCF1D0`.
- Background progress tracks use `#010736` with fill gradients traveling from `#22396F` to `#FCF1D0`.