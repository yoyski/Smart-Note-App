# 🗒️ Smart Note App

<div align="center">

![Smart Note App Banner](https://img.shields.io/badge/Smart_Note-AI_Powered-75B06F?style=for-the-badge)
[![License](https://img.shields.io/badge/License-MIT-36656B?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![AI Powered](https://img.shields.io/badge/AI-Claude_Sonnet_4-DAD887?style=for-the-badge)](https://anthropic.com)

**A modern, AI-powered note-taking application designed for productivity and clarity.**

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack)

</div>

---

## 📸 Screenshots

### Home Dashboard
![Home Page](./client/images/home.jpg)
_Clean, intuitive interface with all your notes at a glance_

### AI-Powered Creation
![AI Generation](./client/images/ai-menu.jpg)
_Generate, improve, or summarize notes with AI assistance_

### Note Editor
![Editor](./client/images/editor.jpg)
_Distraction-free writing environment with AI tools_

### Empty State
![Empty State](./client/images/empty-state.jpg)
_Welcoming interface for new users_

---

## ✨ Features

### 📝 Core Functionality

- **Intuitive Note Management** - Create, read, update, and delete notes with ease
- **Rich Text Editor** - Clean, distraction-free writing environment
- **Smart Organization** - Automatic date tracking and note sorting
- **Responsive Design** - Seamless experience across desktop and mobile devices

### 🤖 AI-Powered Intelligence

- **AI Content Generation** - Create complete notes from simple prompts
- **Smart Improvement** - Enhance clarity, structure, and professionalism automatically
- **Intelligent Summarization** - Condense long notes into concise key points
- **Context-Aware Suggestions** - Get AI assistance tailored to your content

### 💾 Data Management

- **In-Memory Storage** - Fast, session-based note persistence
- **No Data Loss** - Notes saved automatically during your session
- **Quick Access** - Instant load times for all your content

### 🎨 User Experience

- **Modern UI Design** - Clean, professional interface with custom color palette
- **Smooth Animations** - Polished transitions and hover effects
- **Undo Functionality** - Revert changes with a single click
- **Empty State Guidance** - Clear CTAs for new users

---

## 🎯 Demo

### Quick Start Guide

1. **Create Your First Note**
   - Click the `+` button or "Create Note" from empty state
   - Use AI to generate content or write manually

2. **Enhance with AI**
   - Click the ✨ sparkle icon in the editor
   - Choose to improve, summarize, or generate new content

3. **Manage Your Notes**
   - View, edit, or delete notes from the dashboard
   - Use undo to revert changes during editing
     
---

## 🚀 Installation

### Prerequisites

- Node.js 16+ and npm/yarn
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Setup

```bash
# Clone the repository
git clone https://github.com/yoyski/Smart-Note-App.git

# Navigate to project directory
cd Smart-Note-App

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 💻 Usage

### Creating Notes

```javascript
// Manual Creation
1. Click the '+' floating action button
2. Enter your title and content
3. Click 'Save Note'

// AI Generation
1. Click 'Generate with AI' or the ✨ icon
2. Describe what you want in the prompt
3. AI creates a complete note for you
```

### AI Features

**Generate** - Create notes from descriptions

```
Example: "Create a weekly meal plan for a vegetarian diet"
```

**Improve** - Enhance existing content

```
Takes your draft and makes it clearer and more professional
```

**Summarize** - Condense long content

```
Extracts key points from lengthy notes
```

### Keyboard Shortcuts

- `Enter` in AI prompt field - Generate content
- `Undo button` - Revert all changes to original

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=flat-square&logo=vite&logoColor=white)

- **Framework**: React 18  
- **Build Tool**: Vite  
- **Features**: Fast development, HMR, optimized builds

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)

- **Framework**: Node.js + Express  
- **Features**: RESTful API endpoints, server-side logic for notes and AI requests

### Database
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)

- **Database**: MongoDB  
- **Usage**: Persistent storage for notes and user data  

### State Management
![Zustand](https://img.shields.io/badge/Zustand-000000?style=flat-square)

- **Library**: Zustand  
- **Usage**: Global state for notes, AI prompts, and modal states

### AI & LLM Integration
![Groq](https://img.shields.io/badge/Groq-FF4F00?style=flat-square)
![ChatGPT](https://img.shields.io/badge/ChatGPT-412991?style=flat-square&logo=openai&logoColor=white)

- **Models**: Groq AI + ChatGPT  
- **API**: Messages API  
- **Features**: Text generation, content improvement, summarization

### Styling & UI
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide_React-Icons-F56565?style=flat-square)

- **Framework**: Tailwind CSS  
- **Icons**: Lucide React  
- **Custom Palette**:  
  - Primary: `#36656B` (Deep Teal)  
  - Accent: `#75B06F` (Sage Green)  
  - Secondary: `#DAD887` (Soft Yellow)  
  - Background: `#F0F8A4` (Light Cream)

### Deployment & Hosting
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel)
![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=white)

- **Frontend Hosting**: Vercel  
- **Backend Hosting**: Render

---

## 🏗️ Architecture

````
src/
├── components/
├── hooks/
│   └── useFetchNoteById.js
│   └── usePersistedState.js
├── lib/
├── pages/
│   └── CreatePage.js
│   └── HomePage.js
│   └── NoteEditPage.js
│   └── ViewPage.js
├── stores/
├── styles/
└── App.jsx                  # Root component

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# Not required for current implementation
# API key is handled by Claude.ai environment
````

> **Note**: This app uses Claude's built-in API access. No external API keys needed when running in Claude.ai artifacts.

---

## 🎨 Color Palette

| Color       | Hex       | Usage                      |
| ----------- | --------- | -------------------------- |
| Deep Teal   | `#36656B` | Primary text, dark buttons |
| Sage Green  | `#75B06F` | Action buttons, accents    |
| Soft Yellow | `#DAD887` | Create/Edit backgrounds    |
| Light Cream | `#F0F8A4` | Home/Detail backgrounds    |

---

## 🙏 Acknowledgements

### Powered By

- [Groq](https://groq.com/) - AI language model
- [React](https://reactjs.org) - UI framework
- [Lucide Icons](https://lucide.dev) - Beautiful icons
- [Tailwind CSS](https://tailwindcss.com) - Styling framework

### Inspiration

Built with a passion for clean architecture, intuitive design, and the power of AI-assisted productivity.

---

## 📧 Contact

**Project Maintainer**: [@yoyski](https://github.com/yoyski)

**Issues & Support**: [GitHub Issues](https://github.com/yoyski/Smart-Note-App/issues)

---

<div align="center">

**Made with ❤️ and AI**

</div>
