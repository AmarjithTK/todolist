const addform=document.querySelector('.add')

const list=document.querySelector('.todos')

const search = document.querySelector('.search input')




addform.addEventListener('submit',e=>{
    e.preventDefault();

    const todo= addform.add.value.trim();
    console.log(todo)

    if(todo.length){
     generateTemplate(todo);
     console.log(todo.length)
     addform.reset()
    }


})


list.addEventListener('click',e =>{
   if(e.target.classList.contains('delete'))
{
    e.target.parentElement.remove();
}
})




const generateTemplate= todo =>{

const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
<span>${todo}</span>
<i class="far fa-trash-alt delete"></i></li>`;


list.innerHTML+=html;


}

search.addEventListener('keyup',(a)=>{

a.preventDefault()

Findstring(search.value)


})



const Findstring= string =>{
    Array.from(list.children)
        .filter (todo=>!todo.textContent.includes(string))
        .forEach(todo =>{
            todo.classList.add('filtered')
        })

        Array.from(list.children)
        .filter (todo=> todo.textContent.includes(string))
        .forEach(todo =>{
            todo.classList.remove('filtered')
        })


           
        
}

var y=[5,6,7]

Cookies.set('amar', y)

var x = Cookies.get('amar')


console.log(x)
























