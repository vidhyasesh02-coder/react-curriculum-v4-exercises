function SnackList() {
  const snacks = [
    { name: 'garnola bars', rank: 5 },
    { name: 'Popcorn', rank: 4 },
    { name: 'Cookies', rank: 3 },
    { name: 'Apples and bananas', rank: 2 },
    { name: 'Fig bar', rank: 1 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {sortedSnacks.map((snack) => (
        <li key={snack.name}>
          {snack.name} (Rank: {snack.rank})
        </li>
      ))}
    </ol>
  );
}

export default SnackList;
