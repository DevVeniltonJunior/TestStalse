import { getMetrics } from "@/services/api";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export default async function DashboardPage() {
  const metrics = await getMetrics();

  return (
    <section className="section">
      <div className="page-header">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">
            Overview of sales performance and business metrics.
          </p>
        </div>
      </div>

      <div className="metrics-grid">
        <MetricCard
          title="💰 Total Sales"
          value={formatCurrency(metrics.total_sales)}
        />

        <MetricCard
          title="📈 Total Profit"
          value={formatCurrency(metrics.total_profit)}
        />

        <MetricCard
          title="📦 Total Quantity"
          value={metrics.total_quantity.toLocaleString()}
        />
      </div>

      <div className="tables-grid">
        <MetricsTable
          title="Sales by Category"
          data={metrics.sales_by_category}
        />

        <MetricsTable
          title="Sales by Region"
          data={metrics.sales_by_region}
        />
      </div>
    </section>
  );
}

type CardProps = {
  title: string;
  value: string;
};

function MetricCard({ title, value }: CardProps) {
  return (
    <div className="card metric-card">
      <span className="metric-title">{title}</span>

      <h2 className="metric-value">{value}</h2>
    </div>
  );
}

type TableProps = {
  title: string;
  data: Record<string, number>;
};

function MetricsTable({ title, data }: TableProps) {
  return (
    <div className="card">
      <h2 className="table-title">{title}</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th style={{ textAlign: "right" }}>Sales</th>
          </tr>
        </thead>

        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>

              <td style={{ textAlign: "right" }}>
                {formatCurrency(value)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}