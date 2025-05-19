export default function ReadMoreButton() {
  return (
    <div className="bg-transparent shadow-sm sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold">By Maya Angelou</h3>
        <div className="mt-3 text-sm/6">
          <a
            href="#"
            className="font-semibold text-emerald-500 hover:text-emerald-400"
          >
            Read more
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
