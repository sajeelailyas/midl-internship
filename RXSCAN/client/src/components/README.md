# RXSCAN Components Structure

Yeh file aapko batati hai ki har component kya karta hai aur kahan use hota hai.

## 📁 Components Folder Structure

### 🏠 **Home Page Components** (Main Landing Page)

#### `Hero.jsx` + `Hero.css`
- **Kya hai:** Landing page ka top section (sabse upar wala)
- **Kahan use:** Home page pe sabse pehle dikhta hai
- **Kya dikhata hai:** Main title, description, aur "Start Session" button

#### `ProductCard.jsx` + `ProductCard.css`
- **Kya hai:** Reusable card component jo features dikhane ke liye use hota hai
- **Kahan use:** Home page pe "Built for modern clinical workflows" section me
- **Kya dikhata hai:** Real-time Transcription, Radiology Templates, FHIR Integration cards

#### `PlatformDevices.jsx` + `PlatformDevices.css`
- **Kya hai:** "Available on all your devices" section
- **Kahan use:** Home page pe features ke baad
- **Kya dikhata hai:** Web Dashboard, Mobile App, Desktop Application cards

#### `EnterpriseSecurity.jsx` + `EnterpriseSecurity.css`
- **Kya hai:** Security aur "Save time" sections
- **Kahan use:** Home page pe PlatformDevices ke baad
- **Kya dikhata hai:** Enterprise-grade security features aur time savings info

#### `TimeSavings.jsx` + `TimeSavings.css`
- **Kya hai:** "Dramatic Time Savings" aur "Enhanced Diagnostic Accuracy" sections
- **Kahan use:** Home page pe EnterpriseSecurity ke baad
- **Kya dikhata hai:** Metrics (75% time saved, 99.2% accuracy) aur testimonial

#### `CTA.jsx` + `CTA.css`
- **Kya hai:** Call-to-Action section (button wala section)
- **Kahan use:** Home page pe TimeSavings ke baad
- **Kya dikhata hai:** "Ready to transform your clinical workflow?" with "Request Demo" button

---

### 🧭 **Navigation Components**

#### `Nav.jsx` + `Nav.css`
- **Kya hai:** Top navigation bar (header)
- **Kahan use:** Har page pe top pe (workspace ke alawa)
- **Kya dikhata hai:** Logo, Home, Workspace, About, Products, Contact links

#### `Footer.jsx` + `Footer.css`
- **Kya hai:** Bottom footer
- **Kahan use:** Har page pe bottom pe (workspace ke alawa)
- **Kya dikhata hai:** Copyright, privacy info, navigation links

---

### 📄 **Page Components** (Full Pages)

#### `Workspace.jsx` + `Workspace.css`
- **Kya hai:** Main workspace page (transcription tool)
- **Kahan use:** User "Workspace" pe click kare to
- **Kya dikhata hai:** Transcription interface, recording controls

#### `About.jsx` + `About.css`
- **Kya hai:** About us page
- **Kahan use:** User "About" pe click kare to
- **Kya dikhata hai:** Company mission, values, stats

#### `Contact.jsx` + `Contact.css`
- **Kya hai:** Contact page
- **Kahan use:** User "Contact" pe click kare to
- **Kya dikhata hai:** Contact form, email, phone details

#### `Products.jsx` + `Products.css`
- **Kya hai:** Products page (detailed product info)
- **Kahan use:** User "Products" pe click kare to
- **Kya dikhata hai:** Platform selector, product solutions, features

---

### 🛠️ **Utility Components**

#### `PlaceholderImage.jsx`
- **Kya hai:** Helper component for placeholder images
- **Kahan use:** Hero section me images ke liye
- **Kya dikhata hai:** Temporary placeholder images

---

## 📍 **File Usage Map**

### Home Page Flow (App.jsx me order):
1. `Hero` - Top section
2. Features Section (uses `ProductCard` 3 times)
3. `PlatformDevices` - Devices section
4. `EnterpriseSecurity` - Security section
5. `TimeSavings` - Metrics section
6. `CTA` - Call to action
7. Privacy Section (inline in App.jsx)

### Navigation:
- `Nav` - Top bar (har page pe)
- `Footer` - Bottom bar (har page pe)

### Full Pages:
- `Workspace` - /workspace route
- `About` - /about route
- `Contact` - /contact route
- `Products` - /products route

---

## 🔍 **Quick Reference**

| Component | Type | Location in App |
|-----------|------|-----------------|
| Hero | Section | Home page - Top |
| ProductCard | Reusable | Home page - Features |
| PlatformDevices | Section | Home page - After Features |
| EnterpriseSecurity | Section | Home page - After PlatformDevices |
| TimeSavings | Section | Home page - After EnterpriseSecurity |
| CTA | Section | Home page - After TimeSavings |
| Nav | Layout | All pages - Top |
| Footer | Layout | All pages - Bottom |
| Workspace | Page | /workspace route |
| About | Page | /about route |
| Contact | Page | /contact route |
| Products | Page | /products route |

---

## 💡 **Tips**

- **Section Components:** Home page ke sections (Hero, PlatformDevices, etc.) sirf home page pe dikhte hain
- **Layout Components:** Nav aur Footer har page pe dikhte hain
- **Page Components:** Workspace, About, Contact, Products alag pages hain
- **Reusable Components:** ProductCard ko multiple jagah use kar sakte ho

---

**Note:** Agar koi component delete karna ho ya add karna ho, pehle is README me check karo ki wo kahan use ho raha hai!

