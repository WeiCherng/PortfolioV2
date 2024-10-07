import Cont from "@/components/common/Cont";
import Link from "next/link";

export default function NotFound() {
  return (
    <Cont>
      <div className="text-xl flex flex-col items-center">
        <h2>Page Not Found</h2>
        <Link href="/about" className="mt-5 hover:underline">Return Home</Link>
      </div>
    </Cont>
  );
}
