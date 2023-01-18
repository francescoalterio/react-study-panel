import { TechnologyCard } from "../components/TechnologyCard";
import { useTechnology } from "../hooks/useTechnology";

const Dominated = () => {
  const { userData, deleteHandler } = useTechnology();

  return (
    <div className="w-full h-screen pb-20">
      <div className="w-full h-screen flex flex-wrap justify-evenly pt-10 pb-20 lg:pb-0s overflow-auto">
        {userData.dominated.map(({ technology, createdBy, img, id }) => (
          <TechnologyCard
            technology={technology}
            createdBy={createdBy}
            img={img}
            id={id}
            btn1={{
              content: "Delete",
              theme: "btn-alternative",
              onClick: () => deleteHandler("dominated", id),
            }}
            status="dominated-page"
          />
        ))}
      </div>
    </div>
  );
};

export default Dominated;
