import React from 'react'
import Content from '../Content/Content'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import RightSideBar from '../RightSideBar/RightSideBar'

const ContentWrapper = () => {
  return (
    <>
      <LeftSideBar />
      <Content />
      <RightSideBar />
    </>
  )
}

export default ContentWrapper