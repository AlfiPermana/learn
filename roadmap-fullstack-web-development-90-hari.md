# 🗺️ Roadmap Belajar Fullstack Web Development (60–90 Hari)
### Dari Nol sampai Siap Kerja/Freelance

---

## 📌 Cara Pakai Roadmap Ini

- **Durasi fleksibel**: 90 hari kalau belajar 2–3 jam/hari, 60 hari kalau belajar 4–5 jam/hari (full-time).
- **Struktur**: 6 Fase → tiap Fase dipecah per minggu → tiap minggu dipecah per hari.
- **Setiap hari** punya: materi, latihan (praktik wajib, bukan cuma nonton), dan target selesai.
- **Setiap ~10-15 hari** ada **Checkpoint Evaluasi** — jangan lanjut kalau checkpoint belum lolos. Skill programming itu bertumpuk (cumulative), fondasi lemah = collapse di tengah jalan.
- **Aturan emas**: 70% praktik, 30% nonton/baca. Kalau nonton tutorial 1 jam, wajib coding ulang tanpa lihat tutorial minimal 1 jam juga.
- Simpan progress Anda di GitHub sejak hari pertama — ini jadi portofolio otomatis.

---

## 🧭 Overview 6 Fase

| Fase | Topik | Hari | Output |
|---|---|---|---|
| 1 | Fondasi Web (HTML, CSS, JS Dasar) | 1–15 | Landing page statis responsif |
| 2 | JavaScript Menengah + Git/GitHub | 16–25 | App interaktif (to-do list, dsb) |
| 3 | Frontend Framework (React) | 26–42 | SPA dengan API eksternal |
| 4 | Backend (Node.js, Express, Database) | 43–62 | REST API lengkap dengan auth |
| 5 | Fullstack Integration + Testing | 63–75 | Aplikasi fullstack terhubung penuh |
| 6 | Deployment, Advanced, Portofolio | 76–90 | 2-3 project live + siap melamar kerja |

---

## FASE 1: Fondasi Web — HTML, CSS, JavaScript Dasar (Hari 1–15)

### Konsep Kunci yang Harus Dipahami
- HTML = struktur/skeleton konten (bukan styling, bukan logic)
- CSS = tampilan visual, layout, responsivitas
- JavaScript = logic, interaktivitas, manipulasi DOM
- Browser merender HTML → CSS → JS secara berurutan (penting untuk paham performa nanti)

### Minggu 1 (Hari 1–7): HTML & CSS Dasar

- **Hari 1**: Instal VS Code + extension (Live Server, Prettier). Pelajari struktur dasar HTML (tag, elemen, atribut). Latihan: buat halaman profil diri sederhana (nama, foto, bio).
- **Hari 2**: Tag semantik (header, nav, section, article, footer), form dasar (input, button, label). Latihan: buat form kontak sederhana.
- **Hari 3**: CSS dasar — selector, box model (margin, border, padding, content), unit (px, %, em, rem). Latihan: styling halaman profil hari 1.
- **Hari 4**: CSS Layout — Flexbox (justify-content, align-items, flex-direction). Latihan: buat navbar horizontal dan card layout dengan flexbox.
- **Hari 5**: CSS Grid dasar. Latihan: buat layout galeri foto 3 kolom pakai grid.
- **Hari 6**: Responsive design — media query, mobile-first approach. Latihan: buat halaman profil hari 1 jadi responsif (mobile & desktop).
- **Hari 7**: **Review + Mini Project**: Buat landing page 1 halaman (hero section, about, service cards, footer) — statis, responsif, tanpa JS.

**Target Mini Minggu 1**: Bisa membuat halaman web statis yang rapi dan responsif dari nol tanpa mencontek struktur orang lain.

### Minggu 2 (Hari 8–15): JavaScript Dasar

