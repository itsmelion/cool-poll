import { Choice } from "types";

import { Option } from "./Option/Option";

interface Props {
  options: Choice[];
}

export const List: React.FC<Props> = ({ options }) => {
  return (
    <ol>
      {options.map((item) => (
        <Option key={item.id} title={`Male ${item}`} />
      ))}
    </ol>
  );
};
