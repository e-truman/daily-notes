const notes = [
    {
        date: "7/15/21",
        note: "I learned how to make my js show in my terminal.",
        timeSpent: 15,
        iFelt: "I have a headache", 
        id: 1,
    },
    {
        date: "7/15/21",
        note: "How to use git hub.",
        date: "7/15/21",
        timeSpent: 90,
        iFelt: "I have a headache", 
        id: 2,
    },
];
//  comment Push a note about today
const noteAboutToday ={
    date: "7/15/21",
    note: "I learned how to push into an array",
    timeSpent: 30,
    iFelt: "I have a headache", 
    id:3,
};

notes.push(noteAboutToday);

// for (const note of notes) {
//     console.log(`Note ${note.id}. Today ${note.note}. I spent ${note.timeSpent} learning it. I felt ${note.iFelt}.`);
// }

// const searchTerm = "I learned how to push into an array"

// comment for loop to Search a word
// for (const note of notes) {
//     if (searchTerm === note.note) {
//         console.log(`you learned ${note.note} on ${note.date}`)

//     }
// };

// comment Function for adding ids

const createNote = (note) => {

    const lastIndex = notes.length -1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId +1

    note.id = idForNewNote

    const newDate = new Date()
    note.date = newDate
    notes.push(note)
    console.log(`${note.id} ${note.date}`)
}

const moreNewerNote ={
    date: "7/16/21",
    note: "How to write a function to add an id",
    timeSpent: 10,
    iFelt: "good", 
};

// Specify object as argument for function
//         |
//         |
//         V
createNote(moreNewerNote);







