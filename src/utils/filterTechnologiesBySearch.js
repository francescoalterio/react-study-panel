export function filterTechnologiesBySearch(technologies, search) {
  technologies.filter((tech) => {
    const lowerCaseTech = tech.technology.toLowerCase();
    const lowerCaseSearchInput = search.toLowerCase();
    return lowerCaseTech.includes(lowerCaseSearchInput);
  });
}
