# SortifyAgent 📂

> Instantly organize your messy folders — no manual sorting, no installs.

## Description

SortifyAgent is a browser-based file organizer that sorts files from any local folder into categorized subfolders automatically. It uses the `File System Access API` to read and write directly to your file system — no backend, no uploads, no data leaves your machine.

Simply pick a folder, and SortifyAgent moves files into `Images`, `Documents`, `Videos`, `Music`, `Archives`, `Code`, and `Others` — all in real time.

> ⚠️ Designed for **PC/Desktop** only. Requires **Chrome** or **Edge** — Firefox does not support the `File System Access API`.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## ✨ Features / Highlights

- 📂 **Direct File System Access** — Uses the native `showDirectoryPicker()` API to read/write local folders without any uploads.
- 🧠 **Smart Categorization** — Automatically detects file type by extension and routes to the correct subfolder.
- ⚡ **Real-time Processing** — Live terminal-style log shows every file move as it happens.
- 📊 **Progress Tracking** — Progress bar + stats counter for `moved`, `skipped`, and `failed` files.
- 🔒 **100% Local** — No server, no cloud, no data collection. Everything runs in your browser.
- 🎨 **Clean Dark UI** — Minimal, responsive dark interface built with custom CSS.

## 🖼️ Screenshots / Demo

### 🏠 Landing Page
![Landing Page](screenshots/LandingPage.png)
*Folder picker UI with category reference guide.*

### ⚙️ Processing
![Processing](screenshots/Processing.png)
*Live terminal log showing real-time file sorting progress.*

### 📊 Output
![Output](screenshots/Output.png)
*Final stats showing total files moved, skipped, and failed.*

## 🛠️ Tech Stack

- 🖥️ **Frontend:** React
- ⚙️ **Bundler:** Vite
- 🎨 **Styling:** Custom CSS-in-JS
- 🗂️ **API:** File System Access API (Chrome/Edge)

## ⚙️ Setup & Installation

**1.** 📥 Clone the repository
```bash
git clone https://github.com/DeepanshuSharma/SortifyAgent.git
```

**2.** 📂 Navigate to the project
```bash
cd SortifyAgent
```

**3.** 📦 Install dependencies
```bash
npm install
```

**4.** 🚀 Start the application
```bash
npm run dev
```

**5.** 🌐 Open the local URL shown in the terminal — use **Chrome** or **Edge**.

<p align="center">Developed with ❤️ by <a href="https://github.com/DeepanshuSharma">Deepanshu Sharma</a></p>