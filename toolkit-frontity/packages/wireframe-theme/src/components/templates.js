
import React from "react"
import { connect, styled } from "frontity"

const Templates = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
    <HeadContent>

    </HeadContent>
    <MainContent>
      <div>

      </div>
    </MainContent>
    </>
  )
}

export default connect(Templates)

const HeadContent = styled.div`
  
`

const MainContent = styled.div`


`