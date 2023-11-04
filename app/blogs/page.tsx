import { title } from "@/components/primitives";
import { Dial } from "@/components/ui/SpeedDial";

export default function BlogPage() {
	return (
    <div>
      <h1 className={title()}>
        <>Blog</>
        <div className="">
          <Dial />
        </div>
      </h1>
    </div>
  );
}
