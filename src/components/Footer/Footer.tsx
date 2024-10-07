import Image from "next/image";

const Footer = () => {
    return (
        <footer className="flex align-center justify-center my-6">
            <Image src="logo.svg" alt="logo" width={42} height={42}/>
        </footer>
    )
}

export default Footer;