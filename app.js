import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import chalk from "chalk";
import { listNotes, addNote, removeNote, getNote, updateNote } from "./notes.js";

const log = console.log;
const _yargs = yargs(hideBin(process.argv));

// Create add command
_yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    addNote(argv.title, argv.body);
  },
});

// Create remove command
_yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    removeNote(argv.title);
  },
});

// Create list command
_yargs.command({
  command: "list",
  describe: "List the note/notes",
  handler() {
    listNotes()
  },
});

// Create read command
_yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type:"string"
    },
  },
  handler(argv) {
    try {
      const note = getNote(argv?.title)
      log(chalk.bold(`${chalk.bgGreen.bold(note.title)}:  ${note.body}`))
    } catch (error) {
      log(chalk.bgRedBright.bold(error.message))
    }
  },
});

// Create update command
_yargs.command({
  command: "update",
  describe: "Update a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    try {
      updateNote(argv.title, argv.body);
    } catch (error) {
      log(chalk.bgRedBright.bold(error.message))
    }
  },
});

_yargs.parse();
