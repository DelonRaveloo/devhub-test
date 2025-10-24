import * as React from 'react';
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';

const margin = { right: 24 };

const pData = [2, 4, 6, 8, 10, 12, 14, 16, 12, 8, 4, 6]; // tâches planifiées
const uData = [1, 3, 5, 7, 9, 11, 10, 15, 11, 7, 3, 5]; // tâches terminées

const xLabels = [
  'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin',
  'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'
];

const yTicks = [0, 4, 8, 12, 16, 20];

export default function MonthlyTaskChart() {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md mt-6">
        <h3 className="text-gray-600 font-bold mb-4 text-lg text-center">Progression des tâches</h3>
        <Box sx={{ width: '100%', height: 300 }}>
          <LineChart
            series={[
              { data: pData, label: 'Planifiées', color: '#3B82F6' },
              { data: uData, label: 'Terminées', color: '#10B981' },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
            yAxis={[{ width: 50, ticks: yTicks }]}
            margin={margin}
          />
        </Box>
      </div>  
    );
}