- **Hari 8**: Variabel (let, const), tipe data, operator. Latihan: buat kalkulator sederhana di console.
- **Hari 9**: Conditional (if/else, switch), function dasar. Latihan: program cek bilangan ganjil/genap, FizzBuzz.
- **Hari 10**: Array & method dasar (push, pop, map, filter, forEach). Latihan: olah array data (misal daftar nama, filter yang huruf awalnya "A").
- **Hari 11**: Object, loop (for, while). Latihan: buat data produk (array of objects) dan tampilkan pakai loop.
- **Hari 12**: DOM Manipulation — querySelector, addEventListener, innerHTML/textContent. Latihan: buat tombol yang mengubah warna/teks saat diklik.
- **Hari 13**: Event handling lanjutan (form submit, input change). Latihan: buat form validasi sederhana (cek email kosong/tidak).
- **Hari 14**: Gabungkan semua — buat **To-Do List App** (tambah, hapus, tandai selesai) pakai HTML+CSS+JS vanilla.
- **Hari 15**: ✅ **CHECKPOINT EVALUASI #1**

**Checklist Checkpoint #1** (harus bisa TANPA lihat tutorial):
- [ ] Buat halaman HTML dengan struktur semantik dari nol
- [ ] Styling layout pakai Flexbox/Grid tanpa framework
- [ ] Buat responsive design pakai media query
- [ ] Menulis function JS, manipulasi array/object
- [ ] Manipulasi DOM dan event handling (klik, submit)
- [ ] To-Do List app berfungsi penuh (CRUD di sisi client)

Kalau ada yang belum lolos → ulangi topik tersebut 2-3 hari sebelum lanjut Fase 2. **Jangan dipaksakan lanjut.**

### ⚠️ Kesalahan Umum Fase 1
- Cuma nonton tutorial tanpa ngetik ulang kode sendiri (ilusi paham).
- Copy-paste kode tanpa ngerti tiap barisnya ngapain.
- Loncat ke framework (React dll) sebelum JS vanilla kuat — akan sangat kesulitan di Fase 3.
- Mengabaikan responsive design sejak awal (jadi kebiasaan buruk).

