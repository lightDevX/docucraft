import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div className="hidden lg:flex">
            <Link href="/">
                <Image
                    className="h-6 w-auto"
                    src="/logo.svg"
                    alt="Protocol"
                    width={100}
                    height={60}
                    priority
                />
            </Link>
        </div>
    );
};

export default Logo;