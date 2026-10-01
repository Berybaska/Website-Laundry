---
name: CleanWave Laundry OS
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3f4850'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#707881'
  outline-variant: '#bfc7d2'
  surface-tint: '#006398'
  primary: '#006194'
  on-primary: '#ffffff'
  primary-container: '#007bb9'
  on-primary-container: '#fdfcff'
  inverse-primary: '#93ccff'
  secondary: '#4b41e1'
  on-secondary: '#ffffff'
  secondary-container: '#645efb'
  on-secondary-container: '#fffbff'
  tertiary: '#545c72'
  on-tertiary: '#ffffff'
  tertiary-container: '#6c748b'
  on-tertiary-container: '#fefcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#93ccff'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#004b73'
  secondary-fixed: '#e2dfff'
  secondary-fixed-dim: '#c3c0ff'
  on-secondary-fixed: '#0f0069'
  on-secondary-fixed-variant: '#3323cc'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.03em
  metric-currency:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.25rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2rem
  space-xxs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
---

## Brand & Style
The design system establishes a high-craft, operational SaaS and Point of Sale (POS) interface tailored for modern multi-branch laundry enterprises. The brand personality balances pristine hygiene, industrial efficiency, and technical precision: clean, authoritative, kinetic, and dependable. 

Rooted in a refined **Corporate / Modern Utilitarian** movement, the visual aesthetic avoids decorative clutter in favor of high information density, instant visual feedback, and tactile operational rhythm. The emotional response evoked should be total command over operations, effortless flow under high foot-traffic pressure, and spotless reliability across cashiers, operational staff, and multi-branch owners.

## Colors
The color architecture reinforces water clarity, operational status immediacy, and dense transactional contrast.

- **Primary (`#0284c7`)**: Pure Ocean Cyan/Teal evokes sterile freshness, water velocity, and core brand anchors. Used for active navigation tabs, major checkout flows, and key system state indicators.
- **Secondary (`#4f46e5`)**: Deep Electric Indigo provides cognitive separation for high-impact analytical actions, executive metrics, automated POS triggers, and primary conversion workflows.
- **Neutral Canvas (`#f8fafc` to `#0f172a`)**: Slate foundations ensure eye comfort over 12-hour shifts. Backgrounds use crisp `#f8fafc`, panel cards use `#ffffff`, subtle structural dividers use `#e2e8f0`, and high-contrast typography utilizes `#0f172a` (headers) down to `#64748b` (metadata).
- **Domain Semantic States**:
  - `Emerald (#10b981)`: Selesai / Lunas / Siap Diambil.
  - `Amber (#f59e0b)`: Dalam Antrean / Sedang Dicuci / Dikeringkan / Diproses.
  - `Rose (#ef4444)`: Belum Lunas / Rusak / Urgent / Low Stock alert.
  - `Violet (#8b5cf6)`: Kurir Antar-Jemput / Logistik Multi-Cabang.

## Typography
The system employs **Plus Jakarta Sans** for headlines and high-level branch/counter wayfinding, giving the platform a modern, crisp architectural structure. **Inter** powers data tables, operational forms, order queues, and receipt terminals for legibility at compact scales.

All financial and numeric displays (Indonesian Rupiah `Rp`, weight tracking in `kg`, and machine timers) must enforce monospace/tabular numerical figures (`font-variant-numeric: tabular-nums; font-feature-settings: 'tnum' 1, 'cv05' 1`) to eliminate character jitter during rapid tallying, scale sync, and inventory reconciliation.

## Layout & Spacing
The layout implements a rigid 12-column adaptive fluid grid designed for touch-screen POS terminals, tablets, and wide multi-branch dashboards:

- **Desktop & POS Terminals (1280px+)**: Split dual-pane workspace. The left 7-8 columns manage service catalogs, laundry rack allocation, washing batch timelines, and machine states. The right 4-5 columns are anchored to the persistent cart, scale stream, quick tender keypad, and order ticket preview.
- **Tablet Terminals (768px - 1024px)**: Collapsible sidebar navigation, sliding receipt drawer, and compact 3-column service grid with 44px minimum tap targets.
- **Mobile Handheld / Courier (375px - 767px)**: Single column feed prioritized for delivery dispatch, customer drop-off signatures, and barcode camera scanning with a fixed bottom action dock.