### 📚 Sumber Belajar Fase 1
- [MDN Web Docs](https://developer.mozilla.org/id/) — referensi resmi HTML/CSS/JS
- [freeCodeCamp - Responsive Web Design](https://www.freecodecamp.org/learn/2022/responsive-web-design/)
- [The Odin Project - Foundations](https://www.theodinproject.com/)
- [JavaScript.info](https://javascript.info/) — penjelasan JS paling mendalam & gratis
- [Flexbox Froggy](https://flexboxfroggy.com/) & [Grid Garden](https://cssgridgarden.com/) — game untuk latihan CSS layout

---

## FASE 2: JavaScript Menengah + Git/GitHub (Hari 16–25)

### Konsep Kunci
- Asynchronous JavaScript (kenapa JS butuh callback/promise/async-await)
- Version control bukan opsional — wajib untuk kerja profesional
- ES6+ syntax adalah standar industri sekarang

### Minggu 3 (Hari 16–22)

- **Hari 16**: ES6+ syntax — arrow function, template literal, destructuring, spread/rest operator. Latihan: refactor kode To-Do List pakai ES6+.
- **Hari 17**: Git dasar — init, add, commit, status, log, .gitignore. Latihan: push project To-Do List ke GitHub.
- **Hari 18**: Git branching — branch, merge, checkout. Latihan: buat branch baru, tambah fitur, merge ke main.
- **Hari 19**: Asynchronous JS — callback, Promise. Latihan: simulasi loading data pakai setTimeout + Promise.
- **Hari 20**: Async/await + Fetch API. Latihan: ambil data dari public API (misal [JSONPlaceholder](https://jsonplaceholder.typicode.com/)) dan tampilkan di halaman.
- **Hari 21**: Error handling (try/catch), local storage. Latihan: simpan data To-Do List ke localStorage supaya persist saat refresh.
- **Hari 22**: **Mini Project**: Buat **Weather App** — fetch data cuaca dari API publik (misal OpenWeatherMap), tampilkan dinamis, handle error/loading state.

### Minggu 4 (Hari 23–25)

- **Hari 23**: Belajar konsep `this`, scope, closure (topik yang sering bikin bingung tapi penting). Latihan: buat contoh closure sendiri (counter function).
- **Hari 24**: Debugging dengan Chrome DevTools (breakpoint, console methods, network tab). Latihan: sengaja buat bug di project sebelumnya, latihan cari & benerin pakai DevTools.
- **Hari 25**: ✅ **CHECKPOINT EVALUASI #2**

**Checklist Checkpoint #2**:
- [ ] Paham dan bisa pakai Git untuk commit, branch, push ke GitHub
- [ ] Bisa fetch data dari API eksternal dan menampilkannya secara dinamis
- [ ] Paham perbedaan sync vs async, dan kapan pakai async/await
- [ ] Weather App berfungsi dengan error handling yang layak
- [ ] Bisa jelaskan closure dengan bahasa sendiri (bukan hafalan definisi)

### ⚠️ Kesalahan Umum Fase 2
- Commit message asal ("update", "fix") — biasakan commit message jelas sejak awal.
- Takut pakai branch, selalu kerja di `main` — bikin kebiasaan buruk untuk kerja tim.
- Menghindari async/await karena "ribet" — padahal ini fondasi wajib untuk fetch data & backend nanti.

### 📚 Sumber Belajar Fase 2
- [Learn Git Branching](https://learngitbranching.js.org/) — visual, interaktif
- [JavaScript.info - Async](https://javascript.info/async)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) — fake API untuk latihan
- [Git & GitHub for Beginners (freeCodeCamp)](https://www.freecodecamp.org/news/git-and-github-for-beginners/)

---

## FASE 3: Frontend Framework — React (Hari 26–42)

### Konsep Kunci
- Component-based architecture (UI dipecah jadi komponen reusable)
- Unidirectional data flow (props turun, event naik)
- State management dan re-rendering

### Minggu 5 (Hari 26–32)

- **Hari 26**: Kenapa butuh framework? Setup React (Vite). JSX syntax. Latihan: buat komponen sederhana (Header, Footer).
- **Hari 27**: Props dan component composition. Latihan: buat komponen Card yang reusable dengan props berbeda-beda.
- **Hari 28**: useState hook — state dasar. Latihan: buat Counter app, Toggle dark/light mode.
- **Hari 29**: Event handling di React, conditional rendering. Latihan: buat komponen yang menampilkan konten berbeda berdasarkan state.
- **Hari 30**: Rendering list (map + key), form handling terkontrol (controlled input). Latihan: refactor To-Do List versi Fase 1 ke React.
- **Hari 31**: useEffect hook — side effects, dependency array. Latihan: fetch data API di useEffect, tampilkan loading state.
- **Hari 32**: **Mini Project**: Refactor Weather App ke React dengan komponen terpisah (SearchBar, WeatherCard, dll).

### Minggu 6 (Hari 33–39)

- **Hari 33**: React Router — routing multi halaman (SPA). Latihan: buat app dengan 3 halaman (Home, About, Detail).
- **Hari 34**: Lifting state up, props drilling, kapan butuh state management global. Latihan: buat cart sederhana yang state-nya dipakai di beberapa komponen.
- **Hari 35**: Context API untuk global state. Latihan: buat theme switcher (dark/light) pakai Context, bukan props drilling.
- **Hari 36**: Custom hooks. Latihan: buat custom hook `useFetch` untuk reuse logic fetching data.
- **Hari 37**: Styling di React — CSS Modules atau Tailwind CSS (pilih salah satu, disarankan Tailwind karena banyak dipakai industri). Latihan: styling ulang project sebelumnya pakai Tailwind.
- **Hari 38**: Forms lanjutan — validasi form (bisa pakai library ringan seperti react-hook-form). Latihan: buat form registrasi dengan validasi.
- **Hari 39**: **Project Utama Fase 3**: Buat **Movie/Recipe Finder App** — SPA dengan routing, fetch API eksternal (misal TMDB API), search, detail page, styling rapi.

### Minggu 7 (Hari 40–42)

- **Hari 40–41**: Lanjutkan & polish Movie/Recipe Finder App — tambah loading skeleton, error state, responsive design penuh.
- **Hari 42**: ✅ **CHECKPOINT EVALUASI #3**

**Checklist Checkpoint #3**:
- [ ] Paham component, props, state, dan kapan menggunakan masing-masing
- [ ] Bisa pakai useEffect dengan benar (paham dependency array, cleanup function)
- [ ] Bisa membuat routing multi-halaman
- [ ] Bisa mengelola state global sederhana (Context API)
- [ ] Project Movie/Recipe Finder berfungsi penuh, responsif, dan di-push ke GitHub

### ⚠️ Kesalahan Umum Fase 3
- Taruh semua state di satu komponen besar (component "God object") — pecah jadi komponen kecil.
- Lupa dependency array di useEffect → infinite loop atau data tidak update.
- Loncat ke Redux/state management library kompleks padahal Context API/useState sudah cukup untuk project skala kecil-menengah.
- Tidak paham "kenapa" pakai `key` di list rendering — cuma asal isi `index`.

### 📚 Sumber Belajar Fase 3
- [React Official Docs (react.dev)](https://react.dev/) — dokumentasi resmi, sudah sangat bagus untuk pemula
- [The Odin Project - React](https://www.theodinproject.com/paths/full-stack-javascript/courses/react)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TMDB API](https://www.themoviedb.org/documentation/api) — untuk latihan project film

---

## FASE 4: Backend — Node.js, Express, Database (Hari 43–62)

### Konsep Kunci
- Client-server architecture, HTTP request/response cycle
- REST API design (endpoint, method, status code)
- Database relational vs NoSQL, dan kapan pakai yang mana

### Minggu 8 (Hari 43–49): Node.js & Express Dasar

- **Hari 43**: Apa itu Node.js, npm, package.json. Latihan: buat script Node sederhana (baca file, jalankan lewat terminal).
- **Hari 44**: HTTP dasar — method (GET, POST, PUT, DELETE), status code. Setup Express server pertama. Latihan: buat endpoint `GET /` yang return "Hello World".
- **Hari 45**: Routing di Express, req/res object. Latihan: buat beberapa endpoint CRUD dummy (data disimpan di array sementara, belum database).
- **Hari 46**: Middleware — konsep dan cara buat middleware sendiri. Latihan: buat middleware logger sederhana.
- **Hari 47**: Body parsing, handling JSON request. Latihan: endpoint POST yang menerima data dari body.
- **Hari 48**: Error handling di Express, status code yang benar (400, 404, 500 dsb). Latihan: tambah error handling ke semua endpoint sebelumnya.
- **Hari 49**: **Mini Project**: Buat REST API sederhana untuk To-Do List (CRUD lengkap, data masih di memory/array).

### Minggu 9 (Hari 50–56): Database

- **Hari 50**: Konsep database relational (SQL) vs NoSQL. Instal PostgreSQL (atau MySQL) dan MongoDB, kenalan dasar.
- **Hari 51**: SQL dasar — SELECT, INSERT, UPDATE, DELETE, WHERE. Latihan: bikin tabel `users` dan `tasks`, isi data manual.
- **Hari 52**: Relasi database — one-to-many, foreign key, JOIN dasar. Latihan: query gabungan users + tasks.
- **Hari 53**: ORM — kenalan Prisma (atau alternatif seperti Sequelize/Drizzle). Setup Prisma dengan PostgreSQL.
- **Hari 54**: Hubungkan Express API dengan database pakai ORM. Latihan: refactor To-Do List API supaya data tersimpan permanen di database.
- **Hari 55**: Environment variable (.env), keamanan dasar (jangan hardcode credentials). Latihan: pindahkan semua config sensitif ke .env.
- **Hari 56**: **Checkpoint mini**: pastikan REST API To-Do List CRUD lengkap + tersambung database, bisa di-test dengan Postman/Thunder Client.

### Minggu 10 (Hari 57–62): Autentikasi & API Lanjutan

- **Hari 57**: Konsep autentikasi vs otorisasi. Hashing password (bcrypt). Latihan: buat endpoint register dengan password ter-hash.
- **Hari 58**: JWT (JSON Web Token) — konsep dan implementasi login. Latihan: buat endpoint login yang return JWT.
- **Hari 59**: Middleware proteksi route (verifikasi token). Latihan: buat endpoint yang hanya bisa diakses user yang sudah login.
- **Hari 60**: Validasi input di backend (misal pakai Zod atau express-validator). Latihan: tambah validasi ke semua endpoint register/login.
- **Hari 61**: CORS, rate limiting dasar, keamanan API dasar. Latihan: setup CORS dengan benar untuk koneksi ke frontend nanti.
- **Hari 62**: ✅ **CHECKPOINT EVALUASI #4**

**Checklist Checkpoint #4**:
- [ ] Bisa membuat REST API dengan CRUD lengkap dari nol
- [ ] Paham dan bisa implementasi koneksi database dengan ORM
- [ ] Bisa implementasi register/login dengan password hashing + JWT
- [ ] Paham cara melindungi endpoint dengan middleware auth
- [ ] API bisa di-test penuh via Postman/Thunder Client dengan status code yang benar

### ⚠️ Kesalahan Umum Fase 4
- Simpan password dalam bentuk plain text (fatal, jangan pernah).
- Hardcode API key/database credential langsung di kode → selalu pakai `.env` + `.gitignore`.
- Tidak validasi input dari client sama sekali — anggap semua data dari user itu berbahaya sampai terbukti aman.
- Bikin satu file besar berisi semua route/logic (tidak modular) — pisahkan routes, controllers, models sejak awal.

### 📚 Sumber Belajar Fase 4
- [Node.js Official Docs](https://nodejs.org/en/docs)
- [Express.js Official Docs](https://expressjs.com/)
- [Prisma Docs](https://www.prisma.io/docs)
- [freeCodeCamp - Back End Development and APIs](https://www.freecodecamp.org/learn/back-end-development-and-apis/)
- [JWT.io](https://jwt.io/) — untuk paham struktur JWT
- [Postman](https://www.postman.com/) / Thunder Client (extension VS Code) untuk testing API

---

## FASE 5: Fullstack Integration + Testing (Hari 63–75)

### Konsep Kunci
- Menghubungkan frontend (React) dengan backend (Express API) secara penuh
- State management untuk data async (loading, error, success)
- Testing dasar untuk memastikan kode tidak gampang rusak

### Minggu 11 (Hari 63–69)

- **Hari 63**: Rencanakan project fullstack utama Anda (lihat rekomendasi di bawah). Buat wireframe sederhana & rancangan database schema.
- **Hari 64**: Setup struktur project fullstack (folder frontend + backend terpisah, atau monorepo). Setup koneksi frontend ke backend (axios/fetch + base URL).
- **Hari 65**: Implementasi fitur register/login di frontend, simpan token (localStorage atau httpOnly cookie), buat halaman protected route.
- **Hari 66**: Implementasi CRUD utama project di frontend — connect ke API asli (bukan dummy lagi).
- **Hari 67**: Handle loading state, error state, dan optimistic UI di frontend secara konsisten.
- **Hari 68**: State management lanjutan bila perlu (React Query/TanStack Query sangat direkomendasikan untuk data fetching) — refactor fetch manual ke React Query.
- **Hari 69**: Lanjutkan fitur-fitur utama project fullstack Anda.

### Minggu 12 (Hari 70–75)

- **Hari 70**: Pengenalan testing — kenapa penting, jenis testing (unit, integration, e2e). Setup Vitest/Jest dasar.
- **Hari 71**: Unit testing untuk function backend sederhana (misal validasi, utility function).
- **Hari 72**: Testing komponen React dasar pakai React Testing Library.
- **Hari 73–74**: Lanjutkan & polish project fullstack — fokus ke UX (empty state, error message yang jelas, form validasi frontend+backend).
- **Hari 75**: ✅ **CHECKPOINT EVALUASI #5**

**Checklist Checkpoint #5**:
- [ ] Frontend dan backend terhubung penuh (bukan data dummy lagi)
- [ ] Auth flow lengkap dari frontend ke backend (register, login, protected page)
- [ ] Ada minimal beberapa unit test yang jalan
- [ ] UX sudah menghandle loading/error/empty state dengan baik
- [ ] Project sudah punya struktur folder yang rapi dan modular

### 💡 Rekomendasi Project Fullstack Utama (pilih salah satu)
- **Task/Project Management App** (seperti Trello sederhana)
- **Blog Platform** (CRUD artikel, komentar, kategori)
- **E-commerce sederhana** (produk, cart, checkout dummy)
- **Social media mini** (post, like, comment, follow)

### ⚠️ Kesalahan Umum Fase 5
- Simpan JWT di localStorage tanpa mempertimbangkan risiko XSS (untuk belajar oke, tapi pahami trade-off-nya, idealnya httpOnly cookie).
- Tidak menangani race condition/loading state → UI terlihat "patah-patah" atau flicker.
- Menunda testing sampai "nanti" — biasakan menulis test untuk logic penting sejak awal.

### 📚 Sumber Belajar Fase 5
- [TanStack Query Docs](https://tanstack.com/query/latest)
- [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)
- [Vitest Docs](https://vitest.dev/)
- [Full Stack Open (University of Helsinki)](https://fullstackopen.com/en/) — sangat direkomendasikan, gratis, sangat mendalam

---

## FASE 6: Deployment, Advanced Topics & Portofolio (Hari 76–90)

### Minggu 13 (Hari 76–82)

- **Hari 76**: Konsep deployment — hosting frontend vs backend vs database. Kenalan Vercel/Netlify (frontend) dan Railway/Render (backend).
- **Hari 77**: Deploy frontend React ke Vercel/Netlify. Setup environment variable production.
- **Hari 78**: Deploy backend Express ke Railway/Render, hubungkan ke database cloud (Supabase/Neon/Railway Postgres).
- **Hari 79**: Setup domain custom (opsional), HTTPS, dan basic CI/CD (auto-deploy saat push ke GitHub).
- **Hari 80**: Debugging masalah umum deployment (CORS di production, env var yang lupa di-set, dsb).
- **Hari 81**: Pengenalan Docker dasar (opsional tapi sangat bernilai untuk industri). Latihan: containerize backend API sederhana.
- **Hari 82**: Optimasi performa dasar — image optimization, code splitting/lazy loading di React, caching dasar.

### Minggu 14 (Hari 83–87): Advanced Topics (pilih sesuai minat/kebutuhan karir)

- **Hari 83**: TypeScript dasar — kenapa penting di industri, migrasi sebagian kode ke TS.
- **Hari 84**: Next.js pengenalan (SSR/SSG, kenapa banyak dipakai di industri) — opsional tapi sangat direkomendasikan.
- **Hari 85**: WebSocket dasar (untuk fitur realtime seperti chat/notifikasi) — opsional sesuai kebutuhan project.
- **Hari 86**: Clean code principles, code review checklist, cara baca kode orang lain.
- **Hari 87**: Belajar dasar system design sederhana (bagaimana scale aplikasi, kapan butuh caching/queue) — level pengenalan saja.

### Minggu 15 (Hari 88–90): Portofolio & Persiapan Karir

- **Hari 88**: Polish 2-3 project terbaik Anda — README yang jelas (screenshot, cara run, tech stack, live demo link).
- **Hari 89**: Buat portofolio website pribadi (bisa pakai skill React Anda sendiri). Update LinkedIn/GitHub profile.
- **Hari 90**: ✅ **CHECKPOINT FINAL**

**Checklist Checkpoint Final**:
- [ ] Minimal 2-3 project fullstack live di internet (bukan cuma di local)
- [ ] Semua project ada di GitHub dengan README yang profesional
- [ ] Punya portofolio website pribadi
- [ ] Bisa menjelaskan setiap baris kode di project utama tanpa bingung (siap untuk technical interview)
- [ ] Paham dasar deployment dan bisa deploy project baru dari nol secara mandiri

### ⚠️ Kesalahan Umum Fase 6
- Terlalu banyak project setengah jadi, tidak ada yang benar-benar selesai & polished. Lebih baik 2 project matang daripada 6 project asal-asalan.
- Skip bagian README/dokumentasi — recruiter/HRD sering menilai dari situ dulu.
- Belajar terlalu banyak hal baru sekaligus di fase akhir tanpa memperdalam — fokus, jangan FOMO ke semua teknologi baru.

### 📚 Sumber Belajar Fase 6
- [Vercel Docs](https://vercel.com/docs) & [Render Docs](https://render.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Next.js Learn](https://nextjs.org/learn)
- [Roadmap.sh - Fullstack](https://roadmap.sh/full-stack) — referensi visual roadmap industri terkini

---

## 🎯 Strategi Belajar Efektif (Berlaku Sepanjang 90 Hari)

1. **Metode Feynman**: Setelah belajar konsep baru, coba jelaskan ke orang lain (atau tulis sendiri) pakai bahasa sesederhana mungkin. Kalau tidak bisa jelaskan, berarti belum benar-benar paham.
2. **Build, don't just watch**: Rasio ideal 30% belajar teori : 70% praktik langsung.
3. **Spaced repetition untuk konsep sulit**: Konsep seperti closure, async/await, atau JWT — revisit lagi setelah beberapa hari, jangan cuma sekali lewat.
4. **Journaling harian**: Catat 3 hal — apa yang dipelajari, apa yang masih membingungkan, apa yang mau dicoba besok. Ini bikin progress terasa nyata dan membantu evaluasi.
5. **Jangan tutorial hell**: Kalau sudah menonton >2 tutorial untuk topik yang sama tanpa praktik sendiri, STOP — langsung coding dari kebutuhan project, baru cari referensi kalau stuck.
6. **Rubber duck debugging**: Kalau stuck, coba jelaskan masalahnya ke "bebek karet" (atau ke diri sendiri secara verbal) sebelum googling — sering kali solusinya ketemu di proses menjelaskan itu.

---

## 🚫 Kesalahan Umum Lintas-Fase (Yang Paling Sering Menjatuhkan Pemula)

1. **Perfeksionisme di awal** — mencoba bikin project "sempurna" sebelum lanjut topik baru. Selesaikan dulu, sempurnakan belakangan.
2. **Loncat teknologi terlalu cepat** — belum kuat HTML/CSS/JS vanilla tapi sudah buru-buru belajar React lalu Next.js lalu TypeScript sekaligus. Fondasi lemah = terus mentok di pertengahan.
3. **Belajar sendirian tanpa feedback** — usahakan share progress ke komunitas (Discord, forum, atau bahkan ke coach/mentor) untuk dapat feedback dan akuntabilitas.
4. **Tidak pernah membaca error message dengan teliti** — kebanyakan error sudah menjelaskan masalahnya, biasakan baca stack trace pelan-pelan sebelum panik googling.
5. **Menghindari fase testing/deployment karena dianggap "susah"** — padahal ini yang membedakan pemula dan yang siap kerja secara profesional.

---

## ✅ Ringkasan Checkpoint Evaluasi

| Checkpoint | Hari | Fokus Evaluasi |
|---|---|---|
| #1 | 15 | HTML/CSS/JS Dasar + DOM manipulation |
| #2 | 25 | Git, Async JS, Fetch API |
| #3 | 42 | React fundamentals, hooks, routing |
| #4 | 62 | Backend API, database, autentikasi |
| #5 | 75 | Integrasi fullstack, testing |
| Final | 90 | Deployment, portofolio, siap kerja |

---

*Roadmap ini adalah panduan, bukan aturan kaku. Sesuaikan kecepatan dengan kondisi Anda — yang penting konsisten, bukan sempurna. Selamat belajar! 🚀*
