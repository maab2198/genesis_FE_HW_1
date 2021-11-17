const PATH =
  "https://tiktok33.p.rapidapi.com/";
const HEADERS = {
   
        "x-rapidapi-host": "tiktok33.p.rapidapi.com",
        "x-rapidapi-key":
          "c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66",
      
}

export async function getTrendingFeed() {
  const response = await fetch(`${PATH}/trending/feed`,
  {
    headers: HEADERS,
  });


  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch trending feed.");
  }

  const trendingFeed = [];
  if (data) {

    trendingFeed.push(data);
  } else {
    throw new Error("Feed is empty")
  }

  

  return trendingFeed;
}





export async function getUserInfo(userId) {
  const response = await fetch(`${PATH}/user/info/${userId.slice( 1 )}`,{
    headers: HEADERS,
  });
  const userData = await response.json();
  console.log(userData)
  if (!response.ok) {
    throw new Error(userData.message || "Could not fetch user info.");
  }



  if (userData) {
    return userData;
  } else {
    throw new Error("User info is empty")
  }

  return userData;
}


export async function getUserFeed(userId) {
    const response = await fetch(`${PATH}/user/feed/${userId}`,{
        headers: HEADERS,
      });
     
      const userFeed = await response.json();
  
      if (!response.ok) {
        throw new Error(userFeed.message || "Could not fetch user feed.");
      }

      if (userFeed) {
        return userFeed;
      } else {
        throw new Error("Feed is empty")
      }
    
      
    
      return userFeed;
  }


