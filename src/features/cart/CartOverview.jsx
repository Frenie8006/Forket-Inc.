function CartOverview() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 mx-auto mb-4 flex w-full max-w-3xl items-center justify-between rounded-full bg-slate-800 p-4 text-stone-100 shadow-lg">
      <p className="space-x-4">
        <span>4 product</span>
        <span>$49</span>
      </p>

      <p>Open cart &rarr;</p>
    </div>
  );
}

export default CartOverview;
