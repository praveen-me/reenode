import React, { Suspense } from "react";

const HomePage = () => {
  return (
    <main className="main">
      <Suspense fallback={<p>Loading...</p>}>
        <img
          src="https://media.giphy.com/media/BIo5QXYD7LGbm/giphy.gif"
          alt="Magic"
        />
      </Suspense>
      <p>
        <a href="https://giphy.com/gifs/comments-year-magician-WU8nnAdxZWeM8">
          via GIPHY
        </a>
      </p>
      <h2>Welcome to React Node Boilerplate</h2>
    </main>
  );
};

export default HomePage;
