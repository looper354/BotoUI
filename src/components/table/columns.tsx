'use client';

import { type NewAlarm } from '@/server/api/routers/alarms';
import { type ColumnDef } from '@tanstack/react-table';
import { Check, X } from 'lucide-react';

import { Button } from '../ui/button';

export type TableData = NewAlarm & {
  id: string;
  caGetValue: number;
};

type Actions = {
  subscribeAlarm: (id: string) => void;
  removeFromView: (id: string) => void;
};

export const generateColumns = (actions: Actions): ColumnDef<TableData>[] => [
  {
    accessorKey: 'pvName',
    header: 'PV Name',
  },
  {
    accessorKey: 'caGetValue',
    header: 'Value',
  },
  {
    accessorKey: 'alarmType',
    header: 'Alarm Type',
  },
  {
    accessorKey: 'alarmValue',
    header: 'Alarm Value',
  },
  {
    accessorKey: 'notificationType',
    header: 'Notification Type',
  },
  {
    id: 'subscribeAlarm',
    cell: ({ row }) => (
      <Button
        variant="ghost"
        className="h-8 w-8 p-0"
        onClick={() => actions.subscribeAlarm(row.original.id)}
      >
        <span className="sr-only">Remove from view</span>
        <Check className="h-4 w-4" />
      </Button>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'removeFromView',
    cell: ({ row }) => (
      <Button
        variant="ghost"
        className="h-8 w-8 p-0"
        onClick={() => actions.removeFromView(row.original.id)}
      >
        <span className="sr-only">Remove from view</span>
        <X className="h-4 w-4" />
      </Button>
    ),
  },
];
