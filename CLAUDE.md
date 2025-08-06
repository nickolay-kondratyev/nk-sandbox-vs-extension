# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Visual Studio Code extension project (`nk-sandbox-vs-extension`) - a sandbox/development extension built using the standard VS Code Extension API. The extension provides a simple "Hello World" command for experimentation and development purposes.

## Architecture

- **Entry Point**: `src/extension.ts` - Contains the main `activate()` and `deactivate()` functions
- **Build System**: Webpack-based bundling with TypeScript compilation
- **Output**: Compiled code goes to `dist/extension.js` (referenced in package.json main field)
- **Extension Manifest**: `package.json` defines the extension metadata, commands, and activation events

### Key Files
- `src/extension.ts`: Main extension logic with command registration
- `package.json`: Extension manifest and npm scripts
- `webpack.config.js`: Webpack configuration for bundling
- `tsconfig.json`: TypeScript compiler settings
- `eslint.config.mjs`: ESLint configuration using modern flat config

## Development Commands

### Building
```bash
npm run compile          # Build with webpack in development mode
npm run watch           # Build and watch for changes
npm run package         # Production build with optimizations
```

### Testing
```bash
npm run compile-tests   # Compile test files to 'out' directory
npm run watch-tests     # Watch and compile tests
npm run pretest         # Run full pipeline: compile tests, compile, lint
npm test               # Run tests using vscode-test
```

### Code Quality
```bash
npm run lint           # Run ESLint on src directory
```

### Development Workflow
```bash
./run.sh              # Compile extension and launch VS Code with extension loaded
```

The `run.sh` script compiles the extension and opens VS Code with the current directory as an extension development path, allowing you to test the extension in a new VS Code window.

## Extension Structure

- **Commands**: Currently registers one command `nk-sandbox-vs-extension.helloWorld`
- **Activation**: No specific activation events defined (activates on any VS Code startup)
- **Architecture Pattern**: Standard VS Code extension structure with webpack bundling

## Testing Framework

Uses VS Code's built-in testing framework with Mocha. Tests are located in `src/test/` and compiled to `out/` directory before execution.