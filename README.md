# 🚀 Personal Portfolio Website

A modern, responsive personal portfolio website built with React and Vite. Perfect for developers, designers, and professionals to showcase their work.

![Portfolio Preview](https://img.shields.io/badge/React-18.0.0-blue) ![Vite](https://img.shields.io/badge/Vite-4.0.0-purple) ![Responsive](https://img.shields.io/badge/Responsive-Yes-green)

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with smooth animations
- **🌓 Theme Toggle**: Switch between light and dark modes
- **📱 Fully Responsive**: Works perfectly on all devices
- **⚡ Fast Performance**: Built with Vite for optimal loading
- **🔧 Easy Customization**: All content editable from one file
- **📧 Contact Form**: Functional contact form with EmailJS integration
- **🎯 SEO Ready**: Proper meta tags and semantic HTML

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/binuri2018/portfolio_tmp.git
   cd portfolio_tmp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎨 Customization Guide

### 📝 Editing Your Content

All your portfolio content is stored in one file: `src/data/portfolioData.js`

#### 1. **Personal Information**
```javascript
hero: {
  name: "Your Name",           // Your full name
  title: "Your Title",         // Your professional title
  description: "Your description", // Brief description about yourself
  profileImage: "/images/profile.jpg", // Your profile photo
}
```

#### 2. **About Section**
```javascript
about: {
  shortBio: "Brief bio about yourself",
  longDescription: "Detailed description of your background and experience"
}
```

#### 3. **Education**
```javascript
education: [
  {
    educationlevel: "Your Degree",
    institution: "Your University",
    year: "2020 - 2024",
    details: "Additional details about your education"
  }
]
```

#### 4. **Skills**
```javascript
skills: {
  technical: ["JavaScript", "React", "Node.js"],
  professional: ["Problem Solving", "Team Collaboration"]
}
```

#### 5. **Projects**
```javascript
projects: [
  {
    title: "Project Name",
    description: "Project description",
    image: "/images/project-image.png",
    tags: ["React", "Node.js"],
    github: "https://github.com/your-username/project"
  }
]
```

#### 6. **Contact Information**
```javascript
contact: {
  email: "your-email@example.com",
  phone: "+1 234 567 8900",
  location: "Your City, Country",
  availableForWork: true,
  responseTime: "24-48 hours",
  workingHours: "Monday - Friday, 9 AM - 6 PM",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username"
}
```

### 🖼️ Adding Images

1. Place your images in the `public/images/` folder
2. Update the image paths in `portfolioData.js`
3. Supported formats: JPG, PNG, GIF, SVG

### 🎨 Customizing Colors

Edit `src/index.css` to change the color scheme:

```css
:root {
  --primary-color: #64ffda;      /* Main accent color */
  --bg-color: #ffffff;           /* Background color */
  --text-color: #333333;         /* Text color */
  --card-bg: #f8f9fa;           /* Card background */
}
```

## 🚀 Deployment via GitHub Pages

### Method 1: Using GitHub Actions (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Create GitHub Actions workflow**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'npm'
         
         - name: Install dependencies
           run: npm ci
         
         - name: Build
           run: npm run build
         
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **Enable GitHub Pages**
   - Go to your repository Settings
   - Navigate to Pages section
   - Select "GitHub Actions" as source
   - Your site will be available at `https://your-username.github.io/your-repo-name`

### Method 2: Manual Deployment

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm install -g gh-pages
   gh-pages -d dist
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch
   - Save

## 📁 Project Structure

```
your-portfolio/
├── public/
│   ├── images/          # Your images
│   └── index.html       # Main HTML file
├── src/
│   ├── components/      # React components
│   ├── data/           # Portfolio data
│   ├── assets/         # Static assets
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── package.json         # Dependencies
└── README.md           # This file
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔧 Configuration

### EmailJS Setup (Optional)

If you want the contact form to work:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Update the configuration in `portfolioData.js`:
   ```javascript
   emailService: {
     enabled: true,
     serviceID: "your_service_id",
     templateID: "your_template_id",
     publicKey: "your_public_key"
   }
   ```

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file in the `public/` folder
2. Set your domain in GitHub Pages settings
3. Configure DNS records with your domain provider

## 📄 License

This project is open source 

## 🆘 Need Help?

- Check the [Issues](https://github.com/binuri2018/portfolio_tmp/issues) section
- Create a new issue for bugs or feature requests
- Review the code comments for technical details

**Happy coding! 🎉**

If you find this portfolio template helpful, please give it a ⭐ star on GitHub!
