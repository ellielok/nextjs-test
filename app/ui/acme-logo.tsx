import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="size-10 flex-none rotate-[20deg]" />
      <p className="text-[34px] text-nowrap">Park Wise</p>
    </div>
  );
}
