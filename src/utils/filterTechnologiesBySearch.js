export function filterTechnologiesBySearch(technologies, search) {
  return technologies.filter((tech) => {
    const lowerCaseTech = tech.technology.toLowerCase();
    const lowerCaseSearchInput = search.toLowerCase();
    return lowerCaseTech.includes(lowerCaseSearchInput);
  });
}
