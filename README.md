# Robotics Automation Operations Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIRoboticsAutomationOperationsAssistant`
- `AIRoboticsAutomationOperationsOperations`
- `AIRoboticsAutomationOperationsAnalytics`
- `AIRoboticsAutomationOperationsWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/robotics-automation-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:4800`

Seeded users:
- `admin@robotics-automation-operations.local / admin123`
- `manager@robotics-automation-operations.local / manager123`
- `analyst@robotics-automation-operations.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/robotics-automation-operations-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:4800 npm run smoke
```
