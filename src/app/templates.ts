export const createHeaderSubheading = (text: string = "") => ({
  id: crypto.randomUUID(),
  text,
});

export const createEducationEntry = () => ({
  title: "",
  subtitle: "",
  location: "",
  start_date: new Date(),
  end_date: new Date(),
  id: crypto.randomUUID(),
});

export const createWorkExperienceEntry = () => ({
  title: "",
  subtitle: "",
  location: "",
  start_date: new Date(),
  end_date: new Date(),
  points: [],
  id: crypto.randomUUID(),
});

export const createProjectExperienceEntry = () => ({
  id: crypto.randomUUID(),
  title: "",
  subtitle: "",
  link: "",
  points: [],
  start_date: new Date(),
  end_date: new Date(),
});

export const createPoint = (text: string = "") => ({
  id: crypto.randomUUID(),
  text,
});

