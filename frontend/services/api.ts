/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
})

export interface Ticket {
  id: number
  created_at: string
  customer_name: string
  channel: string
  subject: string
  status: string
  priority: string
}

export interface Metrics {
  total_sales: number
  total_profit: number
  total_quantity: number
  sales_by_category: Record<string, number>
  sales_by_region: Record<string, number>
}

interface APIReturn<t> {
  data: t,
  message: string
}


export async function getTickets(): Promise<Ticket[]> {
  try {
    const response = await api.get<APIReturn<Ticket[]>>("/tickets")
    return response.data.data
  } catch (error: any) {
    console.log(error.response?.status)
    console.log(error.response?.headers)
    console.log(error.response?.data)

    throw error
  }
}


export async function updateTicket(
  id: number,
  body: Partial<Pick<Ticket, "status" | "priority">>
): Promise<Ticket> {
  const response = await api.patch<Ticket>(
    `/tickets/${id}`,
    body
  )

  return response.data
}


export async function getMetrics(): Promise<Metrics> {
  const response = await api.get<APIReturn<Metrics>>("/metrics")

  return response.data.data
}