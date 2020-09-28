//get note.id from location hash
const noteId = location.hash.substring(1)
const notes = getSavedNotes()

//call note by id
const note=notes.find(function(note){
    return note.id===noteId
})  

if (note===undefined){
    location.assign('/index.html')
}
//set values from getSaved notes for title and body
document.querySelector('#note-title').value=note.title
document.querySelector('#note-body').value=note.body


//update note.title when user change value in iput
document.querySelector('#note-title').addEventListener('input',function(e){
   note.title=e.target.value
    savedNotes(notes)
})

//update note.body when user changes value from form
document.querySelector('#note-body').addEventListener('input',function(e){
    note.body=e.target.value
    savedNotes(notes)
})

//delete notes and redirect back to index page
document.querySelector('#remove-note').addEventListener('click',function(){
   removeNote(noteId)
   savedNotes(notes)
   location.assign('/index.html')
   
})