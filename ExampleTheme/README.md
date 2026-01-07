# ExampleTheme

A basic example BetterDiscord theme to demonstrate proper theme structure and metadata format.

## Overview

This theme serves as a reference implementation for developers who want to understand:
- The correct BetterDiscord theme metadata format
- Basic CSS structure and customization
- How to organize a theme repository
- Common Discord UI elements and their class names

## Metadata Format

BetterDiscord themes require a JSDoc-style comment block at the top of the CSS file with the following fields:

- **@name**: The display name of the theme
- **@author**: The theme author's name
- **@description**: A brief description of what the theme does
- **@version**: The current version number (semantic versioning recommended)
- **@authorId**: Discord user ID of the author (optional but recommended)
- **@authorLink**: Link to author's profile or website (optional)
- **@website**: Theme's website or repository (optional)
- **@source**: Direct link to the theme's source code (optional)
- **@updateUrl**: URL for automatic updates (optional)

## Theme Structure

A BetterDiscord theme is a CSS file that customizes Discord's appearance. This example demonstrates:

### CSS Variables

Define custom CSS variables in the `:root` selector for easy customization:

```css
:root {
    --example-primary-color: #7289da;
    --example-background-color: #36393f;
    /* ... more variables */
}
```

### Theme Overrides

Override Discord's default theme variables:

```css
.theme-dark {
    --background-primary: var(--example-background-color);
    --background-secondary: #2f3136;
}
```

### Element Customization

Style specific Discord elements using their class names:

- `.channelTextArea-1FufC0` - Chat input area
- `.message-2CShn3` - User messages
- `.button-f2h6uQ` - Buttons
- `.wrapper-3kah-n` - Server icons
- And many more...

### Custom Animations

Add smooth transitions and animations:

```css
@keyframes slideIn {
    from { transform: translateX(-10px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}
```

## Installation

1. Download `ExampleTheme.theme.css`
2. Place it in your BetterDiscord themes folder:
   - Windows: `%AppData%\BetterDiscord\themes`
   - macOS: `~/Library/Application Support/BetterDiscord/themes`
   - Linux: `~/.config/BetterDiscord/themes`
3. Restart Discord or reload themes (Ctrl+R)
4. Enable the theme in User Settings > Themes

## Customization

To customize this theme:

1. Open the theme file in a text editor
2. Modify the CSS variables in the `:root` section:
   ```css
   :root {
       --example-primary-color: #YOUR_COLOR;
       --example-background-color: #YOUR_BACKGROUND;
   }
   ```
3. Save the file
4. Reload Discord (Ctrl+R) to see changes

## Features

This example theme includes:

- **Custom color scheme** - Easily customizable via CSS variables
- **Rounded elements** - Modern rounded corners for UI elements
- **Smooth animations** - Subtle animations for messages and interactions
- **Custom scrollbars** - Styled scrollbars matching the theme
- **Enhanced hover effects** - Visual feedback on interactive elements
- **Custom fonts** - Google Fonts integration example
- **Status customization** - Styled status indicators

## Important Notes

### Class Names Change

Discord frequently updates and changes CSS class names. If the theme breaks after a Discord update:

1. Open Discord DevTools (Ctrl+Shift+I)
2. Inspect the element you want to style
3. Find the new class name
4. Update the theme CSS accordingly

### Performance

- Minimize use of complex selectors
- Use CSS variables for repeated values
- Avoid excessive animations on frequently updated elements

### Compatibility

- This theme is designed for the dark theme
- Light theme compatibility may require additional CSS
- Test across different Discord views (servers, DMs, settings)

## Development Tips

### Finding Class Names

1. Open Discord DevTools (Ctrl+Shift+I)
2. Click the element inspector (top-left icon)
3. Hover over the element you want to style
4. Note the class names in the DevTools panel

### Testing Changes

1. Edit the theme file
2. Save changes
3. Reload Discord (Ctrl+R)
4. Check the result

### Using @import

Import external stylesheets or fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font');
```

## Resources

- [BetterDiscord Documentation](https://docs.betterdiscord.app/)
- [Theme Development Guide](https://docs.betterdiscord.app/themes/)
- [Discord Class Names](https://github.com/mwittrien/BetterDiscordAddons/wiki/Discord-Classes) - Community-maintained list
- [CSS Variables Reference](https://docs.betterdiscord.app/themes/variables/)

## Contributing

Feel free to fork this example and create your own themes based on it!

## License

This example theme is provided as-is for educational purposes.
