import Friend from "../Friends/Friend";
import Special from "../Special/Special";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      <section>
        {asset && <Special asset={asset} />}
        {name === "Rubayya" && <Friend />}
      </section>
    </div>
  );
};

export default Cousin;
