import SearchBar from "../components/SearchBar";
import { TechnologyCard } from "../components/TechnologyCard";
import { useTechnology } from "../hooks/useTechnology";
import { useTextInput } from "../hooks/useTextInput";
import { filterTechnologiesBySearch } from "../utils/filterTechnologiesBySearch";

const Technologies = () => {
  const { userData, technologies, handleLearn, handleDominated } =
    useTechnology();

  const { searchInputText, onChangeInput } = useTextInput();

  const technologiesFilteredBySearch = filterTechnologiesBySearch(
    technologies,
    searchInputText
  );

  return (
    <div className="w-full h-screen ">
      <SearchBar value={searchInputText} onChange={onChangeInput} />
      <div className="w-full h-screen flex flex-wrap justify-evenly pt-10 pb-40 lg:pb-20 overflow-auto">
        {technologiesFilteredBySearch.map(
          ({ technology, createdBy, img, id }) => (
            <TechnologyCard
              key={id}
              technology={technology}
              createdBy={createdBy}
              img={img}
              id={id}
              btn1={{
                content: "Dominated",
                theme: "btn-primary",
                onClick: () => handleDominated(technology, createdBy, img, id),
              }}
              btn2={{
                content: "Learn",
                theme: "btn-secondary",
                onClick: () => handleLearn(technology, createdBy, img, id),
              }}
              status={
                userData.learning.find((tech) => tech.id === id)
                  ? "learning"
                  : userData.dominated.find((tech) => tech.id === id)
                  ? "dominated"
                  : ""
              }
            />
          )
        )}
      </div>
    </div>
  );
};

export default Technologies;
