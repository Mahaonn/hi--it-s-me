# HI-IT-S-ME

## Project Description

HI-IT-S-ME is a modern website created using React, supporting multilingual functionality and providing smooth navigation between pages using React Router. The project includes several pages such as Home, About, Services, Portfolio, and Contact.

## Project Structure

The following is the structure of the project, showing the directories and files included:

```

HI-IT-S-ME/
├── .vscode/
│ └── settings.json
├── node_modules/
├── public/
│ ├── favicon.ico
│ ├── index.html
├── src/
│ ├── assets/
│ │ ├── images/
│ │ │ ├── logo.png
│ │ │ ├── my-photo.jpg
│ │ │ ├── project1.png
│ │ │ ├── project2.png
│ │ │ ├── icons.svg
│ │ ├── fonts/
│ │ │ └── MyFont.woff2
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── Main.jsx
│ │ ├── Footer.jsx
│ │ ├── Menu.jsx
│ │ ├── MobileMenu.jsx
│ ├── css/
│ │ ├── media.css
│ │ └── style.css
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── About.jsx
│ │ ├── Services.jsx
│ │ ├── Portfolio.jsx
│ │ ├── Contact.jsx
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
│ └── i18n.js
├── .gitattributes
├── .gitignore
├── eslint.config.js
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

```

## Installation and Running the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/hi-it-s-me.git
   cd hi-it-s-me
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the project:
   ```bash
   npm run dev
   ```

## Technologies Used

- **React**: A library for building user interfaces.
- **React Router**: A library for managing routing in React applications.
- **Vite**: A tool for fast project build and development.
- **Bootstrap**: A framework for creating responsive and stylish interfaces.
- **i18next**: A library for internationalization and localization.
- **FontAwesome**: A library for using icons in web applications.

## Sprite and Icons

The project uses an SVG sprite for icons, which reduces the number of HTTP requests and improves performance. The sprite is located in the file `src/assets/images/icons.svg`.

### Using Icons

To use icons from the sprite, add the following code to your component:

```jsx
<svg className="icon">
  <use xlinkHref="#icon-name"></use>
</svg>
```

Where `icon-name` is the identifier of the icon in the sprite.

### Using FontAwesome

To use icons from FontAwesome, add the following code to your component:

```jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const MyComponent = () => (
  <div>
    <FontAwesomeIcon icon={faCoffee} />
  </div>
);
```

## Responsive Design

The project is responsive, meaning it is optimized for different devices and screen sizes. Using Bootstrap and media queries in CSS ensures a good appearance on mobile devices, tablets, and desktop computers.

### Media Queries

Media queries are located in the file `src/css/media.css`. They are used to adjust styles for different screen sizes and devices.

## Author

The project is created and maintained by [Evgeniia Kovzikova](https://mywebdevjourney.netlify.app/).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
