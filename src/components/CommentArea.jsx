import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true);
      try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4YTBkMThmYzBmMzAwMTU1ZTViOTkiLCJpYXQiOjE3MjAxMjA1MTcsImV4cCI6MTcyMTMzMDExN30.o3lnCSdKFla0Tejz_6ZkvwFqKnKOvQv9L7PaxSXrUGA",
          },
        });
        console.log(response);
        if (response.ok) {
          let comments = await response.json();
          setComments(comments);
          setIsLoading(false);
          setIsError(false);
        } else {
          console.log("error");
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    };
    if (id) {
      getComments();
    }
  }, [id]);

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={id} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
