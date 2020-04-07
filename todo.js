
// all the initial variables goes here

const addform=document.querySelector('.add')

const list=document.querySelector('.todos')

const search = document.querySelector('.search input')

const li = document.querySelectorAll('li')






// function to store the backup todos in cookies 



const getIndex=()=>{
    return Number(Cookies.get('cookiepos'))

}

let CookiePos = getIndex()


let CookieIndex=0


const AddItem = (string) =>{

    if(CookiePos>CookieIndex){
        CookieIndex=CookiePos
    }

    let CookieCount=`array${CookieIndex}`
    console.log(CookieIndex)

    Cookies.set(CookieCount,string,{ expires: 35 })

   

    CookieIndex++

    Cookies.set('cookiepos',CookieIndex,{ expires: 35 })


   


}



// function to retrive the stored items from the cookies

const RetriveItem = ()=>{

  
    
    if(CookiePos>=0){
        for (let index = 0; index < CookiePos; index++) {
            let CookieQuery= `array${index}`
            
           let CookieString=Cookies.get(CookieQuery)
           let type = typeof CookieString
           console.log(type)

           if(type=='string')
            generateTemplate(CookieString)

           
            
        }
    }


}



// Event listener to  add a new todo to the list 

addform.addEventListener('submit',e=>{
  
    e.preventDefault()

    const todo = addform.add.value.trim()
   

    if(todo.length){
     generateTemplate(todo)
     addform.reset()

     AddItem(todo)
   
    }
    RemoveSearch()


})


// Function to remove items in the todolist based upon the user request through delete button

list.addEventListener('click',e =>{

    


    let target = e.target;
    let li = target.closest('li'); // get reference
    let nodes = Array.from( li.closest('ul').children ); // get array
    let index = nodes.indexOf( li ); 


    RemoveCookie(li.getAttribute('value'))
    

    console.log()
   
   if(e.target.classList.contains('delete'))
{
    e.target.parentElement.remove();
    RemoveSearch()
}

})






// function to generate template string for the list

const generateTemplate= (todo) =>{

const html = `<li class="list-group-item d-flex justify-content-between align-items-center" value = "${todo}" >
<span>${todo}</span>
<i class="far fa-trash-alt delete"></i></li>`;


list.innerHTML+=html;



}



// function that allows us to search for a particular item in the list

search.addEventListener('keyup',(a)=>{

a.preventDefault()

Findstring(search.value)


RemoveAdd(search.value)


})


// function to actually search for the item triggered by the former function


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


// removing the new todo form when search operation is undergoing



const RemoveAdd = (searchlen) => {
addform.style.display='none'
if(searchlen.length==0)
{
    addform.style.display='block'
}
}


// function to remove the search bar when no element is added


const RemoveSearch= ()=>{

    let content = Array.from(document.querySelectorAll('li')).length
    if(content===0){
    search.style.display='none'}
    else
    search.style.display='block'

}







window.onload=function onload(){
  
    RetriveItem()
    RemoveSearch()
}





const RemoveCookie=(attribute)=>{

    const loc = Cookies.get('cookiepos')


for (let index = 0; index <= loc ; index++) {
    let cookie = Cookies.get(`array${index}`)
    if(attribute==cookie)
    Cookies.remove(`array${index}`)
    
}
   
    
    
}




// Cookies.set('amar', 'dsg')
// Cookies.set('amar', 'sdfgdsg')


// var x = Cookies.get('amar')

// console.log(x)


























