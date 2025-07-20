function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
      <UserProfile name="Alice" age={30} bio="Loves hiking and reading." />
      <UserProfile name="Bob" age={25} bio="Enjoys painting and traveling." />
    </main>
  );
}
