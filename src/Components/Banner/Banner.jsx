import img from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-white border-2 border-gray-300 rounded-xl p-20">
  <div className="hero-content flex-col md:flex-row-reverse">
    <img
      src={img}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl lg:text-5xl font-bold my-5">Books to freshen up your bookshelf</h1>
      <button className="btn bg-green-400 text-white font-semibold text-base">View The List</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;