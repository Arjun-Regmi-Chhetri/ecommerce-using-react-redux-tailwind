# React Redux E-commerce Store | Modern Shopping Cart Solution


A fully-featured e-commerce platform built with React 18, Redux Toolkit, and Tailwind CSS. This high-performance online store delivers a seamless shopping experience with real-time filtering, advanced search, responsive design, and persistent cart management.

## Features

- 🛍️ Product browsing with grid and list views
- 🔍 Advanced filtering by category and price range 
- 🔎 Product search functionality
- 🛒 Shopping cart with quantity management
- 💳 Checkout process
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- 🔄 State persistence with Redux Persist

## Tech Stack

- React 18
- Redux Toolkit
- React Router
- Tailwind CSS
- Material UI Icons
- Axios
- Immer
- Redux Persist
- Vite

## Getting Started

1. Clone the repository:
```sh
git clone <repository-url>
```

2. Install the dependencies:
```sh
npm install
```

3. Create a `.env` file in the root directory and add the following environment variables:
```sh
REACT_APP_API_URL=https://fakestoreapi.com
```

4. Start the development server:
```sh
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## Project Structure

```sh
src/
├── components/      # Reusable UI components
│   ├── BreadCrumb/
│   ├── cart/
│   ├── Filter/
│   ├── Hero/
│   ├── Product/
│   ├── Service/
│   └── sort/
├── pages/          # Route pages
├── state/          # Redux state management
│   ├── actions/
│   ├── reducers/
│   └── store.js
├── assets/         # Static assets
├── config.jsx      # App configuration
└── constant/       # Constants and data
```


## Features in Detail

### Product Management
- Grid and list view options
- Product filtering by category
- Price range filtering
- Product search
- Product ratings display
- Product details page

### Shopping Cart

- Add/remove products
- Quantity management
- Cart persistence
- Checkout process
- Order summary

### UI/UX

- Responsive design
- Modern interface
- Loading states
- Error handling
- Breadcrumb navigation
- Featured products carousel


## License

MIT License

Copyright (c) 2024 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) - For providing product data and API endpoints
- [Material UI Icons](https://mui.com/material-ui/material-icons/) - For beautiful icons and components
- [Redux Team](https://redux.js.org/) - For the amazing state management library
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [React Community](https://reactjs.org/) - For the incredible frontend library
- [Vite](https://vitejs.dev/) - For the lightning-fast build tool

---

Made with ❤️ by [ Arjun Regmi Chhetri](https://github.com/Arjun-Regmi-Chhetri)
