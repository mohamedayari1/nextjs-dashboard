import { lusitana } from '@/app/ui/fonts';

export default function Page() {
    return <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
        Customers page
    </p>;
}