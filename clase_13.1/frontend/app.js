const list = document.getElementById("booksList")



const fetchingBooks = async ( ) => {
    const response = await fetch("http://localhost:1234/db-api-utn/books")
    const responseToJson = await response.json()

    list.innerHTML = ""
    
    responseToJson.data.forEach((book) => {
        const li = document.createElement("li")
        li.textContent = book.title
        list.appendChild(li)
    });
}

fetchingBooks()
