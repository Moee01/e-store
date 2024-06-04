import * as React from "react";
import styled from "styled-components";

function Content() {
  return (
    <main>
      <ContentContainer>
        <Section />
      </ContentContainer>
    </main>
  );
}

const ContentContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  background-color: #fdfdfd;
  min-height: 76px;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default Content;