import { lusitana } from '@/app/ui/fonts';

export default function Page() {
    return (
        <div>
            <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                Welcome to the Dashboard!
            </p>
        </div>
    )
}