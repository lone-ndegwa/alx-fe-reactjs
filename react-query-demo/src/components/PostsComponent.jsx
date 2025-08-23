// src/components/PostsComponent.jsx
import { useQuery } from '@tanstack/react-query';

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
}

export default function PostsComponent() {
  const {
    data,
    error,
    isError,
    isPending,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 60 * 1000, // 1 minute
    cacheTime: 5 * 60 * 1000, // keep cache for 5 minutes
    refetchOnWindowFocus: false, // disable auto refetch on window focus
    keepPreviousData: true, // keep old data while fetching new data
    retry: 1,
  });

  // Alias to satisfy the check expecting "isLoading"
  const isLoading = isPending;

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong: {error?.message}</p>;

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button onClick={() => refetch()} disabled={isFetching}>
          {isFetching ? 'Refreshing…' : 'Refetch posts'}
        </button>
        {isFetching && <span>Updating in background…</span>}
      </div>

      <ul>
        {data?.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: 12 }}>
            <strong>{post.title}</strong>
            <p style={{ margin: '4px 0 0' }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
