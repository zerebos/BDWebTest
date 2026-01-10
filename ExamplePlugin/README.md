# ExamplePlugin

A basic example BetterDiscord plugin to demonstrate proper plugin structure and metadata format.

## Overview

This plugin serves as a reference implementation for developers who want to understand:
- The correct BetterDiscord plugin metadata format
- Basic plugin structure and lifecycle methods
- How to organize a plugin repository

## Metadata Format

BetterDiscord plugins require a JSDoc-style comment block at the top of the file with the following fields:

- **@name**: The display name of the plugin
- **@author**: The plugin author's name
- **@description**: A brief description of what the plugin does
- **@version**: The current version number (semantic versioning recommended)
- **@authorId**: Discord user ID of the author (optional but recommended)
- **@authorLink**: Link to author's profile or website (optional)
- **@website**: Plugin's website or repository (optional)
- **@source**: Direct link to the plugin's source code (optional)

## Plugin Structure

A BetterDiscord plugin is a JavaScript class that exports the following methods:

### Lifecycle Methods

- `load()` - Called when the plugin is loaded (before start)
- `start()` - Called when the plugin is enabled
- `stop()` - Called when the plugin is disabled

### Optional Methods

- `onSwitch()` - Called when switching between servers/channels
- `observer(changes)` - Called when DOM mutations occur
- `getSettingsPanel()` - Returns HTML for the plugin settings panel

## Installation

1. Download `ExamplePlugin.plugin.js`
2. Place it in your BetterDiscord plugins folder:
   - Windows: `%AppData%\BetterDiscord\plugins`
   - macOS: `~/Library/Application Support/BetterDiscord/plugins`
   - Linux: `~/.config/BetterDiscord/plugins`
3. Restart Discord or reload plugins (Ctrl+R)
4. Enable the plugin in User Settings > Plugins

## Usage

This is a demonstration plugin that:
- Shows a toast notification when enabled/disabled
- Logs messages to the console
- Demonstrates the basic plugin lifecycle

## Development

To modify this plugin:

1. Edit the plugin file with your preferred code editor
2. Save the changes
3. Reload Discord (Ctrl+R) to see the changes

## BdApi

BetterDiscord provides the `BdApi` global object with useful utilities:

- `BdApi.showToast(message, options)` - Display toast notifications
- `BdApi.alert(title, content)` - Show alert dialogs
- `BdApi.saveData(pluginName, key, data)` - Save persistent data
- `BdApi.loadData(pluginName, key)` - Load persistent data
- `BdApi.injectCSS(id, css)` - Inject custom CSS
- `BdApi.clearCSS(id)` - Remove injected CSS

## Resources

- [BetterDiscord Documentation](https://docs.betterdiscord.app/)
- [BetterDiscord API Reference](https://docs.betterdiscord.app/api/)
- [Plugin Development Guide](https://docs.betterdiscord.app/plugins/)

## License

This example plugin is provided as-is for educational purposes.
