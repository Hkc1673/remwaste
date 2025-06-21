# Skip Size Selection – React Code Challenge

## 📦 Tech Stack
- React (with TypeScript)
- Tailwind CSS
- Custom Hooks

---

## 🧠 My Approach

This challenge involved improving the “Choose Your Skip Size” step with a focus on clean design, better UX, and scalable frontend structure.

The changes and decisions made are as follows:

### ✅ Step UX Improvements
- The **stepper UI** was simplified to make the current stage more visually clear without extra text clutter.
- Descriptive instructions above the cards were removed to reduce visual noise, since the step itself already indicates the required action.

### ✅ Card Redesign
- Cards were redesigned with a focus on clean visuals, visual hierarchy, and responsive layout.
- Instead of emphasizing negative restrictions like _“Not allowed on road”_, the cards highlight positive attributes such as _“Allowed on road”_, improving user perception.
- Repetitive skip names were removed to avoid redundancy — now the layout is cleaner and easier to scan.
- The **“Select this skip”** button was removed to simplify interaction. The card itself is now clickable, which provides a more intuitive experience.
- A **size guide video** previously shown on each card was moved into a **modal**, allowing users to view it only when needed, saving space and improving focus.

### ✅ Footer Simplification
- The selection summary bar in the footer was removed. Since only one item can be selected at a time, the selected card is already visually emphasized.
- Instead, a better summary experience can be introduced on the next step via a summary card layout.

### ✅ Code & Data Handling
- Skip data is fetched from the provided API endpoint using a **custom hook** (`useSkips`), which simplifies the component logic.
- **Loading and error states** are managed cleanly within the hook, improving the robustness of the UI.

### 🧭 Step Management
- To manage the multi-step flow of the booking process, I implemented a `StepView` component. This component acts as a centralized renderer that dynamically displays the correct view based on the current step in the process.

### Key features of the `StepView` implementation:
- **Centralized View Handling:** All steps are mapped in a single `Record<StepKey, ReactNode>` object, making the flow easier to follow and maintain.
- **Strong Typing:** Step keys are strictly typed using a `StepKey` union, ensuring compile-time safety and preventing invalid step values.
- **Composable Logic:** Each step is decoupled as an isolated component (e.g., `<SelectSkip />`), promoting modularity and better separation of concerns.
- **Flexible Props:** Shared data between steps (like `selectedActionItem`) can be easily passed down to the relevant components.

This approach allows each step to remain clean and focused while the parent `StepView` handles rendering logic, providing a scalable foundation for future additions like validation, transitions, or conditional flows.

---

## 💻 Features
- Modular and reusable components (`SkipCard`, `SkipModal`, `Loading`)
- Selection logic driven by a single `selectedActionItem` state
- Clean mobile and desktop layout (responsive grid)
- Visual feedback for selected cards
- Accessibility and performance conscious design

---

## ▶️ Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Hkc1673/remwaste.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

---

## 📂 Folder Structure
```
/assets
  └── icons
/components
  └── ActionFooter.tsx
  └── Loading.tsx
  └── SelectSkip.tsx
  └── SkipCard.tsx
  └── SkipModal.tsx
  └── StepIndicator.tsx
  └── StepView.tsx
/constant
  └── steps items list
/entitites
  └── Types and interfaces
/services
  └── useSkips.ts

App.tsx
main.tsx
```

---

## 📌 Notes

This project was built as part of a frontend coding task. All changes were made with a focus on:
- Clean code
- Modular structure
- Improved user experience
- Professional presentation aligned with real-world UI expectations
