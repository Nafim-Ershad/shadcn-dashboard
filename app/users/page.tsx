/* eslint-disable @next/next/no-img-element */
"use client"

import React from 'react';
import PageTitleComponent from '@/components/PageTitle.Component';
import { DataTable } from '@/components/DataTable.Component';
import { ColumnDef } from "@tanstack/react-table"

import paymentData, { type Payment } from '@/lib/data/Payment.Data';

type Props = {}

export default function Page({}: Props) {
  return (
    <section className='flex flex-col gap-5 w-full'>
      <PageTitleComponent title={'Users'}/>
      <DataTable columns={columns} data={paymentData}/>
    </section>
  )
}

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({row}) => (
      <div className='flex gap-2 items-center'>
        <img 
        className="h-10 w-10" 
        src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${row.getValue('name')}`} 
        alt="user-avatar" 
        />
        <p>{row.getValue('name')}</p>
      </div>
    )
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
]
