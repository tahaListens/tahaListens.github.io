import { FaGithub, FaLinkedin, FaWordpress, FaYoutube, FaTwitch, FaInstagram, FaDiscord, FaDollarSign, FaTiktok, FaDownload } from "react-icons/fa";

function Links() {
    const links = [
        { name: "View Resume", url: "/assets/files/taha_Resume_2025.pdf", icon: < FaDownload />, download: true },
        { name: "GitHub", url: "https://github.com/tahaListens", icon: <FaGithub /> },
        { name: "Blog", url: "https://jazzbuildsthe919.wordpress.com", icon: <FaWordpress /> },
        { name: "Youtube", url: "https://www.youtube.com/@tahaListens", icon: <FaYoutube /> },
        { name: "Twitch", url: "https://www.twitch.tv/tahalistens", icon: <FaTwitch /> },
        { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: <FaLinkedin /> },
        { name: "Instagram", url: "https://www.instagram.com/tahalistens", icon: <FaInstagram /> },
        { name: "Discord", url: "https://discord.gg/kuym92hC6P", icon: <FaDiscord /> },
        { name: "TikTok", url: "https://www.tiktok.com/@tahalistens", icon: < FaTiktok /> },
        { name: "Donate", url: "https://paypal.me/tahaListens?country.x=US&locale.x=en_US", icon: <FaDollarSign /> }


    ];

    return (
        <div className="mt-8 flex flex-col items-center">
            <a href=""></a>

            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.url}

                    className="mb-3 w-56 py-2 px-4 flex items-center justify-center gap-2 
                        bg-white text-blue-500 rounded-md shadow-sm hover:shadow-md 
                        border border-gray-200 transition-all"                >
                    {link.icon}
                    {link.name}
                </a>
            ))}
        </div>
    );
}

export default Links; 
