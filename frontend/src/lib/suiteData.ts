export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AIRoboticsAutomationOperationsAssistant', ownership: 'Records source capabilities and workflows', coverage: ['Records', 'Workspaces', 'Requests'] },
  { name: 'AIRoboticsAutomationOperationsOperations', ownership: 'Workspaces source capabilities and workflows', coverage: ['Cases', 'Schedules', 'Resources'] },
  { name: 'AIRoboticsAutomationOperationsAnalytics', ownership: 'Requests source capabilities and workflows', coverage: ['Approvals', 'Exceptions', 'Compliance'] },
  { name: 'AIRoboticsAutomationOperationsWorkflow', ownership: 'Cases source capabilities and workflows', coverage: ['Analytics', 'Forecasts', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Records', value: '84', note: 'Active' },
  { label: 'Workspaces', value: '61', note: 'Open' },
  { label: 'Requests', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Records operating view', 'Workspaces operating view', 'Requests operating view', 'Cases operating view', 'Schedules operating view', 'Resources operating view', 'Approvals operating view', 'Exceptions operating view'];
export const workflowHighlights = ['Records workflow with records, approvals, audit, and reporting', 'Workspaces workflow with records, approvals, audit, and reporting', 'Requests workflow with records, approvals, audit, and reporting', 'Cases workflow with records, approvals, audit, and reporting', 'Schedules workflow with records, approvals, audit, and reporting'];
