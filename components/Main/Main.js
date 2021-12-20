import CenterItem from "./mainItems/centerItem";
import LeftItem from "./mainItems/leftItem";
import RightItem from "./mainItems/rightItem";

export default () => {
    return (
        <section className="flex-space-btw-no-ai mainContent">
            <LeftItem />
            <CenterItem />
            <RightItem />
      </section>
    );
}