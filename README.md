# What's In My Fridge?

A playful full-stack web application that helps you find recipes based on the ingredients you have at home. Drag and drop pixel-art food items into your virtual fridge, or type in your own ingredients and discover delicious recipes powered by the Spoonacular API!

## Features

- **Interactive UI**: Drag and drop food items into a pixel-art fridge
- **Recipe Finder**: Enter ingredients and get real recipes you can make
- **Fun Design**: Retro pixel-art visuals and playful animations
- **Full Stack**: Built with vanilla JS, HTML/CSS (frontend) and Node.js/Express (backend)
- **Real API Integration**: Fetches recipes from the Spoonacular API

## Demo Screenshots

### 1. Closed Fridge (Start Screen)
![Closed Fridge](client/images/fridge-closed.png)

### 2. Fridge Open with Ingredients Inside
![Open Fridge](client/images/fridge-open.png)

### 3. Recipe Results Popup
![Recipe Results](client/images/recipe-card.png)

## Tech Stack

- Frontend: HTML5, CSS3, Vanilla JavaScript
- Backend: Node.js, Express.js, Cors, Axios
- External API: Spoonacular API

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Spoonacular API key (free at [spoonacular.com](https://spoonacular.com/food-api))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aimanahmedd/whats-in-my-fridge.git
   cd whats-in-my-fridge
   ```

2. **Set up the backend**
   ```bash
   cd server
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the `server/` directory:
   ```env
   SPOONACULAR_API_KEY=your_api_key_here
   PORT=3000
   ```

4. **Start the backend server**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`

5. **Open the frontend**
   - Navigate to the `client/` directory
   - Open `index.html` in your web browser
   - Or serve it using a local server:
     ```bash
     # Using Node.js (if you have http-server installed)
     npx http-server -p 8000
     ```

6. **Access the application**
   - Frontend: `http://localhost:8000` (or whatever port you chose)
   - Backend API: `http://localhost:3000`

## 🔧 API Setup

To use the recipe search functionality, you'll need a Spoonacular API key:

1. Visit [Spoonacular Food API](https://spoonacular.com/food-api)
2. Sign up for a free account
3. Get your API key from the dashboard
4. Add it to your `.env` file as `SPOONACULAR_API_KEY`

## How to Use

1. **Open the fridge**: Click on the fridge door to open it
2. **Add ingredients**: 
   - Drag and drop pixel-art food items into the fridge
   - Or type in your own ingredients
3. **Find recipes**: Click "Find Recipes" to search for dishes you can make
4. **Browse results**: View recipe details, ingredients, and cooking instructions


---

## Inspiration

Made by Aiman Ahmed and inspired by the idea of reducing food waste and helping people cook delicious meals using ingredients they already have!
