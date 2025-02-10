# p5.js Visualizations Playground

This repository contains various p5.js sketches and visualizations for creative coding experiments.

## Setup

1. Create a new sketch by creating an HTML file in the root directory
2. Include p5.js in your HTML file:
   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.js"></script>
   ```
3. Create your sketch file and link it in your HTML

## Project Structure

- Each visualization should have its own directory with:
  - An HTML file
  - A JavaScript file containing the p5.js sketch
  - Any additional assets (images, sounds, etc.)

## Running Sketches

Open the HTML file in your web browser to view the sketch. For development, you can use a local server to avoid CORS issues:

```bash
# Using Python 3
python -m http.server

# Using Node.js
npx serve
```

## Resources

- [p5.js Reference](https://p5js.org/reference/)
- [p5.js Examples](https://p5js.org/examples/)
- [p5.js Web Editor](https://editor.p5js.org/) 