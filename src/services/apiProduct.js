const API_URL = "https://fakestoreapi.com";

export async function getMenu() {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) throw Error("Failed getting menu");

  return await res.json();
}
