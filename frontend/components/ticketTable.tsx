"use client";

import { useMemo, useState } from "react";
import TicketModal from "./ticketModal";

export type Ticket = {
  id: number;
  created_at: string;
  customer_name: string;
  channel: string;
  subject: string;
  status: string;
  priority: string;
};

export default function TicketTable({
  initialTickets,
}: {
  initialTickets: Ticket[];
}) {
  const [tickets, setTickets] = useState(initialTickets);
  const [search, setSearch] = useState("");
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  const filteredTickets = useMemo(() => {
    const value = search.toLowerCase();

    return tickets.filter(
      (ticket) =>
        ticket.customer_name.toLowerCase().includes(value) ||
        ticket.subject.toLowerCase().includes(value)
    );
  }, [tickets, search]);

  function handleUpdatedTicket(ticket: Ticket) {
    setTickets((current) =>
      current.map((item) => (item.id === ticket.id ? ticket : item))
    );
  }

  return (
    <>
      <div className="table-toolbar">

        <div className="search-box">
          <span>🔍</span>

          <input
            placeholder="Search by customer or subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <span className="table-count">
          {filteredTickets.length} tickets
        </span>

      </div>

      <div className="table-wrapper">
        <table>

          <thead>
            <tr>
              <th>Created</th>
              <th>Customer</th>
              <th>Channel</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>

          <tbody>

            {filteredTickets.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="empty-state"
                >
                  No tickets found.
                </td>
              </tr>
            )}

            {filteredTickets.map((ticket) => (
              <tr
                key={ticket.id}
                onClick={() => setSelectedTicket(ticket)}
              >
                <td>{ticket.created_at}</td>

                <td>{ticket.customer_name}</td>

                <td>{ticket.channel}</td>

                <td>{ticket.subject}</td>

                <td>
                  <span
                    className={`badge ${ticket.status
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    {ticket.status}
                  </span>
                </td>

                <td>
                  <span
                    className={`badge ${ticket.priority.toLowerCase()}`}
                  >
                    {ticket.priority}
                  </span>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      {selectedTicket && (
        <TicketModal
          ticket={selectedTicket}
          onClose={() => setSelectedTicket(null)}
          onUpdated={(ticket) => {
            handleUpdatedTicket(ticket);
            setSelectedTicket(null);
          }}
        />
      )}
    </>
  );
}