import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
const data=[
    {name:"Certified",value:9000},
    {name:"Final Stage",value:600},
    {name:"Starting Stage",value:400}
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


export const StudentPieChart = () => {
  return (
    <div className='mt-5 w-[22rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col '>
    <strong className='text-gray-700 font-medium'>Student Position</strong>
    <div className='w-full mt-3 flex-1 text-xs '>
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={130}
                fill="#8884d8"
                dataKey="value"
            >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
        </ResponsiveContainer>
    </div>
</div>
  )
}
