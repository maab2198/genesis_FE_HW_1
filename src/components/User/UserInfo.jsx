
import { Fragment, useEffect } from "react";


import LoadingSpinner from "../../components/UI/LoadingSpinner";
import useHttp from "../../hooks/use-http";
import { getUserInfo} from "../../lib/api";

const UserInfo = ({userId}) => {
  
  const {
    sendRequest,
    status,
    data: userInfo,
  } = useHttp(getUserInfo, true);


 // const match = useRouteMatch();

  useEffect(() => {
    sendRequest(userId);
  }, [userId, sendRequest]);
  if (status === "pending") {
    return (
        <LoadingSpinner />

    );
  }

  if (status === "pending") {
    return (
  
        <LoadingSpinner />
   
    );
  }

  // if (!loadedQoute.text) {
  //   return <h2>No area was found</h2>;
  // }
  return (
    <div>
{userId}
    </div>
  )
}

export default UserInfo
