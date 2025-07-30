# My Portfolio

A modern, responsive personal portfolio website built with React.js and Tailwind CSS. This portfolio showcases professional experience, projects, skills, and provides a contact form for potential clients and collaborators.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Project Showcase**: Filterable project gallery with detailed descriptions
- **Skills Visualization**: Interactive skill bars showing proficiency levels
- **Blog Section**: Featured articles and blog posts with newsletter signup
- **Contact Form**: Functional contact form with validation
- **Social Links**: Integration with professional social media profiles

## Sections

1. **Header**: Fixed navigation with smooth scrolling
2. **Hero**: Eye-catching introduction with call-to-action
3. **About Me**: Personal information and professional summary
4. **Education**: Academic background and certifications
5. **Projects**: Portfolio of work with filtering options
6. **Skills**: Technical and soft skills with visual indicators
7. **Blogs**: Articles and insights with newsletter signup
8. **Contact**: Contact form and professional information

## Technologies Used

- **React.js**: Frontend framework
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript (ES6+)**: Modern JavaScript features
- **HTML5**: Semantic markup
- **CSS3**: Advanced styling and animations

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository** (if using git):
   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

The build files will be created in the `build` folder.

## Customization

### Personal Information

Update the following files to customize your portfolio:

- **Personal Details**: Edit `src/components/About.js` to update your name, experience, and personal information
- **Education**: Modify `src/components/Education.js` with your academic background
- **Projects**: Update `src/components/Projects.js` with your actual projects
- **Skills**: Adjust skill levels in `src/components/Skills.js`
- **Contact**: Update contact information in `src/components/Contact.js`

### Styling

The project uses Tailwind CSS for styling. You can customize:

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Typography**: Update font families and sizes
- **Layout**: Adjust spacing and grid systems

### Adding New Sections

To add new sections:

1. Create a new component in `src/components/`
2. Import and add it to `src/App.js`
3. Update the navigation in `src/components/Header.js`

## Project Structure

```
my-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── About.js
│   │   ├── Education.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   │   ├── Blogs.js
│   │   └── Contact.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure custom domain if needed

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect and deploy the React app

### GitHub Pages

1. Add `homepage` field to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name"
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script to `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```
4. Deploy: `npm run deploy`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Happy Coding! 🚀** 