export const routes = [
  { name: 'Home', path: '/', icon: 'fa-home', active: true },
  { name: 'Analytics', path: '/analytics', icon: 'fa-chart-line' },
  { name: 'Reports', path: '/reports', icon: 'fa-file-alt' },
  { name: 'Tasks', path: '/tasks', icon: 'fa-check-square' },
  { name: 'Messages', path: '/messages', icon: 'fa-comments' },
  { name: 'Settings', path: '/settings', icon: 'fa-cog' },
]

export const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [25, 35, 45, 30, 70, 65],
      borderColor: '#3B82F6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      fill: true,
    },
    {
      label: 'Expenses',
      data: [8, 25, 35, 50, 50, 55],
      borderColor: '#22C55E',
      backgroundColor: 'rgba(34, 197, 94, 0.1)',
      fill: true,
    },
  ],
}

export const tasks = [
  {
    id: 1,
    name: 'Design Homepage',
    status: 'In Progress',
    assignedTo: 'John Doe',
    dueDate: 'May 15, 2024',
  },
  {
    id: 2,
    name: 'Update Server',
    status: 'Completed',
    assignedTo: 'Alice Smith',
    dueDate: 'May 10, 2024',
  },
  {
    id: 3,
    name: 'Client Meeting',
    status: 'Pending',
    assignedTo: 'Michael Brown',
    dueDate: 'May 18, 2024',
  },
  {
    id: 4,
    name: 'Write Report',
    status: 'In Progress',
    assignedTo: 'Sarah Lee',
    dueDate: 'May 20, 2024',
  },
  {
    id: 5,
    name: 'Code Review',
    status: 'Pending',
    assignedTo: 'David Wilson',
    dueDate: 'May 22, 2024',
  },
  {
    id: 6,
    name: 'Marketing Plan',
    status: 'Completed',
    assignedTo: 'Emma Davis',
    dueDate: 'May 12, 2024',
  },
  {
    id: 7,
    name: 'Product Launch',
    status: 'In Progress',
    assignedTo: 'Olivia Martinez',
    dueDate: 'May 25, 2024',
  },
  {
    id: 8,
    name: 'Customer Feedback',
    status: 'Pending',
    assignedTo: 'James Taylor',
    dueDate: 'May 28, 2024',
  },
]

export const messages = [
  { id: 1, sender: 'Mike', preview: 'Please review the latest report...' },
  { id: 2, sender: 'Emma', preview: 'Meeting moved to 3 PM...' },
  { id: 3, sender: 'David', preview: 'The server update is complete.' },
]

export const events = [
  { id: 1, title: 'Project Deadline', date: 'May 25, 2024' },
  { id: 2, title: 'Team Meeting', date: 'May 22, 2024' },
]
