import React from "react"
import SectionWrapper from "../components/UI/SectionWrapper"
import { useParams } from "react-router-dom"

import Layout from "../components/Layout/Layout"
import UserInfo from "../components/User/UserInfo"
import UserFeed from "../components/User/UserFeed"

export default function UserPage() {
  const params = useParams()
  const { userId } = params

  return (
    <Layout>
      <SectionWrapper>
        <UserInfo userId={userId} />
        <UserFeed userId={userId} />
      </SectionWrapper>
    </Layout>
  )
}
