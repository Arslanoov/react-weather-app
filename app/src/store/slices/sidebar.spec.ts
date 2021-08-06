import { store } from 'store';

import { toggleSidebar } from 'store/slices/sidebar';

describe('Sidebar slice', () => {
  test('sidebar toggle', () => {
    expect(store.getState().sidebar.isCollapsed).toBe(true);
    store.dispatch(toggleSidebar());
    expect(store.getState().sidebar.isCollapsed).toBe(false);
    store.dispatch(toggleSidebar());
    expect(store.getState().sidebar.isCollapsed).toBe(true);
  });
});
