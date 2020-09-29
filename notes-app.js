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
 notes.push({
     //unique identifier
     id:id,
     //----
     title:'',
     body:''
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

// 1. Setup link href to include hash with id
// 2. Setup the assign call to include hash with id

// //DOM - Document Object Model

// //query and remove
// // const p=document.querySelector('h1')
// // console.log(p)

// //query all and remove
// const ps=document.querySelectorAll('p')
// ps.forEach((item)=>{
    
//     item.textContent='******'

//    //console.log( item.textContent)
    
//     //item.remove()
// })

// // Add a new element
//  const newParagraph=document.createElement('p')
//  newParagraph.textContent='This is a new element from JavaScript'
//  document.querySelector('body').appendChild(newParagraph)



// -- Single--
//p
//#replace
// .item

//-- Multiple --
//p#order
//button.inventory
//h1#title.application
//h1.application#title