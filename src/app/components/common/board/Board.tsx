import React, { Component } from "react";
import "./Board.scss";

import Cell from "./cell/Cell";
import { ICell } from "./cell/Cell.interface";
import { IBoardProps, IBoardState } from "./Board.interface";

class Board extends Component {
    state: IBoardState;
    props: IBoardProps;

    static defaultProps = {
        additionalClass: "",
        board: [] as ICell [],
        boardGenerated: () => {},
        cellClicked: () => {},
        cellHovered: () => {},
        highlightOptions: [] as string []
    };

    constructor(props: IBoardProps) {
        super(props);
        this.state = {
          boardStatus: props.board,
          selectedColor: props.boardData.defaultColor
        };
    }

    componentWillMount() {
        const isNewBoard = this.state.boardStatus.length === 0;
        if (isNewBoard) {
        this.generatBoard();
        }
    }

    componentWillReceiveProps(nextProps: any) {
        if (
          nextProps.board.length !== 0 &&
          nextProps.board !== this.state.boardStatus
        ) {
          this.setState({ boardStatus: nextProps.board });
        }
    }

    /**
     * generatBoard
     * generate new array by rows and columns
     * setState boardStatus to newBoard
     */
    generatBoard = (): void => {
        const { boardData, boardGenerated } = this.props;
        const { rows, columns, cellData } = boardData;
        const puzzelTemp = Array.from(Array(rows).keys());
        const rowTemp = Array.from(Array(columns).keys());
        const newBoard = Array.from(puzzelTemp, (row, rIndex) => {
          return Array.from(rowTemp, (col, cIndex) => {
              const cell = {
                id: `R${rIndex}C${cIndex}`,
                y: cIndex,
                x: rIndex
              };
              return { ...cell, ...cellData };
          });
        });

        this.setState({
          boardStatus: newBoard
        });

        boardGenerated(newBoard);
    };

    /**
     * getClasses
     * return classes refer to arguments
     */
    getClasses = (elName: string, el: any, index: number): string => {
        const isActive = el.isActive !== undefined && el.isActive;
        const isHighlight = el.isHighlight !== undefined && el.isHighlight;
        const defaultClasses = `${elName} ${elName}${index}`;
        const isActiveClass = isActive ? 'is-active' : '';
        const isHighlightClass = isHighlight ? 'is-highlight' : '';

        return `${defaultClasses} ${isActiveClass} ${isHighlightClass}`;
    };

    /**
     * handleCellClick
     * callback to cellClicked
     */
    handleCellClick = (cell: ICell): void => {
        this.props.cellClicked(cell);
    };

    /**
     * handleCellHovered
     * callback to cellHovered
     */
    handleCellHovered = (cell: ICell): void => {
        if (this.props.highlightOptions.length > 0 && cell.isHighlight !== undefined) {
          this.setHighlightCell(cell);
        }

        this.props.cellHovered(cell);
    };

    /**
     * setHighlightCell
     * set state boardStatus with hilighted cells
     */
    setHighlightCell = (cellObj: ICell): void => {
        const { boardStatus } = this.state;
        const { highlightOptions } = this.props;
        const clonedBoardStatus = JSON.parse(JSON.stringify(boardStatus));
        const shouldHighlightCell = highlightOptions.includes('cell');
        const shouldHighlightCRow = highlightOptions.includes('row');
        const shouldHighlightColumn = highlightOptions.includes('column');
        
        clonedBoardStatus.map((row: any[]): ICell[][] => {
            row.map( cell => {
                const highlightCell = shouldHighlightCell && cellObj.id === cell.id;
                const highlightRow = shouldHighlightCRow && cell.x === cellObj.x;
                const highlightColumn = shouldHighlightColumn && cell.y === cellObj.y;

                if (highlightCell || highlightRow || highlightColumn) {
                    return cell.isHighlight = true;
                }
                return cell.isHighlight = false;
            })

            return row;
        });

        this.setState({boardStatus: clonedBoardStatus});
    };

  render() {
    const { boardStatus, selectedColor } = this.state;
    const { boardData, additionalClass } = this.props;
    const { gameIsRunning } = boardData;
    const isRunning = gameIsRunning !== undefined && gameIsRunning ? gameIsRunning : false;
    const boardClasses = `board ${additionalClass} ${isRunning ? 'game-is-running' : ''}`;

    const boardEl = boardStatus.map((row: ICell[], index: number) => {
      return (
        <div
          className={this.getClasses("row", row, index)}
          key={`row ${index}`}
        >
          {row.map((cell, index) => {
            return (
              <Cell
                cellData={cell}
                cellIndex={index}
                cellWidth={boardData.cellWidth}
                cellHeight={boardData.cellHeight}
                selectedColor={selectedColor}
                defaultClasses={this.getClasses("cell", cell, index)}
                key={`cell ${index}`}
                cellOnClick={() => {
                  this.handleCellClick(cell);
                }}
                cellOnMouseOver={() => {
                  this.handleCellHovered(cell);
                }}
                gameIsRunning={gameIsRunning}
              />
            );
          })}
        </div>
      );
    });
    return <div className={boardClasses}>{boardEl}</div>;
  }
}

export default Board;