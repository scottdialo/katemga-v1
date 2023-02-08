import { deleteDoc, doc } from "@firebase/firestore";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase-config";

function Card({ data, pageName }, { isAuth }) {
  //delete post function
  const deletePost = async (_id) => {
    const postDoc = doc(db, "cars", _id);
    await deleteDoc(postDoc);
  };

  return (
    <div className="container ">
      <div className="row g-4 grid-box">
        {data?.map((post) => {
          //console.log(post);

          return (
            <div key={post._id} className="">
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
                <div className="deletePost">
                  {isAuth && post.author.id === auth.currentUser.uid && (
                    <button
                      className="deletePost-btn"
                      onClick={() => {
                        deletePost(post._id);
                      }}
                    >
                      &#128465;
                    </button>
                  )}
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
