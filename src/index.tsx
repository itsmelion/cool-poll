import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { Pool, PageContainer } from "components";

ReactDOM.render(
  <StrictMode>
    <PageContainer>
      <Pool.PoolView>
        <h1>Hello</h1>
      </Pool.PoolView>
    </PageContainer>
  </StrictMode>,
  document.getElementById("root"),
);
