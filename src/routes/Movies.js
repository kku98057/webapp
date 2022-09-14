import { gql, useQuery } from "@apollo/client";
import React from "react";

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
    }
    allTweets {
      id
      text
      author {
        fullname
      }
    }
  }
`;

function Movies() {
  const { data, loading, error } = useQuery(ALL_MOVIES);
  if (loading) {
    return <h1>Loding...</h1>;
  }
  if (error) {
    return <h1>Could not fetch!</h1>;
  }
  return (
    <ul>
      {data.allMovies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
      <h1>dkasfjlasdjfasdklfj</h1>
      {data.allTweets.map((tweet) => (
        <li key={tweet.id}>
          {tweet.text}/by:{tweet.author.fullname}
        </li>
      ))}
    </ul>
  );
}

export default Movies;
