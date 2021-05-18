import { useState } from "react";
import Matrix from "./components/Matrix";
import { emptyMatrix } from "./utils";

function App() {
  const [matrix, setMatrix] = useState<(number | undefined)[][]>(
    emptyMatrix(3, 3)
  );
  const addColumn = () => {
    const newMatrix = matrix.map((row) => [...row, undefined]);
    setMatrix(newMatrix);
  };
  const addRow = () => {
    // Assumption: all rows have the same amount of values.
    const cellsPerRow = matrix[0].length;

    const newMatrix = [...matrix, Array(cellsPerRow).fill(undefined)];
    console.log(newMatrix);
    setMatrix(newMatrix);
  };
  
  const setCell = (row: number, column: number, value: number | undefined) => {
    const newMatrix = matrix.map((row) => [...row]);
    newMatrix[row][column] = value;

    setMatrix(newMatrix);
  };

  return (
    <div>
      <Matrix
        matrix={matrix}
        onChange={setCell}
        onAddColumn={addColumn}
        onAddRow={addRow}
      />
    </div>
  );
}

export default App;
