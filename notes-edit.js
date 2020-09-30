//get note.id from location hash
const noteId = location.hash.substring(1)
let notes = getSavedNotes()

//call note by id
let note=notes.find((note)=> note.id===noteId)  

if (!note){
    location.assign('/index.html')
}
document.querySelector('#last-edited').textContent='Last edited '+moment(note.updatedAt).fromNow()


//set values from getSaved notes for title and body
document.querySelector('#note-title').value=note.title
document.querySelector('#note-body').value=note.body


//update note.title when user change value in iput
document.querySelector('#note-title').addEventListener('input',(e)=>{
   note.title=e.target.value
   note.updatedAt=moment().valueOf()
   //span to show time ago of updated
   document.querySelector('#last-edited').textContent='Last edited '+moment(note.updatedAt).fromNow()
    savedNotes(notes)
})

//update note.body when user changes value from form
document.querySelector('#note-body').addEventListener('input',(e)=>{
    note.body=e.target.value
    note.updatedAt=moment().valueOf()
       //span to show time ago of updated
    document.querySelector('#last-edited').textContent='Last edited '+moment(note.updatedAt).fromNow()

    savedNotes(notes)
})

//delete notes and redirect back to index page
document.querySelector('#remove-note').addEventListener('click',()=>{
   removeNote(noteId)
   savedNotes(notes)
   location.assign('/index.html')
   
})
//auto update in each tab when title, body changes
window.addEventListener('storage',(e)=>{
       if (e.key==='notes'){
       notes=JSON.parse(e.newValue)
       let note=notes.find(function(note){
        return note.id===noteId
        
    })  
    if (!note){
        location.assign('/index.html')
    }

    //set values from getSaved notes for title and body
    document.querySelector('#note-title').value=note.title
    document.querySelector('#note-body').value=note.body

}   
})



