import React from "react"
import { useParams } from "react-router-dom"

import SectionWrapper from "../components/UI/SectionWrapper"
import Layout from "../components/Layout/Layout"
import UserInfo from "../components/User/UserInfo"
import UserFeed from "../components/User/UserFeed"

export default function UserPage() {
  const { userId } = useParams()

  return (
    <Layout>
      <SectionWrapper>
        <UserInfo userId={userId} />
        <UserFeed userId={userId} />
      </SectionWrapper>
    </Layout>
  )
}
