const Instructions = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="container text-justify">
        <h3 className="d-flex justify-content-center align-items-center">
          Rules
        </h3>
        <p>
          <strong>Othello</strong> (also known as <strong>Reversi</strong>) is a
          2-player strategy game played on a 8x8 board. One player plays black
          and the other white. When neither player can move, the game ends. The
          player with the most discs on the board at the end of the game wins.
          If both players have the same number of discs, then the game is a
          draw. A game of Othello may end before the board is completely filled.
        </p>
        <ul>
          <li>
            Black always makes the first move. Then the game alternates between
            white and black.
          </li>
          <li>
            If a player cannot outflank and flip at least one opposing disc,
            they forfeit their turn and their opponent moves again. However, if
            a move is available a player may not forfeit their turn.
          </li>
          <li>
            A disc may outflank any number of discs in one or more rows in any
            number of directions at the same time (horizontally, vertically or
            diagonally). A "row" is defined as one or more discs in a continuous
            straight line.
          </li>
          <li>
            Players may not skip over their own color disc(s) to outflank an
            opposing disc.
          </li>
          <li>
            disc(s) may only be outflanked as a direct result of a move and must
            fall in the direct line of the disc placed down.
          </li>
          <li>
            All discs outflanked in any one move must be flipped, even if it is
            to the player’s advantage not to flip them at all.
          </li>
          <li>
            A player who flips a disc that should not have been turned may
            correct the mistake as long as the opponent has not made a
            subsequent move. If the opponent has already moved, it is too late
            for a change and the disc(s) remain as is.
          </li>
          <li>
            Once a disc is placed on a square, it can never be moved to another
            square later in the game.
          </li>
          <li>
            If a player runs out of discs, but still has the opportunity to
            outflank an opposing disc on their turn, the opponent must give the
            player a disc to use. This can happen as many times as the player
            needs and can use a disc.
          </li>
          {/* <li>
            When it is no longer possible for either player to move, the game is
            over. discs are counted and the player with the majority of their
            color showing is the winner.
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Instructions;
