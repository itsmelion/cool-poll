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

### Controlling the Quiz from outside

You can invoke its internal methods by instead of `Quiz`,
you use the `QuizComponent` wrapped with the `PollProvider`.
The poll provider shall allow you to read poll state, and dispatch actions
like `usePoll`, `usePollActions`
