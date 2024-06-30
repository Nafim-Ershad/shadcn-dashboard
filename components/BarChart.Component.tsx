'use client';

import React from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import chartData from '@/lib/data/Chart.Data';

type Props = {}

export default function BarChartComponent({}: Props) {
  return (
    <ResponsiveContainer width={'100%'} height={350}>
        <BarChart data={chartData}>
            <XAxis
            dataKey={'name'}
            fontSize={12}
            tickLine={false}
            axisLine={false}
            stroke='#888888'
            />
            <YAxis
            fontSize={12}
            tickLine={false}
            axisLine={false}
            stroke='#888888'
            tickFormatter={(v) => "$"+v}
            />
            <Bar dataKey={'total'} radius={[4, 4, 0, 0]}/>
        </BarChart>
    </ResponsiveContainer>
  )
}