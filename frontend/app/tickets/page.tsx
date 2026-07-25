import TicketTable from "@/components/ticketTable";
import { getTickets } from "@/services/api";

export default async function TicketsPage() {
  const tickets = await getTickets();

  return (
    <section className="section">
      <div className="page-header">
        <div>
          <h1 className="page-title">Tickets</h1>
          <p className="page-subtitle">
            Manage support tickets, update status and priority.
          </p>
        </div>
      </div>

      <div className="card">
        <TicketTable initialTickets={tickets} />
      </div>
    </section>
  );
}