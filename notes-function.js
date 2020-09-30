// Read existing notes from localStogare


const getSavedNotes=function(){
const notesJSON=localStorage.getItem('notes')

try{
    return notesJSON?JSON.parse(notesJSON):[]
}catch (e){
    return []
}

}
//save the notes to local storage
const savedNotes=function(notes){localStorage.setItem('notes', JSON.stringify(notes))
    }



//remove note from list
const removeNote=function(id){
    const noteIndex=notes.findIndex((note)=>note.id===id)
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
button.addEventListener('click',()=>{
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

    //sorting notes function
    const sortNotes=function(notes,sortBy){
        if(sortBy==='byEdited'){
            return notes.sort(function(a,b){
                if(a.updatedAt>b.updatedAt){
                    return -1
                }
                else if(a.updatedAt<b.updatedAt)
                {
                    return 1
                }else {
                    return 0
                }
            })
        }else if(sortBy==='byCreated'){
            return notes.sort(function(a,b){
                if(a.createdAt<b.createdAt){
                    return 1
                } else if(a.createdAt>b.createdAt){
                    return -1
                }else{
                    return 0
                }
            })
        }else if(sortBy==='alphabetically'){
            return notes.sort(function(a,b){
                if (a.title.toLowerCase()<b.title.toLowerCase()){
                    return -1
                }else if(a.title.toLowerCase()>b.title.toLowerCase()){
                    return 1
                }else {
                    return 0
                }
            })
        }
        
        else {
            return notes
        }
    }


    //render Notes

    //render application notes
const renderNotes=function(notes,filters){
    //call sort notes function
    notes=sortNotes(notes,filters.sortBy)
    const filteredNotes= notes.filter((note)=>{
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('div#notes').innerHTML=''
    filteredNotes.forEach((note)=>{
       const noteEl= generateNoteDOM(note)
    
        document.querySelector('div#notes').appendChild(noteEl);
       
    })

}
