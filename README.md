# Project : Notes App
  Project aims to create a Notes App with node.js. In this app, Users can able to create, read, update, delete and list their notes by using nodejs cli.
## Initialize the project

```bash
npm install
```

## Commands to create, read, update, delete and list your notes.

### Create a note

```bash
node app.js add --title="your note's title" --body="your note's content"
```

### Read a note by its title

```bash
node app.js read --title="your note's title"
```

### List out all notes you have

```bash
node app.js list
```

### Remove a note by its title

```bash
node app.js remove --title="your note's title"
```

### Update the note by its title

```bash
node app.js update --title="your note's title" --body="your updated note's content here."
```

## Acknowledgements
- FS module of nodejs
- Working with CLI arguments
- Usage of Core, internal and 3rd party modules of nodejs


## Used Libraries
- [Yargs](https://www.npmjs.com/package/yargs)

- [Chalk](https://www.npmjs.com/package/chalk)
