document.addEventListener('DOMContentLoaded', () => {
    console.log("DINO TIME")

    const handleFormSubmit = function(event){
        event.preventDefault()

        const newListItem = document.createElement('li');
        newListItem.textContent = `Name: ${event.target.name.value} 
        Diet: ${event.target.diet.value} 
        Winged: ${event.target.winged.value}  
        Period: ${event.target.period.value}`
        
        const list = document.querySelector('ul');
        list.appendChild(newListItem);

        event.target.name.value = ""
        event.target.diet.value = ""
        event.target.winged.value = ""
        event.target.period.value = ""

    }

    // const handleFormDelete = function(){
    //     let readingList = document.querySelector('ul')
    //     readingList.innerHTML = ""
    // }

const form = document.querySelector('#new-item-form');
form.addEventListener('submit', handleFormSubmit)

// const list = document.querySelector('#delete');
// list.addEventListener('click', handleFormDelete)
})