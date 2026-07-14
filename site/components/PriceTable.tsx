import Link from "next/link";
import { priceRows, type PriceRow } from "@/lib/prices";

export default function PriceTable({ rows, compact = false }: { rows?: PriceRow[]; compact?: boolean }) {
  const data = rows ?? priceRows;
  return (
    <div className="overflow-x-auto rounded-xl border border-navy-100">
      <table className="w-full min-w-130 text-left text-sm">
        <caption className="sr-only">Tabela de preços — dia, noite e fim-de-semana</caption>
        <thead className="bg-navy-900 text-white">
          <tr>
            <th scope="col" className="p-3">Serviço</th>
            <th scope="col" className="p-3">Dia (8h–21h)</th>
            <th scope="col" className="p-3">Noite</th>
            <th scope="col" className="p-3">Fim-de-semana</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-navy-50">
          {data.map((row) => (
            <tr key={row.label} className="bg-white">
              <th scope="row" className="p-3 font-semibold text-navy-900">
                <Link href={`/servicos/${row.service}/`} className="hover:underline">
                  {row.label}
                </Link>
                {!compact && row.note && <span className="block text-xs font-normal text-slate-500">{row.note}</span>}
              </th>
              <td className="p-3 font-bold">desde {row.day}€</td>
              <td className="p-3">desde {row.night}€</td>
              <td className="p-3">desde {row.weekend}€</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
