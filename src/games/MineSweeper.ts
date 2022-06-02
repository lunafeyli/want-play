import { useState } from "react";

interface GridOptions {
	size: [number, number];
	bombsCount?: number;
}

interface GridCell {
	value: number | "x";
	x: number;
	y: number;
	isFlagged: boolean;
	isRevealed: boolean;
	bombClicked: boolean;
}

type Cordinate = { x: number; y: number };

function MineSweeper(gridOptions: GridOptions) {
    const [size, setSize] = useState<[number, number]>();
    
    const [grid, setGrid] = useState<GridCell[][]>([]);
    
    const [gameStatus, setGameStatus] = useState<"stopped" | "playing" | "over">();

    setSize(gridOptions.size);
	createGrid(gridOptions);

    function createGrid({ size, bombsCount: defaultBombsCount }: GridOptions) {
		let _grid: GridCell[][] = [];

		for (let i = 0; i < size[0]; i++) {
			let row: GridCell[] = [];

			for (let j = 0; j < size[1]; j++) {
				row.push({
					value: 0,
					x: j,
					y: i,
					isFlagged: false,
					isRevealed: false,
					bombClicked: false
				});
			}

			_grid.push(row);
		}

		function createBombs() {
			const random = (max: number) => Math.floor(Math.random() * max);

			let bombsCount = defaultBombsCount || (size[0] * size[1]) / 10,
				i = 0;

			while (i < bombsCount) {
				const bombCords = [random(size[0]), random(size[1])];

				const bomb = _grid[bombCords[0]][bombCords[1]];

				if (bomb.value !== "x") {
					_grid[bombCords[0]][bombCords[1]].value = "x";
					i++;
				}
			}
		}

		createBombs();

		setGrid(_grid);

		propagateBombsCount();

		return _grid;
	}

	function resetGrid(
		gridOptions: GridOptions,
	) {
		createGrid(gridOptions);
	}

	function propagateBombsCount() {
		for (let row of grid) {
			for (let cell of row) {
				if (cell.value !== "x") {
					let bombsCount = 0;

					const { x, y } = cell;

					const area = getNeighborCells({ x, y });

					area.map((cell) => {
						if (cell.value === "x") bombsCount++;
					});

					cell.value = bombsCount;
				}
			}
		}
	}

	function getNeighborCells({ x, y }: Cordinate) {
		const _grid = grid;
		const size = this._size;
		const el = [];

		if (y > 0) el.push(_grid[y - 1][x]);
		if (y < size[0] - 1) el.push(_grid[y + 1][x]);
		if (x > 0) el.push(_grid[y][x - 1]);
		if (x < size[1] - 1) el.push(_grid[y][x + 1]);
		if (y > 0 && x > 0) el.push(_grid[y - 1][x - 1]);
		if (y > 0 && x < size[1] - 1) el.push(_grid[y - 1][x + 1]);
		if (y < size[0] - 1 && x < size[1] - 1) el.push(_grid[y + 1][x + 1]);
		if (y < size[0] - 1 && x > 0) el.push(_grid[y + 1][x - 1]);

		return el;
	}

	function flagCell(
		{ x, y }: Cordinate,
	) {
		if (grid[y][x].isRevealed) return;

		let newGrid = [...grid];

        newGrid[y][x].isFlagged = !newGrid[y][x].isFlagged

        setGrid(newGrid)
	}

	function getNoRevealedCells() {
		let count = 0;

		grid.forEach((row) =>
			row.forEach((cell) => {
				if (cell.value !== "x" && !cell.isRevealed) count++;
			})
		);

		return count;
	}

	function revealAdjacentSafeCells(
		{ x, y }: Cordinate
	) {
		if (grid[y][x].value === "x" || grid[y][x].isFlagged) {
			return;
		}

		let newGrid = [...grid];
		newGrid[y][x].isRevealed = true;
        setGrid(newGrid)

		if (grid[y][x].value === 0) {
			let area = getNeighborCells({ x, y });

			area.forEach(function (pos) {
				if (!grid[pos.y][pos.x].isRevealed) {
					revealAdjacentSafeCells({ x: pos.x, y: pos.y });
				}
			});
		}
	}

	function revealCell(
		{ x, y }: Cordinate,
		winCallback: () => void = () => {},
		loseCallback: () => void = () => {}
	) {
		if (grid[y][x].isFlagged || grid[y][x].isRevealed) return;

		let newGrid = [...grid];
		newGrid[y][x].isRevealed = true;

		if (grid[y][x].value === "x") {
			grid[y][x].bombClicked = true;
        setGrid(newGrid)
        setGameStatus("over")
            loseCallback();
		} else {
            revealAdjacentSafeCells({ x, y });
            
			if (getNoRevealedCells() === 0) {
                setGameStatus("over")
				winCallback();
			}
		}
	}

	function revealAll() {
		let newGrid = [...grid];

		newGrid.map((row) =>
			row.map((cell) => {
				if (!cell.isFlagged || (cell.value !== "x" && cell.isFlagged)) {
					cell.isRevealed = true;
					cell.isFlagged = false;
				}
			})
		);
	}

	function flagAll() {
		grid.map((row) =>
			row.map((cell) => {
				if (cell.value === "x") {
					cell.isFlagged = true;
				}
			})
		);
	}

    function editState<S = undefined>(state: S, stateUpdateFunc: (value: S) => void, editFunc: (stateValue: S) => S) {
        function clone(Obj: any) {
            let buf: any; // the cloned object
            if (Obj instanceof Array) {
              buf = []; // create an empty array
              var i = Obj.length;
              while (i --) {
                buf[i] = clone(Obj[i]); // recursively clone the elements
              }
              return buf;
            } else if (Obj instanceof Object) {
              buf = {}; // create an empty object
              for (const k in Obj) {
                if (Obj.hasOwnProperty(k)) { // filter out another array's index
                  buf[k] = clone(Obj[k]); // recursively clone the value
                }     
              }
              return buf;
            } else {
              return Obj;
            }
          }

        let newStateValue = clone(state);

        stateUpdateFunc(editFunc(newStateValue))
    }
}

