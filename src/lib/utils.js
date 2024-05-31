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

function findDirectoryByIdWithPath(json, targetId, path = []) {
  // Add the current directory to the path
  path.push({ name: json.name, id: json.id });

  if (json.id === targetId) {
    return { directory: json, path };
  }

  if (json.type === 'directory' && json.children) {
    for (let child of json.children) {
      const result = findDirectoryByIdWithPath(child, targetId, [...path]);
      if (result) {
        return result;
      }
    }
  }
  // If not found, remove the current directory from the path
  path.pop();
  return null;
}

function getBreadcrumbPath(json, targetId) {
  const result = findDirectoryByIdWithPath(json, targetId);
  if (!result || result.directory.type !== 'directory') {
    return null;
  }
  return result.path;
}

export { listContents , getBreadcrumbPath};