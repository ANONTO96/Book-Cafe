

const Book = ({ book }) => {
    const { image, bookName, author, rating, category, tags } = book
    return (
        <div>
            <div className="card bg-base-100 w-80 shadow-xl border-2 lg:w-[350px]">
                <figure className="bg-blue-100 rounded-2xl">
                    <img className="h-[300px] p-3 py-5 lg:p-4 object-contain"
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body h-[200px]">
                    <div className="space-x-3">
                        {
                            tags.map(tag => <button className="btn btn-xs text-green-500">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="text-gray-600">By : {author}</p>
                    <div className="border border-dashed my-2"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="flex items-center">{rating}
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask h-5 mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask h-5 mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask h-5 mask-star-2 bg-orange-400" />
                                
                            </div> </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;