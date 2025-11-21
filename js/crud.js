(function () {
  const STORAGE_KEY = 'simple-crud-records';

  function getAll() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.warn('Failed to parse saved records', e);
      return [];
    }
  }

  function saveAll(records) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  }

  function nextId(records) {
    const maxId = records.reduce((max, item) => Math.max(max, item.id || 0), 0);
    return maxId + 1;
  }

  function getById(id) {
    return getAll().find((record) => Number(record.id) === Number(id));
  }

  function upsert(record) {
    const records = getAll();
    if (record.id) {
      const index = records.findIndex((item) => Number(item.id) === Number(record.id));
      if (index !== -1) {
        records[index] = { ...records[index], ...record };
      } else {
        records.push({ ...record, id: Number(record.id) });
      }
    } else {
      records.push({ ...record, id: nextId(records) });
    }
    saveAll(records);
    return record.id || records[records.length - 1].id;
  }

  function remove(id) {
    const records = getAll().filter((item) => Number(item.id) !== Number(id));
    saveAll(records);
  }

  function seedDefaults() {
    if (getAll().length) return;
    saveAll([
      { id: 1, name: 'Alice', email: 'alice@example.com', note: '喜歡閱讀與烹飪' },
      { id: 2, name: 'Bob', email: 'bob@example.com', note: '公司 IT 支援' },
      { id: 3, name: 'Carol', email: 'carol@example.com', note: '專案經理' }
    ]);
  }

  window.SimpleCrud = {
    getAll,
    saveAll,
    getById,
    upsert,
    remove,
    seedDefaults
  };
})();
