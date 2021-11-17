import React from "react"
import Layout from "../components/Layout/Layout"
import UserInfo from "../components/User/UserInfo"
import { useParams} from "react-router-dom";

export default function UserPage() {
  const params = useParams();
  const { userId } = params;


  return (
    <Layout>
      <UserInfo userId={userId}/>
    </Layout>
  )
}
