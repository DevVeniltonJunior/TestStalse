"use client";

import { useState } from "react";
import { updateTicket } from "@/services/api";
import type { Ticket } from "./ticketTable";

const STATUS = [
  "Open",
  "Pending",
  "In Progress",
  "Resolved",
  "Closed",
];

const PRIORITY = [
  "Low",
  "Medium",
  "High",
  "Critical",
];

type Props = {
  ticket: Ticket;
  onClose: () => void;
  onUpdated: (ticket: Ticket) => void;
};

export default function TicketModal({
  ticket,
  onClose,
  onUpdated,
}: Props) {
  const [status, setStatus] = useState(ticket.status);
  const [priority, setPriority] = useState(ticket.priority);
  const [loading, setLoading] = useState(false);

  async function save() {
    try {
      setLoading(true);

      await updateTicket(ticket.id, {
        status,
        priority,
      });

      onUpdated({
        ...ticket,
        status,
        priority,
      });

      onClose();
    } catch {
      alert("Failed to update ticket.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal">

        <div className="modal-header">
          <div>
            <h2>🎫 Ticket #{ticket.id}</h2>
            <p className="modal-subtitle">
              Update ticket information
            </p>
          </div>

          <button
            className="close-button"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="modal-grid">

          <Field label="Customer" value={ticket.customer_name} />
          <Field label="Channel" value={ticket.channel} />

          <Field label="Subject" value={ticket.subject} full />

          <Field label="Created At" value={ticket.created_at} full />

          <div className="input-group">
            <label>Status</label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              {STATUS.map((item) => (
                <option key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label>Priority</label>

            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              {PRIORITY.map((item) => (
                <option key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

        </div>

        <div className="modal-actions">

          <button
            className="button secondary"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="button"
            disabled={loading}
            onClick={save}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>

        </div>

      </div>
    </div>
  );
}

function Field({
  label,
  value,
  full = false,
}: {
  label: string;
  value: string;
  full?: boolean;
}) {
  return (
    <div className={`field ${full ? "field-full" : ""}`}>
      <label>{label}</label>

      <div className="field-value">
        {value}
      </div>
    </div>
  );
}