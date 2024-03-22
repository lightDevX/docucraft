import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MobileHeader = () => {
    return (
        <div className="flex items-center gap-5 lg:hidden">
            <button
                type="button"
                className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
                aria-label="Toggle navigation"
            >
                <Image
                    src="hamburger.svg"
                    alt="Menu"
                    className="w-2.5 stroke-zinc-900 dark:stroke-white"
                    width={100}
                    height={40}
                />
            </button>
            <Link href="/">
                <Image
                    src="logo.svg"
                    alt="Protocol"
                    className="h-6"
                    width={100}
                    height={40}
                />
            </Link>
        </div>
    );
};

export default MobileHeader;