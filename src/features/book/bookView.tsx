import { useSelector } from "react-redux"
import { RootState } from "../../app/store"

const BookView = () => {
  const books = useSelector((state: RootState) => state.book.numberOfBooks)
  return (
    <div>
       <h1>Book</h1>
       <h2>Number of Books: {books}</h2>
       <button>order</button>
       <button>stock</button>
    </div>
  )
}

export default BookView