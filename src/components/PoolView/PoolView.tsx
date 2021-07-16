import { useStyles } from "services";

export const PoolView: React.FC = (props) => {
  const container = useStyles((theme) => ({
    backgroundColor: theme.colors.material010,
    padding: "18pt",
    borderRadius: "12pt",
    minHeight: "20vh",
  }));

  return <div {...props} style={container} />;
};
