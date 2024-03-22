
const ResultCard = () => {
    return (
        <div
            class="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow"
        >
            <p class="!text-lg">
                Showing results for
                <span class="font-semibold">`keyword`:</span>
            </p>
            <ul role="list" class="divide-y divide-gray-100 [&>*]:py-2">
                <li class="">
                    <a class="transition-all hover:text-emerald-600" href="#"
                    >How to create a new component in Vue.js</a
                    >
                </li>
                <li class="">
                    <a class="transition-all hover:text-emerald-600" href="#"
                    >How to create a new component in React.js</a
                    >
                </li>
                <li class="">
                    <a class="transition-all hover:text-emerald-600" href="#"
                    >Next.js Routing</a
                    >
                </li>
                <li class="">
                    <a class="transition-all hover:text-emerald-600" href="#"
                    >SSR - What is it?</a
                    >
                </li>
            </ul>
        </div>
    );
};

export default ResultCard;