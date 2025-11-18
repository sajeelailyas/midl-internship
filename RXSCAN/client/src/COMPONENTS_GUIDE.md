# 🗂️ RXSCAN Project Structure Guide

Yeh guide aapko project ki complete structure samjhane me help karega.

## 📂 Project Folder Structure

```
RXSCAN/
├── client/                    # Frontend React App
│   ├── src/
│   │   ├── components/        # All React Components
│   │   │   ├── Home Page Sections/
│   │   │   │   ├── Hero.jsx              # Top hero section
│   │   │   │   ├── ProductCard.jsx       # Feature cards
│   │   │   │   ├── PlatformDevices.jsx   # Devices section
│   │   │   │   ├── EnterpriseSecurity.jsx # Security section
│   │   │   │   ├── TimeSavings.jsx       # Metrics section
│   │   │   │   └── CTA.jsx               # Call-to-action
│   │   │   │
│   │   │   ├── Layout Components/
│   │   │   │   ├── Nav.jsx               # Top navigation
│   │   │   │   └── Footer.jsx            # Bottom footer
│   │   │   │
│   │   │   ├── Full Pages/
│   │   │   │   ├── Workspace.jsx         # Main app page
│   │   │   │   ├── About.jsx             # About page
│   │   │   │   ├── Contact.jsx           # Contact page
│   │   │   │   └── Products.jsx          # Products page
│   │   │   │
│   │   │   └── Utils/
│   │   │       └── PlaceholderImage.jsx  # Helper component
│   │   │
│   │   ├── App.jsx            # Main app file (routing)
│   │   └── App.css            # Global styles
│   │
│   └── package.json
│
└── server/                    # Backend Express Server
    ├── server.js              # Main server file
    └── package.json
```

---

## 🎯 Component Categories

### 1️⃣ **Home Page Sections** (Landing Page)
Yeh components sirf home page pe dikhte hain:

- **Hero** - Sabse pehle wala section (title, description, buttons)
- **ProductCard** - Feature cards (Real-time Transcription, etc.)
- **PlatformDevices** - "Available on all devices" section
- **EnterpriseSecurity** - Security features section
- **TimeSavings** - Time savings aur accuracy metrics
- **CTA** - "Request Demo" button wala section

### 2️⃣ **Layout Components** (Har Page Pe)
Yeh components har page pe dikhte hain:

- **Nav** - Top navigation bar (logo, menu items)
- **Footer** - Bottom footer (copyright, links)

### 3️⃣ **Full Pages** (Alag Routes)
Yeh complete pages hain jo navigation se open hote hain:

- **Workspace** - Main transcription tool (workspace route)
- **About** - Company info page (about route)
- **Contact** - Contact form page (contact route)
- **Products** - Products detail page (products route)

---

## 🔄 How Pages Work

### App.jsx Structure:
```javascript
// Navigation bar (har page pe)
<Nav />

// Main content (page ke hisab se change hota hai)
<main>
  - Home page: Hero + Features + Sections...
  - Workspace page: Workspace component
  - About page: About component
  - Contact page: Contact component
  - Products page: Products component
</main>

// Footer (har page pe)
<Footer />
```

### Page Routing:
- `currentPage === 'home'` → Home page sections
- `currentPage === 'workspace'` → Workspace component
- `currentPage === 'about'` → About component
- `currentPage === 'contact'` → Contact component
- `currentPage === 'products'` → Products component

---

## 📝 File Naming Convention

- **Component files:** `ComponentName.jsx`
- **Style files:** `ComponentName.css`
- **Always paired:** Har component ka apna CSS file hota hai

Example:
- `Hero.jsx` + `Hero.css`
- `Nav.jsx` + `Nav.css`

---

## 🎨 Styling Structure

- **Component-specific styles:** Har component ka apna CSS file
- **Global styles:** `App.css` me common styles
- **Section styles:** Inline styles ya component CSS me

---

## 🚀 Quick Actions

### Component Add Karna:
1. `components/` folder me nayi file banao: `NewComponent.jsx`
2. Agar styles chahiye to: `NewComponent.css` banao
3. `App.jsx` me import karo: `import NewComponent from './components/NewComponent'`
4. Use karo: `<NewComponent />`

### Component Remove Karna:
1. `App.jsx` se import aur usage hatao
2. Component file delete karo
3. CSS file delete karo (agar hai)

### Component Edit Karna:
1. `components/ComponentName.jsx` me changes karo
2. `components/ComponentName.css` me styles edit karo
3. Save karo - changes automatically reflect honge

---

## 📍 Current Home Page Order

1. **Hero** - Top section
2. **Features Section** - 3 ProductCards (Real-time, Templates, FHIR)
3. **PlatformDevices** - Devices section
4. **EnterpriseSecurity** - Security section
5. **TimeSavings** - Metrics section
6. **CTA** - Call to action
7. **Privacy Section** - Inline in App.jsx

---

## 💡 Pro Tips

1. **Component ko dhoondhna:** `components/` folder me file name se search karo
2. **Kahan use ho raha hai:** `App.jsx` me `Ctrl+F` se component name search karo
3. **Styles edit karna:** Component ke saath wali `.css` file me changes karo
4. **New section add:** `components/` me naya component banao, `App.jsx` me import karo

---

**Happy Coding! 🎉**

