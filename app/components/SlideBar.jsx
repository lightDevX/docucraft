import Link from "next/link";

const SlideBar = () => {
    return (
        <nav class="hidden lg:mt-10 lg:block">
            <ul role="list" class="border-l border-transparent">
                <li class="relative">
                    <Link
                        aria-current="page"
                        class="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
                        href="/docs"
                    ><span class="truncate">Introduction</span></Link>
                    <ul role="list" style="opacity: 1">
                        <li>
                            <Link
                                class="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                href="/docs#guides"
                            ><span class="truncate">Guides</span></Link>
                        </li>
                        <li>
                            <Link
                                class="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                href="/docs#resources"
                            ><span class="truncate">Resources</span></Link>
                        </li>
                        <li>
                            <Link
                                class="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                href="/docs#test"
                            ><span class="truncate">Test</span></Link>
                        </li>
                    </ul>
                </li>
                <li class="relative">
                    <Link
                        class="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        href="/docs/quickstart"
                    ><span class="truncate">Quickstart</span></Link>
                </li>
                <li class="relative">
                    <Link
                        class="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        href="/docs/sdks"
                    ><span class="truncate">SDKs</span></Link>
                </li>
                <li class="relative">
                    <Link
                        class="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        href="/docs/authentication"
                    ><span class="truncate">Authentication</span></Link>
                </li>
                <li class="relative">
                    <Link
                        class="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        href="/docs/pagination"
                    >
                        <span class="truncate">Pagination</span></Link>
                </li>
                <li class="relative">
                    <Link
                        class="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        href="/docs/errors"
                    ><span class="truncate">Errors</span></Link>
                </li>
                <li class="relative">
                    <Link
                        class="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        href="/docs/webhooks"
                    ><span class="truncate">Webhooks</span></Link>
                </li>
            </ul>
        </nav>
    );
};

export default SlideBar;