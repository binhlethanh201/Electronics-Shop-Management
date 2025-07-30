# React Electronics Shop Management System

This repository contains a modern React electronics shop management application built with React Router for navigation and JSON Server for backend simulation. The app features a complete product catalog experience including product browsing, filtering by categories and brands, detailed product views, and product management operations. It demonstrates React component architecture, state management, and RESTful API integration for an electronics retail platform.

## Prerequisites

- Node.js and npm installed on your system
- A modern web browser (Chrome, Firefox, Edge, Safari, etc.)
- (Optional) A code editor like VS Code, Sublime Text, or Atom for easier code navigation

## Installation

1. **Clone the repository** (if not already downloaded):
   ```sh
   git clone <repository-url>
   cd Electronics-Shop-Management-main
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```

## How to Run

1. **Start the JSON Server** (backend simulation):
   ```sh
   npx json-server --watch database.json --port 9999
   ```

2. **Start the React development server** (in a new terminal):
   ```sh
   npm start
   ```

This will open the app in your default browser at [http://localhost:3000](http://localhost:3000). The page will reload automatically when you make changes to the source code.

**Note**: Make sure both the JSON Server (port 9999) and React development server (port 3000) are running simultaneously for the application to work properly.

## Project Structure

```
Electronics-Shop-Management-main/
├── database.json
├── public/
│   ├── favicon.ico
│   ├── images/
│   │   ├── flying.jpeg
│   │   ├── huaweip30.png
│   │   ├── Hyaluronic.jpg
│   │   ├── infinix.jpg
│   │   ├── iphone9.webp
│   │   ├── iphonex.jpeg
│   │   ├── macbook.jpeg
│   │   ├── oppf19.png
│   │   ├── plant.jpeg
│   │   ├── samsungbook.jpeg
│   │   ├── samsunguniverse9.jpeg
│   │   └── sureface.jpeg
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── detail.jsx
│   │   └── index.jsx
│   ├── App.js
│   └── index.js
├── package.json
├── package-lock.json
└── README.md
```

- **database.json**: Mock database containing products, categories, and brands data for the JSON Server.
- **public/**: Contains static assets and the HTML template.
  - `index.html`: The main HTML file loaded by React.
  - `manifest.json`, `robots.txt`: Standard web app metadata and configuration.
  - `favicon.ico`, `logo192.png`, `logo512.png`: App icons and branding assets.
  - `images/`: Product images for the electronics catalog.
- **src/**: Contains the React source code.
  - `components/`: Reusable React components for different sections of the app.
    - `index.jsx`: Main product listing component with filtering, search, and catalog display.
    - `detail.jsx`: Product detail view with comprehensive product information and management.
  - `App.js`: Main application component with routing and navigation setup.
  - `index.js`: Entry point that renders the React app.
- **package.json**: Project metadata and dependencies including React, React Router, Bootstrap, and JSON Server.
- **README.md**: Project documentation (this file).

## Features

- **Product Catalog**: Browse and display electronics products with images, descriptions, and pricing
- **Category & Brand Filtering**: Filter products by categories (smartphones, laptops, etc.) and brands (Apple, Samsung, etc.)
- **Product Details**: Comprehensive product information including pricing, discounts, ratings, and stock levels
- **Responsive Design**: Modern, responsive interface built with Bootstrap for optimal viewing on all devices
- **Product Management**: View and delete products with confirmation dialogs
- **Price Calculations**: Automatic calculation of discounted prices based on discount percentages
- **Interactive UI**: Hover effects and smooth transitions for enhanced user experience
- **Real-time Updates**: Dynamic data updates with JSON Server backend simulation

## Data Structure

The application manages the following data entities:

- **Products**: Electronics items with title, description, price, discount, rating, stock, brand, category, and image
- **Categories**: Product categorization system (smartphones, laptops, home-decoration, skincare)
- **Brands**: Brand information for product organization (Apple, Samsung, OPPO, Huawei, Microsoft Surface, Infinix)

## Technologies Used

- **React 18.2.0**: Modern React with hooks and functional components
- **React Router DOM 6.13.0**: Client-side routing for single-page application
- **Bootstrap 5.3.3**: CSS framework for responsive design and UI components
- **React Bootstrap 2.10.2**: Bootstrap components built for React
- **JSON Server 0.17.3**: Mock REST API backend for development
- **React Scripts 5.0.1**: Development and build tools

## API Endpoints

The application uses the following JSON Server endpoints:

- `GET /product` - Retrieve all products
- `GET /product/{id}` - Get specific product details
- `DELETE /product/{id}` - Delete a product
- `GET /category` - Get all product categories
- `GET /brand` - Get all product brands

## Features in Detail

### Product Listing (`index.jsx`)
- Displays products in a responsive grid layout
- Category and brand filtering with radio button controls
- Product cards with images, titles, pricing, and discount information
- Hover effects for enhanced user interaction
- Automatic price calculation with discount percentages

### Product Details (`detail.jsx`)
- Comprehensive product information display
- Large product image with detailed specifications
- Original price, discount percentage, and calculated new price
- Product rating and stock information
- Navigation back to product list
- Product deletion functionality with confirmation dialog

## Learn More

- [React Documentation](https://reactjs.org/)
- [React Router Documentation](https://reactrouter.com/)
- [Bootstrap Documentation](https://getbootstrap.com/)
- [React Bootstrap Documentation](https://react-bootstrap.github.io/)
- [JSON Server Documentation](https://github.com/typicode/json-server)
- For questions or contributions, please open an issue or pull request.
