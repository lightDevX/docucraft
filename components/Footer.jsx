import Link from "next/link";

const Footer = () => {
    return (
        <div>
            <h2 className="mx-auto p-2 mt-12 text-center text-teal-700 font-bold bg-gradient-to-r from-indigo-300 via-red-200 to-teal-200">Developed By <strong><Link href="https://github.com/lightDevX"> Hasan U Khan </Link></strong></h2>
        </div >
    );
};

export default Footer;