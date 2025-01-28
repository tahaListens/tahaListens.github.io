import { FaGithub, FaLinkedin, FaWordpress, FaYoutube, FaTwitch } from "react-icons/fa";

function Links() {
    const links = [
        { name: "GitHub", url: "https://github.com/yourusername", icon: <FaGithub /> },
        { name: "Blog", url: "https://jazzbuildsthe919.wordpress.com", icon: <FaWordpress /> },
        { name: "Youtube", url: "https://www.youtube.com/@tahaListens", icon: <FaYoutube /> },
        { name: "Twitch", url: "https://www.twitch.tv/tahalistens", icon: <FaTwitch /> },
        { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: <FaLinkedin /> },


    ];

    return (
        <div className="mt-8 flex flex-col items-center">
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-64 mb-4 py-2 flex items-center justify-center gap-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all"
                >
                    {link.icon}
                    {link.name}
                </a>
            ))}
        </div>
    );
}

export default Links; 
