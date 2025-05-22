import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function LearnMoreButton() {
  return (
    <div className="bg-transparent shadow-sm sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <p className="text-base font-semibold">Tao's Story</p>
        <div className="mt-3 text-sm/10">
          <Link
            to="/learn-more-tao"
            className="text-emerald-500 hover:text-emerald-400"
          >
            Learn more
            <ChevronRightIcon className="h-4 w-4 inline-block" />
          </Link>
        </div>
      </div>
    </div>
  );
}