Layout density is tuned to `compact` for register efficiency, relying strictly on standardized spacing tokens to prevent layout shifts.

## Elevation & Depth
Depth is built using **tonal layering with crisp low-contrast outlines and micro-ambient shadows**, rejecting deep blurs that obscure dense operational data.

- **Level 0 (Canvas Base)**: `#f8fafc`. Background surface.
- **Level 1 (Card & Module Deck)**: `#ffffff`, enclosed with a 1px border (`#e2e8f0`) and subtle diffuse shadow (`0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.03)`).
- **Level 2 (Dropdowns, Popovers, Active Ticket)**: `#ffffff`, border `#cbd5e1`, elevation shadow (`0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04)`).
- **Level 3 (Modal Dialogs, Quick Payment Pad)**: `#ffffff`, bordered `#94a3b8`, high-focus drop shadow (`0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.06)`).
- **Active Focus Ring**: `0 0 0 2px #ffffff, 0 0 0 4px #0284c7` for instant visual confirmation across physical keyboards, touch targets, and hardware barcode inputs.

## Shapes
The system uses **Rounded (Value: 2)** geometry:
- Base elements (buttons, inputs, status badges) utilize `rounded-md` (0.375rem / 6px) to `rounded-lg` (0.5rem / 8px) to preserve edge definition and maximum data payload.
- Structural cards, service tiles, and receipt wrappers use `rounded-xl` (0.75rem to 1rem / 12px to 16px) for a modern, friendly posture.
- Filter chips, status tags, and machine cycle pills use full rounded caps (`rounded-full`) to immediately signal interactive or categorized states.

## Components

### Buttons
- **Primary Action (Process Wash / Bayar)**: Solid `#0284c7` background, white bold label, subtle inset bevel shadow, active scale down (`0.98`), hover `#0369a1`.
- **Secondary (Tahan / Cetak Struk)**: Surface white, 1px border `#cbd5e1`, text `#334155`, hover background `#f1f5f9`.
- **Accent High-Impact (Pelunasan Express)**: Solid `#4f46e5`, white label, hover `#4338ca`.
- **Destructive (Batal / Retur)**: Soft tinted `#fef2f2`, border `#fecaca`, text `#ef4444`, hover background `#fee2e2`.

### Inputs & Barcode Listeners
- **Standard Field**: 40px height (48px for POS touch mode), 1px solid `#cbd5e1`, surface `#ffffff`, text `#0f172a`.
- **Continuous Scanner Input**: Highlighted with an indicator badge (icon: Barcode / QR), persistent listening indicator (cyan pulse ring), automatically clears upon successful checksum detection.
- **Segmented Weight / Unit Toggle**: Compact toggle group (`Kg`, `Pcs`, `Meter`, `Sepatu`), active segment `#0284c7` with white text.

### Status Pills & Stage Tags
- Small (24px height), medium tracking, uppercase weight (600), pill-shaped:
  - *Selesai / Siap Diambil*: `#ecfdf5` background, `#047857` text, `#a7f3d0` border.
  - *Sedang Dicuci / Mesin*: `#fffbeb` background, `#b45309` text, `#fde68a` border, with spinning wash indicator dot.
  - *Belum Lunas*: `#fef2f2` background, `#b91c1c` text, `#fecaca` border.
  - *Kurir Pickup/Delivery*: `#f5f3ff` background, `#6d28d9` text, `#ddd6fe` border.

### POS Ticket & Service Cards
- Quick-tap product cards with dual-line display: Large service name (`Cuci Komplit Reguler`), bold tabular price (`Rp 10.000/kg`), and micro duration tag (`2 Hari`).
- Selected ticket state features a solid 2px left border accent in `#0284c7` and a soft cyan background tint (`#f0f9ff`).
- Touch-friendly numeric keypad embedded in payment modules with 56px minimum touch targets and haptic visual bounce.