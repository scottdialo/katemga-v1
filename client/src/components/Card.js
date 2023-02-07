import { Link } from "react-router-dom";

// import { isAuth } from "./RealEstate";

function Card({ data, pageName }, { isAuth }) {
  return (
    <div className="container">
      <div className="row g-4 ">
        {data?.map((post) => {
          console.log(post);
          return (
            <div key={post._id} className="col-12 col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img
                  src={post?.pictureUrl[0]}
                  className="bd-placeholder-img card-img-top"
                  alt={post.title}
                />
                <div className="card-body">
                  <h4 className="card-text">{post.title}</h4>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link
                        className="btn btn-sm btn-outline-secondary"
                        to={`/${pageName}/${post._id}`}
                      >
                        View Listing
                      </Link>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Price ${parseInt(post.price).toLocaleString()}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
