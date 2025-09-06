const API_URL = 'https://fakestoreapi.com';

// Local in-memory store for created orders
let localOrders = [];
let orderIdCounter = 1000; // Fake id generator

export async function getMenu() {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) throw Error('Failed getting menu');

  return await res.json();
}

export async function getOrder(id) {
  // Check local DB first
  const local = localOrders.find((order) => order.id === +id);
  if (local) return local;

  // Fallback to Fakestore (but may return null)
  const res = await fetch(`${API_URL}/carts/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);
  return await res.json();
}

export async function createOrder(newOrder) {
  // Try sending to FakeStore (not reliable)
  try {
    await fetch(`${API_URL}/carts`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch {
    throw Error('Failed creating your order');
  }

  // Always store locally, it's bad idea, but it's just for practice hehehe :>
  const localOrder = { id: orderIdCounter++, ...newOrder };
  localOrders.push(localOrder);

  return localOrder;
}
