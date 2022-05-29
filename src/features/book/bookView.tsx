import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../app/store"
import { actions as bookActions } from "../book/bookSlice"

const BookView = () => {
  const books = useSelector((state: RootState) => state.book.numberOfBooks)
  const dispatch = useDispatch();
  const onOrderBook = () => dispatch(bookActions.order());
  const onRestockedBook = () => dispatch(bookActions.restocked());
  return (
    <div>
       <h1>Book</h1>
       <h2>Number of Books: {books}</h2>
       <button onClick={onOrderBook}>order</button>
       <button onClick={onRestockedBook}>stock</button>
    </div>
  )
}

export default BookView