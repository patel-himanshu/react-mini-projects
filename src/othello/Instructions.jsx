const Instructions = () => {
  return (
    <div className="">
      <h5>Rules</h5>
      Othello is a strategy board game played between 2 players. One player
      plays black and the other white.
      <ul>
        <li>Black always moves first.</li>
        <li>
          If a player cannot outflank and flip at least one opposing disk, they
          forfeit their turn and their opponent moves again. However, if a move
          is available a player may not forfeit their turn.
        </li>
        <li>
          A disk may outflank any number of disks in one or more rows in any
          number of directions at the same time (horizontally, vertically or
          diagonally). A "row" is defined as one or more disks in a continuous
          straight line.
        </li>
        <li>
          Players may not skip over their own color disk(s) to outflank an
          opposing disk.
        </li>
        <li>
          Disk(s) may only be outflanked as a direct result of a move and must
          fall in the direct line of the disk placed down.
        </li>
        <li>
          {" "}
          All disks outflanked in any one move must be flipped, even if it is to
          the player’s advantage not to flip them at all.
        </li>
        <li>
          A player who flips a disk that should not have been turned may correct
          the mistake as long as the opponent has not made a subsequent move. If
          the opponent has already moved, it is too late for a change and the
          disk(s) remain as is.
        </li>
        <li>
          Once a disk is placed on a square, it can never be moved to another
          square later in the game.
        </li>
        <li>
          If a player runs out of disks, but still has the opportunity to
          outflank an opposing disk on their turn, the opponent must give the
          player a disk to use. This can happen as many times as the player
          needs and can use a disk.
        </li>
        <li>
          When it is no longer possible for either player to move, the game is
          over. Disks are counted and the player with the majority of their
          color showing is the winner.
        </li>
      </ul>
      <strong>Note</strong>: It is possible for a game to end before all 64
      squares are filled.
    </div>
  );
};

export default Instructions;
