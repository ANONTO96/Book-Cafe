import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../Utility/AddtoDb";


const BookDetail = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId)

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id )

    const {bookId: currentBookId, image, bookName, author, category, tags, publisher, totalPages, yearOfPublishing, rating, review } = book;

    const handleMarkAsRead = (id) => {
        addToStoredReadList(id);
        addToStoredWishList(id);
    }
    return (
        <div className="lg:flex justify-between items-center mb-3">
            <div>
                <img className="h-[550px] sm:h-[650px] w-[450px] sm:w-[500px] mx-auto p-2 lg:ml-36" src={image} alt="" />
            </div>
            <div className="lg:w-[50%] space-y-2">
                <h1 className="text-3xl md:text-4xl">{bookName}</h1>
                <h3 className="text-gray-500 text-xl">By: {author}</h3>
                <h3 className="font-semibold text-xl">{category}</h3>
                <p className="text-lg"><span className="font-semibold text-lg">Review:</span> {review}</p>
                <h3 className="text-lg font-semibold">Tag: 
                {
                            tags.map((tag, idx) => <button key={idx} className="btn text-green-500">{tag}</button>)
                        }
                </h3>
                <p className="text-gray-500 text-lg">Number of Pages: <span className="text-gray-700">{totalPages}</span></p>
                <p className="text-gray-500 text-lg">Publisher: <span className="text-gray-700">{publisher}</span></p>
                <p className="text-gray-500 text-lg">Year of Publishing: <span className="text-gray-700">{yearOfPublishing}</span></p>
                <p className="text-gray-500 text-lg">Rating: <span className="text-gray-700">{rating}</span></p>
                <div className="flex gap-3">
                    <button onClick={() => handleMarkAsRead(bookId)} className="px-4 py-2 border rounded-lg text-white bg-green-400 hover:bg-green-500">Mark as read</button>
                    <button className="px-4 py-2 border rounded-lg text-white bg-sky-400 hover:bg-sky-500">Add to wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;