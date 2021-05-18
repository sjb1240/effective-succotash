import clsx from "clsx";
import { createUseStyles } from "react-jss";
import { BaseComponentProps } from "../types";

const useStyles = createUseStyles({
  cell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    border: "1px solid black",
    borderRadius: 4,
    transition: "border-color 200ms ease-in-out",

    "&:focus-within": {
      borderColor: "yellow",
    },
  },
  cellDisabled: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  input: {
    textAlign: "center",
    flex: "1 1 auto",
    maxWidth: "calc(100% - 16px)",
    height: "calc(100% - 16px)",
    border: "none",

    "&:disabled": {
      background: "none",
    },
  },
});

interface CellProps extends BaseComponentProps {
  value: number | undefined;
  onChange: (value: number | undefined) => void;
  readonly?: boolean;
}

/**
 * A simple cell; can be part of a vector or matrix or stand by itself.
 */
const Cell: React.VFC<CellProps> = ({
  className,
  style,
  value,
  onChange,
  readonly = false,
}) => {
  /** @todo fix logic. */
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      onChange(undefined);
      return;
    }
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      onChange(value);
    }
  };

  const classes = useStyles();

  return (
    <div
      className={clsx(
        classes.cell,
        readonly && classes.cellDisabled,
        className
      )}
      style={style}
    >
      <input
        disabled={readonly}
        type="number"
        value={value ?? ""}
        onInput={onChangeHandler}
        className={classes.input}
      />
    </div>
  );
};

export default Cell;
