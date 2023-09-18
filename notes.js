import { writeFileSync, readFileSync } from "node:fs";
import chalk from "chalk";

const log = console.log;

const loadNotes = () => {
  try {
    const data = readFileSync("notes.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const _notes = loadNotes();

const getNote = (title) => {
  const note = _notes.find((note) => note.title === title);
  if (typeof title === "string" && title?.length > 0 && note?.body) {
    return note;
  } else {
    throw new Error("Not cannot be found..");
  }
};

const listNotes = () => {
  log(chalk.inverse("Your notes"));
  _notes.forEach((note) => {
    log(chalk.bgBlueBright.bold(note.title));
  });
};

const saveNotes = (notes) => {
  const stringfiedNotes = JSON.stringify(notes);
  writeFileSync("notes.json", stringfiedNotes);
};

const addNote = (title, body) => {
  const duplicatedNote = _notes.find(note => note.title === title);

  if (!duplicatedNote?.title) {
    _notes.push({ title, body });
    saveNotes(_notes);
    log(chalk.bgGreenBright.bold("New note added!"));
  } else {
    log(chalk.bgRedBright.bold(`Note title(${title}) has already been taken!`));
  }
};

const removeNote = (title) => {
  const titleExists = _notes.filter((obj) => obj.title === title);
  if (titleExists.length > 0) {
    const newArray = _notes.filter((note) => note.title !== title); // remove the note
    saveNotes(newArray);
    log(chalk.bgBlueBright.bold("The note deleted!"));
  } else {
    log(chalk.bgRedBright.bold(`Note ${title} has not been found.`));
  }
};

const updateNote = (title, updatedBody) => {
  const findNote = _notes.slice().find(note => note?.title === title)
  if(findNote?.title && findNote?.body){ // check wheter we have the note or not
    for (let i = 0; i < _notes.length; i++) {
      if (_notes[i].title === title) {
        _notes[i].body = updatedBody;
        break; // Once updated, exit the loop
      }
    }
    saveNotes(_notes)
    log(chalk.bgCyan.bold('Note updated successfully'));
  } else {
    throw new Error('Note not found with the specified title.')
  }
}

export { getNote, addNote, removeNote, listNotes, updateNote };
