function CartOverview() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 mx-auto mb-4 flex w-full max-w-3xl items-center justify-between rounded-full bg-white p-4 shadow-lg">
      <p className="space-x-4">
        <span>4 product</span>
        <span>$49</span>
      </p>

      <p>Open cart &rarr;</p>
    </div>
  );
}

export default CartOverview;
