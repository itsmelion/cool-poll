# @dephion/quiz

## Usage

- `yarn add @dephion/quiz`

```jsx
import { Quiz } from "@dephion/quiz"

const onSubmit = async (responses) => {
  const {data} = axios.post(responses);
  return data; // results
};

function App() {
  return <Quiz poll={pollData} onSubmit={onSubmit}>
}
```
