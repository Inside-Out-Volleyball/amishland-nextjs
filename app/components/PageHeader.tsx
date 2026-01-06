import Image from "next/image";
import ImageSlider from "./ImageSlider";

type PageHeaderProps = {
  title: string;
  subtitle: string;
  withSlider?: boolean;
};

export default function PageHeader({ title, subtitle, withSlider = false }: PageHeaderProps) {
  return (
    <header className={`relative overflow-hidden text-white shadow-lg ${withSlider ? 'bg-gray-900' : 'bg-linear-to-r from-pink-600 via-pink-700 to-pink-800'}`}>
      {withSlider ? (
        <>
          <div className="absolute inset-0" aria-hidden="true">
            <ImageSlider className="h-full min-h-[340px] md:min-h-[440px]" rounded={false} showShadow={false} />
          </div>
          <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/25 to-black/60" aria-hidden="true"></div>
        </>
      ) : (
        <div className="absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute -left-20 top-[-10%] h-64 w-64 rounded-full bg-pink-400 blur-3xl"></div>
          <div className="absolute right-[-5%] top-1/4 h-72 w-72 rounded-full bg-rose-500 blur-3xl"></div>
        </div>
      )}

      <div className="relative max-w-6xl mx-auto px-4 py-10 md:py-14 text-center">
        <div className="mx-auto mb-5 md:mb-6 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl">
            <Image
              src="/amishland_logo.png"
              alt="Amishland Grand Prix 2026"
              fill
              sizes="(max-width: 768px) 128px, 160px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl backdrop-blur-sm bg-black/35 border border-white/20 rounded-2xl px-6 py-4 md:px-8 md:py-5 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-2" style={{ fontFamily: "var(--font-bebas-neue)" }}>{title}</h1>
          <p className="text-base md:text-lg font-medium text-pink-50/90">{subtitle}</p>
        </div>
      </div>
    </header>
  );
}
