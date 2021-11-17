import React from "react"
import Layout from "../components/Layout/Layout"
import UserInfo from "../components/User/UserInfo"
import SectionWrapper from "../components/UI/SectionWrapper"
import { useParams } from "react-router-dom"

export default function UserPage() {
  const params = useParams()
  const { userId } = params

  return (
    <Layout>
      <SectionWrapper>
        <UserInfo userId={userId} />
      </SectionWrapper>
    </Layout>
  )
}
