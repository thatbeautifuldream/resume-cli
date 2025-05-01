# Resume CLI

Interactive command-line resume viewer for Milind Kumar Mishra's professional profile.

![Resume CLI Screenshot](https://via.placeholder.com/800x400?text=Resume+CLI+Screenshot)

## Features

- 📑 Beautiful terminal UI for viewing resume data
- 🚀 Fetches live data from GitHub Gist
- 🎨 Syntax highlighting and structured display
- ⌨️ Interactive keyboard controls
- 📄 Print mode for exporting to text

## Installation

```bash
# Clone the repository
git clone https://github.com/thatbeautifuldream/resume-cli.git

# Navigate to the project directory
cd resume-cli

# Install dependencies
npm install

# Build the project
npm run build

# Start the CLI
npm start
```

## Usage

```bash
# Run the interactive resume viewer
resume-cli

# Output resume to a file (no interactive mode)
resume-cli --print > resume.txt

# Show help information
resume-cli --help
```

## Keyboard Controls

- `q` or `Esc` - Exit the application
- `?` - Toggle help dialog

## Data Source

Resume data is fetched from [GitHub Gist](https://gist.github.com/thatbeautifuldream/0d70e38808751c8b7b53167303bd7df5) following the [JSON Resume](https://jsonresume.org/) schema.

## Development

```bash
# Run in development mode with auto-reloading
npm run dev

# In another terminal
node dist/cli.js
```

## License

MIT
