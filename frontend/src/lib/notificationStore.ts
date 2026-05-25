import { ensureListSeed, listPgPayloads, replacePgPayloads } from '@/lib/postgres';
export type NotificationItem = { id: string; title: string; detail: string; read: boolean };
const seed: NotificationItem[] = [
  { id: 'note-1', title: 'Records alert', detail: 'Records queue needs review.', read: false },
  { id: 'note-2', title: 'Workspaces approval due', detail: 'Workspaces exception list needs approval.', read: false },
  { id: 'note-3', title: 'Requests updated', detail: 'Requests operating queue was refreshed.', read: true },
];
async function ensureStore() { await ensureListSeed('notifications', seed, 'notifications.json') }
export async function getNotifications(): Promise<NotificationItem[]> { await ensureStore(); return listPgPayloads<NotificationItem>('notifications') }
export async function saveNotifications(items: NotificationItem[]) { await ensureStore(); await replacePgPayloads('notifications', items) }
