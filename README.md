# ⏰ Dynamic Neumorphic Clock with Theme Engine

A premium, highly responsive, fluid analog clock application crafted with pure HTML, CSS (Neumorphism UI Paradigm), and Vanilla JavaScript. The core engine dynamically mutates between three distinct aesthetic design patterns every **5 seconds** using a state machine algorithm.

---

## 🎨 Visual Themes Map

1. **Theme 1: Light Minimalist Base**
   - Clean, modern Neumorphic design without explicit numerical configurations. Emphasizes clean UI shadows.
2. **Theme 2: Light Full Detail Dial**
   - Renders absolute coordinate numeric markers (1–12), detailed rotational micro-ticks, and an inset multi-layer embedded sub-dial graphic.
3. **Theme 3: Dark Cybernetic Mode**
   - Shakes up a deep dark mode with neon accents, dynamic layout translation, and structural header branding injection.

---

## ⚡ Key Technical Features

- **Cross-Platform Responsive Engine:** Fully fluid layout scaling between Desktop displays (`380px` layout grid) and Mobile touchscreens (`280px` architecture) without computational misalignment.
- **Dynamic CSS Variable Shifts:** Leveraging high-performance transitions (`all 0.5s ease-in-out`) to morph elements smoothly under hardware acceleration.
- **Algorithmic Clock Tick Generation:** Ticks and dial coordinates are computed runtime inside JavaScript via degree matrix calculations (`rotate(${i * 6}deg)`).
- **Mathematical Hand Alignment:** True trigonometric tracking for `Hour`, `Minute`, and `Second` hands with dynamic floating offset logic based on the user's precise local system time.

---

## 📁 File Structure

```text
├── index.html      # Structural Semantic DOM Skeleton
├── style.css       # Layout Engine, Neumorphic Shadow Matrices & Media Queries
└── script.js       # Core Analytics, Time Updates & Theme Alternation Loop
