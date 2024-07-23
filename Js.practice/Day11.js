// //Prmosies
// function getmsg(msg) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const msg = "Im just a girl";

//       resolve(msg);
//     }, 2000);
//   });
// }
// getmsg().then((result) => {
//   console.log("girlie", result);
// });

// //Chaining promises
// function fetchData(Datatype, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`data fetched ${Datatype}`);
//     }, delay);
//   });
// }
// fetchData("kash", 2000)
//   .then((result) => {
//     console.log(result);
//     return fetchData("Dhruv", 2000);
//   })
//   .then((result) => {
//     console.log(result);
//     return fetchData("Aishwary", 2000);
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error("oopsie", error);
//   });

// //ASync await
// async function logResolvedValue() {
//   const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Resolved value after waiting");
//     }, 2000);
//   });
//   const result = await myPromise;
//   console.log(result);
// }
// logResolvedValue();

// function asynctask() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Failed.");

//     }, 4000);
//   });
// }
// async function handleRejection() {
//   try {
//     const result = await asynctask();
//     console.log("task completed", result);
//   } catch (error) {
//     console.log("error", error);
//   }
// }
// handleRejection();

//Fetch api
// const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
// function fetchData() {
//   return fetch(apiUrl)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log("response data", data);
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error); // Log and handle errors
//     });
// }
// fetchData();

// const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
// const getData = async () => {
//   console.log("getting data");
//   let response = await fetch(apiUrl);
//   console.log(response);
//   let data = await response.json;
//   console.log(data);
// };

//Concurrent promises

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ username: "john_doe", role: "admin" });
    }, 2000);
  });
}
function fetchPostData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ postId: 1, title: "Sample Post" });
    }, 1500);
  });
}
function fetchCommentsData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "Great post!" },
        { id: 2, text: "Looking forward to more!" },
      ]);
    }, 4000);
  });
}
// async function fetchAllData() {
//   try {
//     const [userData, postData, commentsData] = await Promise.all([
//       fetchUserData(),
//       fetchPostData(),
//       fetchCommentsData(),
//     ]);
//     console.log("User Data:", userData);
//     console.log("Post Data:", postData);
//     console.log("Comments Data:", commentsData);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }
// fetchAllData();
async function racePromises() {
  try {
    const firstResolvedData = await Promise.race([
      fetchUserData(),
      fetchPostData(),
      fetchCommentsData(),
    ]);

    console.log("First resolved data:", firstResolvedData);
  } catch (error) {
    console.error("Error:", error);
  }
}

racePromises();
