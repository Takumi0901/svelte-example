export const hoge = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_limit=20`
  );
  return await res.json();
};
