# Contributing to Bodensee Ferienzentrum

We welcome contributions to make this vacation rental website even better! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

### Prerequisites
- Node.js 20 or higher
- npm or yarn
- Git
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Development Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
```bash
git clone https://github.com/YOUR_USERNAME/bodensee-ferienzentrum.git
cd bodensee-ferienzentrum
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## 🎯 How to Contribute

### Reporting Issues
- Search existing issues before creating new ones
- Use clear, descriptive titles
- Include steps to reproduce bugs
- Add screenshots for UI issues
- Specify browser/device information

### Suggesting Features
- Check if the feature already exists
- Explain the use case and benefit
- Keep suggestions focused and specific
- Consider mobile-first design principles

### Code Contributions

#### Branch Naming
- `feature/description` - New features
- `bugfix/description` - Bug fixes
- `docs/description` - Documentation updates
- `style/description` - UI/styling improvements

#### Commit Messages
Follow conventional commits format:
```
type(scope): description

feat(accommodations): add image gallery component
fix(contact): resolve form validation error
docs(readme): update deployment instructions
style(header): improve mobile navigation design
```

#### Pull Request Process
1. Create a feature branch from `main`
2. Make your changes with clear commit messages
3. Test your changes thoroughly
4. Update documentation if needed
5. Submit a pull request with:
   - Clear description of changes
   - Screenshots for UI changes
   - Test results
   - Link to related issues

## 📝 Code Guidelines

### TypeScript
- Use strict TypeScript configuration
- Define proper types for all data
- Avoid `any` type - use proper typing
- Use interfaces for object shapes

### React
- Use functional components with hooks
- Implement proper error boundaries
- Add loading states for async operations
- Include accessibility attributes

### Styling
- Follow mobile-first approach
- Use Tailwind CSS utility classes
- Maintain dark/light theme support
- Ensure responsive design on all breakpoints

### German Language
- All user-facing content must be in German
- Use proper German grammar and spelling
- Keep consistent terminology throughout
- Consider Austrian/Swiss German variations if relevant

## 🧪 Testing

### Manual Testing Checklist
- [ ] Mobile responsiveness (320px - 1920px)
- [ ] Dark/light theme toggle
- [ ] Form validation and submission
- [ ] Navigation between all pages
- [ ] Image loading and optimization
- [ ] Accessibility with screen readers

### Browser Testing
Test on major browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design Guidelines

### Color Scheme
- Primary: Lake Blue (#0ea5e9 and variants)
- Secondary: Alpine Green
- Neutrals: Warm grays
- Maintain proper contrast ratios (4.5:1 minimum)

### Typography
- Headers: Playfair Display (serif)
- Body text: Inter (sans-serif)
- Consistent font weights and sizes

### Component Standards
- Reusable components in `/components`
- Props with proper TypeScript interfaces
- Consistent naming conventions
- Include data-testid attributes

## 📱 Mobile-First Development

Always design for mobile first:
1. Start with 320px viewport
2. Progressive enhancement for larger screens
3. Touch-friendly interactive elements (44px minimum)
4. Optimized images and performance

## 🌐 SEO and Performance

### SEO Requirements
- Unique page titles and descriptions
- Proper heading hierarchy (h1, h2, h3)
- Alt text for all images
- Structured data when applicable
- German language meta tags

### Performance Standards
- Core Web Vitals compliance
- Image optimization (WebP format)
- Lazy loading for below-fold content
- Minimal bundle size

## 🚀 Deployment

### Before Submitting
- [ ] Code builds without errors
- [ ] All tests pass (when implemented)
- [ ] No console errors or warnings
- [ ] Performance audit passes
- [ ] Mobile-friendly test passes
- [ ] Accessibility audit passes

## 🔒 Security

### Security Considerations
- Input validation on all forms
- XSS prevention
- Secure handling of user data
- Environment variable protection
- No hardcoded secrets in code

## 📞 Getting Help

- Check existing documentation
- Search closed issues and PRs
- Ask questions in new issues with "question" label
- Be specific about your environment and problem

## 🎉 Recognition

All contributors will be acknowledged in the project. Significant contributions may be highlighted in release notes.

## 📜 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on what's best for the community
- Show empathy towards other contributors

Thank you for contributing to make this project better! 🏔️🌊