// Read existing notes from localStogare
const getSavedNotes=function(){
const notesJSON=localStorage.getItem('notes')

if (notesJSON!==null){
    return JSON.parse(notesJSON)
} else{
    return []
}
}

//save the notes to local storage
const savedNotes=function(notes){localStorage.setItem('notes', JSON.stringify(notes))
    }



//remove note from list
const removeNote=function(id){
    const noteIndex=notes.findIndex(function(note){
        return note.id===id
    })
    if(noteIndex>-1){
        notes.splice(noteIndex,1)
    }

}



//Generate the DOM structure for a note
const generateNoteDOM=function(note){
//create new div 
const noteEl = document.createElement("div");
const textEl=document.createElement('a')
const button= document.createElement('button')
//setup the remove note button before not
button.textContent='X'
noteEl.appendChild(button)
button.addEventListener('click',function(){
    removeNote(note.id)
    savedNotes(notes)
    renderNotes(notes,filters)
    
})

//setup note
        if (note.title.length>0){
            textEl.textContent=note.title
        }else{
            textEl.textContent='unnamed note'
        }   

        //set href - edit.html and hash for each note attribute for texEl
        textEl.setAttribute('href',`/edit.html#${note.id}`)
        noteEl.appendChild(textEl)

        return noteEl
    }


    //render Notes

    //render application notes
const renderNotes=function(notes,filters){
    const filteredNotes= notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('div#notes').innerHTML=''
    filteredNotes.forEach((note)=>{
       const noteEl= generateNoteDOM(note)
    
        document.querySelector('div#notes').appendChild(noteEl);
       
    })

}
