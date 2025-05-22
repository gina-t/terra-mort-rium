export type SoundTrackCardProps = {
  year: string;
  dj1?: string;
  dj2?: string;
  dj3?: string;
  dj4?: string;
  dj5?: string;
  title?: string;
  content?: string;
  color?: string;
  cornerClass?: string;
};

export default function SoundTrackCard({ 
  year, 
  dj1 = "", 
  dj2 = "",
  dj3 = "",
  dj4 = "",
  dj5 = "",
  title = "",
  content = "",
  color = "",
  cornerClass = ""
}: SoundTrackCardProps) {
  return (
    <div className={`h-full overflow-hidden rounded-lg ${color} ring-1 ring-white/15 ${cornerClass}`}>
      <div className="p-6 sm:p-10">
        <h1 className="text-base/4 font-medium text-gray-900">{year}</h1>
        {dj1 && <h2 className="text-base/4 font-medium text-gray-900">{dj1}</h2>}
        {dj2 && <h2 className="text-base/4 font-medium text-gray-900">{dj2}</h2>}
        {dj3 && <h2 className="text-base/4 font-medium text-gray-900">{dj3}</h2>}
        {dj4 && <h2 className="text-base/4 font-medium text-gray-900">{dj4}</h2>}
        {dj5 && <h2 className="text-base/4 font-medium text-gray-900">{dj5}</h2>}
        {title && <p className="mt-2 text-lg font-medium tracking-tight text-gray-900">{title}</p>}
        {content && (
          <div 
            className="mt-4 text-base/6 font-sans prose prose-gray"
            dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }}
          />
        )}
      </div>
    </div>
  );
}