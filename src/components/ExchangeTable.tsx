export default function ExchangeTable() {
  return (
    <div className="shadow overflow-hidden rounded-xl w-[300px]">
      <table className="w-[300px] text-sm text-center text-white">
        <thead className="bg-yellow-500 text-xs uppercase ">
          <tr>
            <th className="px-6 py-3">Currency</th>
            <th className="px-6 py-3">Buy</th>
            <th className="px-6 py-3">Sell</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white/30">
            <td className="px-6 py-4">USD</td>
            <td className="px-6 py-4">1.00</td>
            <td className="px-6 py-4">1.00</td>
          </tr>
          <tr className="bg-white/30">
            <td className="px-6 py-4">EUR</td>
            <td className="px-6 py-4">0.89</td>
            <td className="px-6 py-4">0.89</td>
          </tr>
          <tr className="bg-white/30">
            <td className="px-6 py-4">GBP</td>
            <td className="px-6 py-4">0.77</td>
            <td className="px-6 py-4">0.77</td>
          </tr>
          <tr className="bg-white/30">
            <td className="px-6 py-4">JPY</td>
            <td className="px-6 py-4">109.53</td>
            <td className="px-6 py-4">109.53</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
