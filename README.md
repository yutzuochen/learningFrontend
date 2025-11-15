# Tailwind CSS Learning Project

Welcome! This is a simple, hands-on project to help you learn Tailwind CSS fundamentals.

## What You'll Learn

This example demonstrates the core concepts of Tailwind CSS:

### 1. **Utility-First Approach**
Instead of writing custom CSS, you use pre-built utility classes directly in your HTML:
- `bg-indigo-600` - Sets background color to indigo-600
- `text-white` - Sets text color to white
- `px-4 py-2` - Sets horizontal padding to 1rem and vertical padding to 0.5rem
- `rounded-lg` - Adds large border radius

### 2. **Responsive Design**
Tailwind uses a mobile-first approach with responsive breakpoints:
- **Default (no prefix)**: Applies to all screen sizes
- **`sm:`** - Applies on screens ≥640px
- **`md:`** - Applies on screens ≥768px
- **`lg:`** - Applies on screens ≥1024px
- **`xl:`** - Applies on screens ≥1280px

Example:
```html
<h2 class="text-4xl md:text-6xl">
  <!-- 4xl on mobile, 6xl on medium+ screens -->
</h2>
```

### 3. **Flexbox & Grid**
Easy layouts without writing CSS:
- `flex` - Creates a flex container
- `justify-between` - Spaces items with space between
- `items-center` - Centers items vertically
- `grid grid-cols-1 md:grid-cols-3` - Grid with 1 column on mobile, 3 on medium+

### 4. **Spacing**
Consistent spacing system (1 unit = 0.25rem = 4px):
- `p-4` - Padding: 1rem (16px)
- `m-8` - Margin: 2rem (32px)
- `space-x-4` - Horizontal gap of 1rem between children
- `gap-8` - Grid/flex gap of 2rem

### 5. **Colors**
Built-in color palette with shades from 50-900:
- `bg-gray-50` - Very light gray background
- `text-indigo-600` - Indigo text
- `border-purple-500` - Purple border

### 6. **Interactive States**
Add interactivity with state modifiers:
- `hover:bg-indigo-700` - Changes background on hover
- `focus:ring-2` - Adds ring on focus
- `active:scale-95` - Scales down when clicked

### 7. **Shadows & Effects**
- `shadow-md` - Medium shadow
- `shadow-xl` - Extra large shadow
- `transition` - Smooth transitions
- `rounded-xl` - Extra large border radius

## Project Structure

```
front-tutorial/
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind configuration
├── src/
│   ├── input.css         # Tailwind directives
│   └── output.css        # Compiled CSS (generated)
├── index.html            # Main example page
└── README.md             # This file
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Build Tailwind CSS
```bash
npm run build
```

This compiles `src/input.css` → `src/output.css`

### 3. Open the Page
Open `index.html` in your browser to see the example.

### 4. Development Mode (Auto-rebuild)
```bash
npm run watch
```

This watches for changes and automatically rebuilds the CSS.

## Exploring the Example

The landing page includes:

1. **Navigation Bar** - Responsive nav with logo and links
2. **Hero Section** - Full-width header with gradient background
3. **Features Grid** - 3-column responsive grid of feature cards
4. **Call-to-Action** - Centered CTA section
5. **Footer** - Multi-column footer layout

## Key Tailwind Concepts Demonstrated

### Spacing Utilities
```html
<!-- Padding -->
<div class="p-4">         <!-- padding: 1rem -->
<div class="px-6 py-3">   <!-- padding-x: 1.5rem, padding-y: 0.75rem -->

<!-- Margin -->
<div class="m-8">         <!-- margin: 2rem -->
<div class="mb-4">        <!-- margin-bottom: 1rem -->
```

### Responsive Design
```html
<!-- Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### Flexbox Layout
```html
<!-- Center items horizontally and vertically -->
<div class="flex items-center justify-center">
```

### Colors & Backgrounds
```html
<!-- Background colors -->
<div class="bg-indigo-600">

<!-- Text colors -->
<p class="text-gray-700">

<!-- Gradients -->
<div class="bg-gradient-to-r from-indigo-500 to-purple-600">
```

### Hover Effects
```html
<!-- Changes color and shadow on hover -->
<button class="bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition">
```

### Typography
```html
<!-- Font size -->
<h1 class="text-4xl">      <!-- 2.25rem -->
<h2 class="text-2xl">      <!-- 1.5rem -->

<!-- Font weight -->
<p class="font-bold">      <!-- font-weight: 700 -->
<p class="font-semibold">  <!-- font-weight: 600 -->
```

## Next Steps

1. **Experiment**: Try changing classes in `index.html` and rebuild to see the effects
2. **Add Components**: Create new sections using the patterns you see
3. **Customize Colors**: Modify `tailwind.config.js` to add your own colors
4. **Learn More**: Visit [tailwindcss.com](https://tailwindcss.com) for complete documentation

## Common Tailwind Patterns

### Card Component
```html
<div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
  <h3 class="text-xl font-semibold mb-2">Title</h3>
  <p class="text-gray-600">Description text</p>
</div>
```

### Button
```html
<button class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
  Click Me
</button>
```

### Centered Container
```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Content -->
</div>
```

## Tips for Learning

1. **Start Simple**: Begin with basic utilities like colors, spacing, and typography
2. **Use DevTools**: Inspect elements to see which classes are applied
3. **Read the Docs**: The official Tailwind documentation is excellent
4. **Build Projects**: The best way to learn is by building real things
5. **Use Intellisense**: VS Code with Tailwind CSS IntelliSense extension helps a lot

## Resources

- [Official Documentation](https://tailwindcss.com/docs)
- [Tailwind Play](https://play.tailwindcss.com/) - Online playground
- [Tailwind UI](https://tailwindui.com/) - Premium component library
- [Headless UI](https://headlessui.com/) - Unstyled accessible components

Happy learning!
