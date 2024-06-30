/* eslint-disable @next/next/no-img-element */
"use client"

import React from 'react';
import { cn } from '@/lib/utils';
import { ColumnDef } from "@tanstack/react-table";
import PageTitleComponent from '@/components/PageTitle.Component';
import { DataTable } from '@/components/DataTable.Component';
import orderData, { Order } from '@/lib/data/Orders.Data';


type Props = {}

export default function Page({}: Props) {
  return (
    <section className='flex flex-col gap-5 w-full'>
      <PageTitleComponent title={'Orders'}/>
      <DataTable columns={columns} data={orderData}/>
    </section>
  )
}

const columns: ColumnDef<Order>[] = [
    {
        accessorKey: "order",
        header: "Order"
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            return (
            <div
                className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
                "bg-red-200": row.getValue("status") === "Pending",
                "bg-orange-200": row.getValue("status") === "Processing",
                "bg-green-200": row.getValue("status") === "Completed"
                })}
            >
                {row.getValue("status")}
            </div>
            );
        }
    },
    {
        accessorKey: "lastOrder",
        header: "Last Order"
    },
    {
        accessorKey: "method",
        header: "Method"
    }
]
