import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dubai</h1>
          <h2>146 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Italy</h1>
          <h2>333 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Singapore</h1>
          <h2>435 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
