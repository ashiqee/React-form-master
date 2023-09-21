import Brother from "../Brohter/Brother";
import MySelf from "../Myself/MySelf";
import Sister from "../Sister/Sister";

const Dad = ({ asset }) => {
  return (
    <div>
      <h2>Dad</h2>
      <section className="flex">
        <MySelf asset={asset} />
        <Brother />
        <Sister />
      </section>
    </div>
  );
};

export default Dad;
