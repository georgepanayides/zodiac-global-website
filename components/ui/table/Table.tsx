import React from "react";

interface Column<T> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  className?: string;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  className?: string;
}

export function Table<T>({ data, columns, className = "" }: TableProps<T>) {
  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            {columns.map((col, index) => (
              <th
                key={index}
                className={`py-4 px-4 text-sm font-semibold text-white/60 uppercase tracking-wider ${col.className}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-white/5 hover:bg-white/5 transition-colors"
            >
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="py-4 px-4 text-cream-100">
                  {typeof col.accessor === "function"
                    ? col.accessor(item)
                    : (item[col.accessor] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
