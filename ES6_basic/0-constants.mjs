export function taskFirst() {
  const task = 'I prefer const when I can.';  // var -> const
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';      // var -> let
  combination += getLast();

  return combination;
}
