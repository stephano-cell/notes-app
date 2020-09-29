let notes = getSavedNotes()
const filters={
    searchText:''
}
//render notes input
document.querySelector('input#search-text').addEventListener('input',function(e){
    filters.searchText=e.target.value
    renderNotes(notes,filters)
})

renderNotes(notes,filters)

document.getElementById('create-note').addEventListener('click',function(e){
    const id=uuidv4()
    //time stamp Unix time number
    const timestamp=moment().valueOf()
 notes.push({
     //unique identifier
     id:id,
     //----
     title:'',
     body:'',
     createdAt:timestamp,
     updatedAt:timestamp
 })

 savedNotes(notes)
 renderNotes(notes,filters)

 //asign hash

    location.assign(`/edit.html#${id}`)

  
})
document.querySelector('#filter-by').addEventListener('change',function(e){
    console.log(e.target.value)
})

//auto update in each tab when title, body changes
window.addEventListener('storage',function(e){
   
    if (e.key==='notes'){
    notes=JSON.parse(e.newValue)
   renderNotes(notes,filters)
    }
})

// 1. Add createdAt and updatedAt to the new notes (store timestamp)
// 2. Update updatedAt when someone edits a title or body
// 3. Delete all old notes before testing