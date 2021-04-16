export function ascDate(a, b) {
  const dateA = new Date(a.date);

  const dateB = new Date(b.date);

  return dateB - dateA;
}

export function descDate(a, b) {
  const dateA = new Date(a.date);

  const dateB = new Date(b.date);

  return dateA - dateB;
}

export function ascTitle(a, b) {
  const titleA = a.title.toLowerCase();
  const titleB = b.title.toLowerCase();

  if (titleA > titleB) {
    return 1;
  } else if (titleA < titleB) {
    return -1;
  }

  return 0;
}

export function ascMail(a, b) {
  const emailA = a.createdBy.toLowerCase();
  const emailB = b.createdBy.toLowerCase();

  if (emailA > emailB) {
    return 1;
  } else if (emailA < emailB) {
    return -1;
  }

  return 0;
}
