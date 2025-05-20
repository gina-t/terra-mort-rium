
export type PoemCardProps = {
  poet: string;
  title: string;
  content: string;
  cornerClass?: string;
};

export default function PoemCard({ poet, title, content, cornerClass = "" }: PoemCardProps) {
  return (
    <div className={`h-full overflow-hidden rounded-lg bg-gray-950 ring-1 ring-white/15 ${cornerClass}`}>
      <div className="p-6 sm:p-10">
        <h3 className="text-sm/4 font-semibold">{poet}</h3>
        <p className="mt-2 text-lg font-medium tracking-tight">{title}</p>
        <div 
          className="mt-4 text-base/6 font-sans prose prose-invert prose-gray"
          dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }}
        />
      </div>
    </div>
  );
}