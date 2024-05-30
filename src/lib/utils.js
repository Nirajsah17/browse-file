function findDirectoryById(json, targetId) {
  if (json.id === targetId) {
    return json;
  }
  if (json.type === 'directory' && json.children) {
    for (let child of json.children) {
      const result = findDirectoryById(child, targetId);
      if (result) {
        return result;
      }
    }
  }
  return null;
}

function listContents(json, targetId) {
  const targetDirectory = findDirectoryById(json, targetId);
  if (!targetDirectory || targetDirectory.type !== 'directory') {
    return null;
  }
  return targetDirectory.children;
}

export { listContents };