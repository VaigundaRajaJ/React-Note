import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from 'react'
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import ApiRequest from "./ApiRequest";


function App() {

  const API_URL = 'http://localhost:3500/items'

  const [items, setItems] = useState([])

  const [newItem, setnewItem] = useState('')

  const [search, setSearch] = useState('')

  const [isloading, setisLoading] = useState(true)

  const [fetchError, serFetchError] = useState(null)


  useEffect(()=>{
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw Error("Data not received")
        const listItems = await response.json()
        setItems(listItems)
      } catch(err){
           serFetchError(err.message)
      } finally{
          setisLoading(false)
      }
    }
    
    setTimeout(()=>{
      (async ()=> await fetchItems())()

    },2000)

  
  },[])

  const addItem = async (item) => {
    const id = items.length ? items[items.length-1].id+1 : 1
    const addnewItem = {id, checked:false, item}
    const listItems = [...items, addnewItem]
    setItems(listItems)

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(addnewItem)
    }

    const result = await ApiRequest(API_URL,postOptions)
    if(result) serFetchError(result)
    
  }

  const handleCheck = async (id)=>{
    const listItems = items.map((item)=>
       item.id===id ? {...item, checked:!item.checked} : item
    )
    setItems(listItems)
    
    const myitem = listItems.filter((item) => item.id===id)
    console.log(myitem)
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({checked:myitem[0].checked})
    }

    const reqUrl = `${API_URL}/${id}`
    

    const result = await ApiRequest(reqUrl,updateOptions)
    if(result) serFetchError(result)

    
  }

  const handleDelete = async (id)=>{
    const listItems = items.filter((item)=>
       item.id!==id
    )
    setItems(listItems)
    const deleteOptions = { method: 'DELETE' };
    const reqUrl = `${API_URL}/${id}`;
    const result = await ApiRequest(reqUrl, deleteOptions);
    if (result) serFetchError(result);
    
    
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    addItem(newItem)
    setnewItem('')
  }
  
 
  return (
    <div className="flex flex-col h-screen justify-center items-center  mx-w-lg border-8 border-green-500 m-auto ml-24 mr-24">
       <Header title="Raja to do list"/>  
       <AddItem
          newItem={newItem}
          setnewItem={setnewItem}
          handleSubmit = {handleSubmit} 
       />
       <SearchItem
          search={search}
          setSearch={setSearch}
       />
       <main className='w-full border-4 border-red-500 flex flex-col grow justify-center items-center overflow-y-auto'>
          {fetchError && <p>{`Error: ${fetchError}`}</p>}
          {isloading && <p>Loading items....</p>}
          {!isloading && !fetchError && <Content 
              items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
              handleCheck={handleCheck}
              handleDelete={handleDelete}

          />}
        </main>
       <Footer 
       length={items.length}/>
    </div>

  )
}

export default App;
