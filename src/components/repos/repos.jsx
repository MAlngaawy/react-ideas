import React, { useState, useEffect } from "react";

const Loading = () => (
  <div
    className="flex items-center m-5 bg-blue-500 text-white text-sm font-bold px-4 py-3"
    role="alert"
  >
    <svg
      className="fill-current w-4 h-4 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
    </svg>
    <p>Please Wait Untill loading finish.</p>
  </div>
);

const Repos = () => {
  const [repos, setRepos] = useState(null);

  // Fetch Data And put It In The Repos State
  useEffect(() => {
    async function fetchData() {
      fetch("https://api.github.com/users/malngaawy/repos")
        .then((response) => response.json())
        .then((data) => setRepos(data));
    }
    fetchData();

    // With setTimeout
    // setTimeout(() => {
    //   fetch('https://api.github.com/users/malngaawy/repos')
    //   .then(response => response.json())
    //   .then(data => setRepos(data))
    // },2000)
  });

  // Didn't work Way
  //     useEffect(() =>
  //     fetch('https://api.github.com/users/malngaawy/repos')
  //     .then( response => response.json())
  //     .then( data => setRepos(data) )
  //   );

  return repos ? (
    <div className="bg-gray-500 w-full flex flex-col p-5 md:flex-wrap md:flex-row md:content-around text-white">
      {repos.map((repo) => (
        <div
          key={repo.id}
          className="rounded w-full md:w-1/4 inline-block md:mx-2 my-2 p-2 text-black bg-gray-200"
        >
          <h2 className="repo-name mx-2 inline-block">{repo.name}</h2>
          <a
            href={repo.homepage}
            target="_blanck"
            className="text-xs cursor-pointer text-blue-600"
          >
            Visit
          </a>
          <img
            src={repo.owner.avatar_url}
            className="w-5 h-5 block float-right rounded-full"
          />
        </div>
      ))}
    </div>
  ) : (
    <Loading />
  );
};

export { Repos };
