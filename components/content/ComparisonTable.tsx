// Real <table> markup with a caption and row headers: the structured
// comparison format answer engines extract most reliably. Scrolls inside its
// own box on narrow screens so the page itself never scrolls sideways.
export function ComparisonTable({
  caption,
  columns,
  rows,
}: {
  caption: string;
  columns: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border-strong">
      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
        <caption className="bg-bg-elevated px-5 pt-4 pb-2 text-left text-sm font-semibold text-fg">
          {caption}
        </caption>
        <thead className="bg-bg-elevated">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className="border-b border-border-strong px-5 py-3 font-semibold text-fg"
              >
                {column || <span className="sr-only">Feature</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, ...cells]) => (
            <tr key={label} className="border-b border-border last:border-b-0">
              <th scope="row" className="px-5 py-3 font-medium text-fg">
                {label}
              </th>
              {cells.map((cell, index) => (
                <td key={index} className="px-5 py-3 text-fg-muted">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
